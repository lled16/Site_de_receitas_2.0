using Microsoft.EntityFrameworkCore;

namespace MoogReceitas.Models
{

    [Keyless]
    public class Receita
    {

        public int id { get; set; }
        public string nome { get; set; }
        public int categoria { get; set; }
        public int tmp_preparo { get; set; }
        public int porcoes { get; set; }
        public string ingredientes { get; set; }
        public string modo_preparo { get; set; }
        public string img { get; set; }

    }
    }


