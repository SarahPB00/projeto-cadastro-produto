using GGP.Web.Api.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;

namespace GGP.Web.Api.Infra.Mappings {
    public class ProdutoMap : IEntityTypeConfiguration<Produto> {
        public void Configure(EntityTypeBuilder<Produto> builder) {

            builder.HasKey(c => c.Codigo);

            builder.Property(c => c.Descricao).HasColumnType("varchar(100)");

            builder.HasIndex(c => c.Descricao).IsUnique();

            builder.Property(c => c.Valor).HasColumnType("numeric(14,2)");

            builder.Ignore(c => c.HasError);

            builder.Ignore(c => c.Validations);                
        }
    }
}
