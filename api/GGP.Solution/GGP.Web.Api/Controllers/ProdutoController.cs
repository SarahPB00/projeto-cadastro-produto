using CadApi.Infra;
using GGP.Web.Api.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace GGP.Web.Api.Controllers {
    [Route("api/[controller]")]
    [ApiController]
    public class ProdutoController : ControllerBase
    {
        private readonly ProdutoContext _context;

        public ProdutoController(ProdutoContext context)
        {
            _context = context;
        }

        [HttpGet("get-produtos")]        
        public async Task<ActionResult<IEnumerable<Produto>>> GetProdutos()
        {
            return await _context.Produtos.ToListAsync();
        }
        
        [HttpGet("get-produto/{id}")]
        public async Task<ActionResult<Produto>> GetProduto(int id)
        {
            var produto = await _context.Produtos.FindAsync(id);

            if (produto == null)
            {
                return NotFound();
            }

            return produto;
        }
                
        [HttpPut("{id}")]
        public async Task<IActionResult> PutCadastro(int id, Produto produto)
        {
            if (id != produto.Codigo)
            {
                return BadRequest();
            }

            if (_context.Produtos.Any(c => c.Descricao.Equals(produto.Descricao) && c.Codigo != produto.Codigo))
                return BadRequest($"Já existe um produto com a descrição {produto.Descricao}");

            produto.Validar();

            if (produto.HasError) {

                return BadRequest(produto.Validations);
            }

            _context.Entry(produto).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!_context.Produtos.Any(c=> c.Codigo.Equals(id)))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }
        
        [HttpPost]        
        public async Task<ActionResult<Produto>> Post(Produto produto)
        {

            if (_context.Produtos.Any(c => c.Descricao.Equals(produto.Descricao)))
                return BadRequest($"Já existe um produto com a descrição {produto.Descricao}");


            produto.Validar();

            if (produto.HasError) {

                return BadRequest(produto.Validations);
            }
            
            _context.Produtos.Add(produto);

            await _context.SaveChangesAsync();

            return Accepted();
        }
                
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var cadastro = await _context.Produtos.FindAsync(id);
            
            if (cadastro == null)
            {
                return NotFound();
            }

            _context.Produtos.Remove(cadastro);

            await _context.SaveChangesAsync();

            return NoContent();
        }        
    }
}
