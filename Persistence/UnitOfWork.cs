using System.Threading.Tasks;

namespace DGCoreApp.Persistence
{
    public class UnitOfWork : IUnitOfWork
    {
        private readonly DGCoreAppDbContext context;

        public UnitOfWork(DGCoreAppDbContext context)
        {
            this.context = context;
        }

        public async Task CompleteAsync()
        {
           await context.SaveChangesAsync(); 
        }
    }
}
