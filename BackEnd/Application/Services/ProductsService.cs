using Domain.Entities;
using Domain.Interfaces.Repositories;
using Domain.Interfaces.Services;
using Domain.Models.Dtos;
using Domain.Models.Requests;

namespace Application.Services;

internal class ProductsService(IProductsRepository repository) : IProductsService
{
    public async Task<IEnumerable<ProductDto>> GetAsync(GetProductsRequest request)
    {
        var list = await repository.GetAsync(x =>
            (string.IsNullOrWhiteSpace(request.Name) || x.Name.Contains(request.Name) || request.Name.Contains(request.Name)) &&
            (string.IsNullOrWhiteSpace(request.Description) || x.Description.Contains(request.Description) || request.Description.Contains(request.Description)) &&
            (request.MinPrice == null || request.MinPrice < x.Price) &&
            (request.MaxPrice == null || request.MaxPrice > x.Price)
        );
        
        return list.Select(x => (ProductDto)x);
    }

    public async Task<ProductDto> GetAsync(Guid id)
    {
        var entity = await repository.FindAsync(id);
        if (entity == null) throw new ArgumentException("Entity not found");
        return entity;
    }

    public Task CreateAsync(ProductDto product) => repository.InsertAsync(new Product(product));

    public async Task PatchAsync(Guid id, ProductDto product)
    {
        var entity = await repository.FindAsync(id);
        if (entity == null)  throw new ArgumentException("Entity not found");
        entity.Update(product);
        await repository.SaveChangesAsync();
    }

    public Task DeleteAsync(Guid id) => repository.DeleteAsync(id);
}