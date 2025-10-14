using Domain.Entities;

namespace Domain.Models.Dtos;

public class ProductDto(string? name, string? description, int? price)
{
    public ProductDto() : this(null, null, null) {}

    public ProductDto(Product product) : this(product.Name, product.Description, product.Price)
    {
        Id = product.Id;
    }
    public Guid? Id { get; }
    public string? Name { get; init; } = name;
    public string? Description { get; init; } = description;
    public int? Price { get; init; } = price;
    
    public static implicit operator ProductDto(Product product) => new(product);
}