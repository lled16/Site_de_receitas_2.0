using Microsoft.AspNetCore.Mvc;
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

          
            return "Receita cadastrada !";
        }
    }
}
