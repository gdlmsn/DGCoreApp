using System.Threading.Tasks;
using DGCoreApp.Models;

namespace DGCoreApp.Persistence
{
    public interface IVehicleRepository
    {
        Task<Vehicle> GetVehicle(int id, bool includeRelated = true);
        void Add(Vehicle vehicle);
        void Remove(Vehicle vehicle);

    }
}