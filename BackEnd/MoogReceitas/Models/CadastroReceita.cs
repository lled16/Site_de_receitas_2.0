namespace MoogReceitas.Models
{
    public class CadastroReceita
    {
        public int ID { get; set; }
        public string NOME { get; set; }
        public int PORCOES { get; set; }
        public int TMP_PREPARO { get; set; }
        public int CATEGORIA { get; set; }
        public string INGREDIENTES { get; set; }
        public string MODO_PREPARO{ get; set; }
        public object IMG { get; set; }

    }
}
