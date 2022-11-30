using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.EntityFrameworkCore;
using MoogReceitas.DataBase;
using MoogReceitas.Models;
using Newtonsoft.Json.Linq;
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
        public string CadReceita(CadastroReceita teste)
        {
            Console.WriteLine(teste);

            DataContext cadReceita = new();
            Random randNum = new Random();


            //teste.ID = randNum.Next();




            cadReceita.Receitas.Add(teste);
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


