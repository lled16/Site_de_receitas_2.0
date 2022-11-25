using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using MoogReceitas.DataBase;
using MoogReceitas.Models;
using System.Data;
using System.Web.Http.Cors;

namespace MoogReceitas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CadastrandoReceita
    {   

        [HttpPost]
        public string CadReceita(string name, int porcoes, int tmpPreparo, string categoria, string ingredientes, string modoPreparo)
        {

            DataContext cadReceita = new DataContext();
            Random randNum = new Random();


            var receita = new CadastroReceita()
            {
                Id = randNum.Next(),
                Titulo = name,
                Categoria = categoria,
                TempoPreparo = tmpPreparo,
                Rendimento = porcoes,
                Ingredientes = ingredientes,
                ModoPreparo = modoPreparo
            };

            cadReceita.receitas.Add(receita);
            cadReceita.SaveChanges();
            return "Receita cadastrada !";
        }
    }
}
