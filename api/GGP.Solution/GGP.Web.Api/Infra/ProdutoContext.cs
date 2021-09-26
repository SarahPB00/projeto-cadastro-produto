using GGP.Web.Api.Infra.Mappings;
using GGP.Web.Api.Models;
using Microsoft.EntityFrameworkCore;

namespace CadApi.Infra {
    public class ProdutoContext : DbContext {
        public ProdutoContext(DbContextOptions<ProdutoContext> options)
            : base(options) {
        }

        public DbSet<Produto> Produtos { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder) {

            modelBuilder.ApplyConfiguration(new ProdutoMap());
        }
    }
}
