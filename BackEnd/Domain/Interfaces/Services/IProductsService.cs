using Domain.Models.Dtos;
using Domain.Models.Requests;

namespace Domain.Interfaces.Services;

public interface IProductsService
{
    Task<IEnumerable<ProductDto>> GetAsync(GetProductsRequest request);
    Task<ProductDto> GetAsync(Guid id);
    Task CreateAsync(ProductDto product);
    Task PatchAsync(Guid id, ProductDto product);
    Task DeleteAsync(Guid id);
}