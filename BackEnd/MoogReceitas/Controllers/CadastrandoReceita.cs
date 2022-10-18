using Microsoft.AspNetCore.Mvc;

namespace MoogReceitas.Controllers
{
    public class CadastrandoReceita
    {
        [HttpPost]
        public string CadReceita(int Id, string Titulo, string TempoPreparo, string Rendimento, string Ingredientes, string ModoPreparo, string Img)
        {


            return "Receita cadastrada !";
        }
    }
}
