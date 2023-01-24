using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using MoogReceitas.Models;

namespace MoogReceitas.DataBase
{
    public class DataContext : DbContext
    {
        public virtual DbSet<CadastroReceita> Receitas { get; set; }
        public virtual DbSet<Receita> receitas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            //Casa
            optionsBuilder.UseSqlServer("server=DESKTOP-278IVMV;database=MOOG_RECEITAS;trusted_connection=true;Integrated Security=SSPI;TrustServerCertificate=True;");


            //Brunsker
            optionsBuilder.UseSqlServer("server=DESKTOP-DB1EK8N;database=MOOG_RECEITAS;trusted_connection=true;Integrated Security=SSPI;TrustServerCertificate=True;");


        }
    }
}
