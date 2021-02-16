using System;

namespace HELP.API.Entities
{
    public class AppKyChngLog
    {
        public int Id { get; set; }

        public string KyNewChng { get; set; }

        public string KyChngDetails { get; set; }

        public DateTime KyCreated { get; set; }
    }
}