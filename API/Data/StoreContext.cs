using Microsoft.EntityFrameworkCore;
using API.Enities;

namespace API.Data
{
    public class StoreContext : DbContext
    {
        public StoreContext(DbContextOptions options) : base(options)
        {
            
        }

       public DbSet<Product> Products {get; set;}
    }
}