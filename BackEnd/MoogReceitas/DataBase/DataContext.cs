using Microsoft.AspNetCore.Hosting.Server;
using Microsoft.EntityFrameworkCore;
using MoogReceitas.Models;

namespace MoogReceitas.DataBase
{
    public class DataContext : DbContext
    {
        public virtual DbSet<CadastroReceita> receitas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer("server=DESKTOP-278IVMV;database=MOOG_RECEITAS;trusted_connection=true;Integrated Security=SSPI;TrustServerCertificate=True;");

            //optionsBuilder.UseSqlServer("Server =(localdb)\\MSSQLLocalDB; Database = MOOG_RECEITAS; Integrated Security = SSPI; Uid = DESKTOP-278IVMV\\55319;");

            //optionsBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB;Initial Catalog=receitas;Integrated Security=false;Pooling=False;MultipleActiveResultSets=True");
        }
    }
}
