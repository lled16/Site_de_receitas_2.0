using Microsoft.AspNetCore.Mvc;

namespace MoogReceitas.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class CadastrandoReceita
    {
        [HttpPost(Name = "Cadastro")]
        public string CadReceita(int Id, string Titulo, string TempoPreparo, string Rendimento, string Ingredientes, string ModoPreparo, string Img)
        {

          
            return "Receita cadastrada !";
        }
    }
}
