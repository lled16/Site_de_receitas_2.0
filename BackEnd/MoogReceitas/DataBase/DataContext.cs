using Microsoft.EntityFrameworkCore;
using MoogReceitas.Models;

namespace MoogReceitas.DataBase
{
    public class DataContext : DbContext
    {
        public virtual DbSet<CadastroReceita> receitas { get; set; }
    
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {

            optionsBuilder.UseSqlServer("Data Source = mysql://root:d0NQIB7WNqJ3CMBWnMEP@containers-us-west-84.railway.app:7896/railway;Initial Catalog=railway;Integrated Security=True;Pooling=False;MultipleActiveResultSets=True");
        }
    }
}
