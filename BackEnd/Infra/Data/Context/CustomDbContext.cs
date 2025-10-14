using System.Diagnostics.CodeAnalysis;
using Domain.Entities;
using Infra.Data.Context.Configurations;
using Microsoft.EntityFrameworkCore;

namespace Infra.Data.Context
{
    [ExcludeFromCodeCoverage]
    public class CustomDbContext(DbContextOptions<CustomDbContext> options) : DbContext(options)
    {
        public virtual DbSet<Product> Products { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new ProductConfiguration());
            base.OnModelCreating(modelBuilder);
        }
    }
}
