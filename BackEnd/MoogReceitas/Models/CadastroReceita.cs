namespace MoogReceitas.Models
{
    public class CadastroReceita
    {
        public int Id { get; set; }
        public string Titulo { get; set; }
        public string Categoria { get; set; }
        public int TempoPreparo { get; set; }
        public int Rendimento { get; set; }
        public string Ingredientes { get; set; }
        public string ModoPreparo { get; set; }
        //public string Img { get; set; }

    }
}
