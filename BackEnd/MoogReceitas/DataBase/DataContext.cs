using Microsoft.EntityFrameworkCore;
using MoogReceitas.Models;

namespace MoogReceitas.DataBase
{
    public class DataContext : DbContext
    {
        public virtual DbSet<CadastroReceita> receitas { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer("Data Source = (localdb)\\MSSQLLocalDB;Initial Catalog=receitas;Integrated Security=True;Pooling=False;MultipleActiveResultSets=True");
        }
    }
}
