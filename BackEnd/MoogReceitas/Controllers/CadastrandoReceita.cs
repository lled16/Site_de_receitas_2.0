using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Routing.Template;
using Microsoft.EntityFrameworkCore;
using MoogReceitas.DataBase;
using MoogReceitas.Models;
using Newtonsoft.Json.Linq;
using System.Data;
using System.Data.SqlClient;
using System.Web.Http.Cors;

namespace MoogReceitas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    //[EnableCors(origins: "*", headers: "*", methods: "*")]
    public class CadastrandoReceita
    {

        [HttpPost("cadastraReceita")]
        public string CadReceita(CadastroReceita cadNewReceita)
        {
            Console.WriteLine(cadNewReceita);

            DataContext cadReceita = new();
            Random randNum = new Random();


            //teste.ID = randNum.Next();




            cadReceita.Receitas.Add(cadNewReceita);
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
                        if (c.categoria == codCategoria)
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


        [HttpDelete("DeletaReceita")]
        public string DeletaReceita( int id)
        {
            SqlConnection con = new SqlConnection("server=DESKTOP-278IVMV;database=MOOG_RECEITAS;trusted_connection=true;Integrated Security=SSPI;TrustServerCertificate=True;");

            con.Open();

            DataContext context = new DataContext();

            SqlCommand comando = new SqlCommand("DELETE FROM receitas WHERE id =" + id, con);


            comando.ExecuteNonQuery();
            con.Close();


            return "Receita cadastrada !";
        }



        [HttpPost("AtualizaReceita")]
        public string AtualizaReceita(CadastroReceita newInfo)
        {
            SqlConnection con = new SqlConnection("server=DESKTOP-278IVMV;database=MOOG_RECEITAS;trusted_connection=true;Integrated Security=SSPI;TrustServerCertificate=True;");

            int id = newInfo.ID;
            string nome = newInfo.NOME;
            int porcoes = newInfo.PORCOES;
            int tmpPreparo = newInfo.TMP_PREPARO;
            string ingredientes = newInfo.INGREDIENTES;
            string modoPreparo = newInfo.MODO_PREPARO;



            con.Open();

            DataContext context = new DataContext();

            SqlCommand comando = 
            new SqlCommand("UPDATE receitas SET NOME = " + nome + ", PORCOES =" + porcoes +", TMP_PREPARO = " + tmpPreparo + ", INGREDIENTES = " + ingredientes + ", MODO_PREPARO = " + modoPreparo + " WHERE ID = " + id, con);


            comando.ExecuteNonQuery();
            con.Close();


            return "Receita cadastrada !";
        }


    }
}


