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
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CadastrandoReceita
    {   

        [HttpPost]
        public string CadReceita(string name, int porcoes, int tmpPreparo, string categoria, string ingredientes, string modoPreparo)
        {

            DataContext cadReceita = new DataContext();
            Random randNum = new Random();


            var receita = new CadastroReceita()
            {
                ID = randNum.Next(),
                NOME = name,
                PORCOES = porcoes,
                TMP_PREPARO = tmpPreparo,
                CATEGORIA = categoria,
                INGREDIENTES = ingredientes,
                MODO_PREPARO = modoPreparo,
                IMG = ""
            };

            cadReceita.receitas.Add(receita);
            cadReceita.SaveChanges();

            return "Receita cadastrada !";
        }
    }
}
