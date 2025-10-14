using Domain.Entities;
using Domain.Interfaces.Services;

namespace Application.Services;

internal class ProductsService : IProductsService
{
    public async Task<IEnumerable<Product>> GetAsync()
    {
        throw new NotImplementedException();
    }

    public async Task<Product> GetAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task CreateAsync()
    {
        throw new NotImplementedException();
    }

    public async Task PatchAsync(Guid id)
    {
        throw new NotImplementedException();
    }

    public async Task DeleteAsync(Guid id)
    {
        throw new NotImplementedException();
    }
}