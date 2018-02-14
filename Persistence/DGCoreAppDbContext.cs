using DGCoreApp.Models;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace DGCoreApp.Persistence
{
    public class DGCoreAppDbContext : DbContext
    {
        public DGCoreAppDbContext(DbContextOptions<DGCoreAppDbContext> options)
            : base(options)
        {

        }
        public DbSet<Make> Makes { get; set; }
    }
}
