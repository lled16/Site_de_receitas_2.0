using Microsoft.EntityFrameworkCore;

namespace MoogReceitas.Models
{

    [Keyless]
    public class Receita
    {
        
            //public int ID { get; set; }
            public string NOME { get; set; }
        //    public string CATEGORIA { get; set; }
        public int TMP_PREPARO { get; set; }
            public int porcoes { get; set; }
        //    public string INGREDIENTES { get; set; }
        //    public string MODO_PREPARO { get; set; }
        //    public string IMG { get; set; }

    }
    }


