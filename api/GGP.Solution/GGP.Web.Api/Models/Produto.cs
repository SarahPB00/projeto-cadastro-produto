using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text.Json.Serialization;

namespace GGP.Web.Api.Models {
    public class Produto {        
        public int Codigo { get; set; }
        public string Descricao { get; set; }
        public decimal Valor { get; set; }
        public int Quantidade { get; set; }
        public bool Inativo { get; set; }       

        public List<string> Validations = new List<string>();

        public void Validar() {            

            if (Quantidade < 0) {

                Validations.Add("Informe a quantidade válida.");
            }

            if (Valor < 0) {

                Validations.Add("Informe um valor válido.");
            }           
        }
        [JsonIgnore]
        public bool HasError => Validations.Any();
    }

}

