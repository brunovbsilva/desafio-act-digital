using Domain.Entities;

namespace Domain.Interfaces.Services;

public interface IProductsService
{
    Task<IEnumerable<Product>> GetAsync();
    Task<Product> GetAsync(Guid id);
    Task CreateAsync();
    Task PatchAsync(Guid id);
    Task DeleteAsync(Guid id);
}