using HELP.API.Entities;
using Microsoft.EntityFrameworkCore;

namespace HELP.API.Data
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<AppKyChngLog> KyChngz { get; set; }
        
        public DbSet<AppKyFeature> KyFeatures { get; set; }
    }
}