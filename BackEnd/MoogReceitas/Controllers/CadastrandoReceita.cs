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

        [HttpPost("cadastraReceita")]
        public string CadReceita(string name, int porcoes, int tmpPreparo, int categoria, string ingredientes, string modoPreparo, string img )
        {

            DataContext cadReceita = new();
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
                IMG = img
            };

            cadReceita.Receitas.Add(receita);
            cadReceita.SaveChanges();

            return "Receita cadastrada !";
        }

        [HttpGet("getReceitasTotal")]
        public List<Receita> RetornaReceitas(int codCategoria)
        {
            DataContext context = new();

            List<Receita> receitasCadastradas = new List<Receita>();

            try
            {
                foreach (var c in context.receitas)
                {

                    if (codCategoria != 0)
                    {
                        if (c.CATEGORIA == codCategoria)
                        {
                            receitasCadastradas.Add(c);
                        }
                    }
                    else
                    {
                        receitasCadastradas.Add(c);
                    }
                }
                return receitasCadastradas;
            }
            catch
            {
                return null;
            }

        }


    }
}


