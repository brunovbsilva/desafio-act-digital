using Domain.Models.Dtos;

namespace Domain.Entities;

public class Product(string name, string description, int price) : BaseEntity
{
    public Product(ProductDto product) : this(
        product.Name ?? string.Empty,
        product.Description ?? string.Empty,
        product.Price ?? 0
    )
    {
        if (string.IsNullOrWhiteSpace(product.Name)) throw new ArgumentNullException(nameof(name));
        if (string.IsNullOrWhiteSpace(product.Description)) throw new ArgumentNullException(nameof(description));
        if (product.Price is 0 or null) throw new ArgumentNullException(nameof(price));
    }
    public string Name { get; set; } = name;
    public string Description { get; set; } = description;
    public int Price { get; set; } = price;

    public void Update(ProductDto product)
    {
        if (string.IsNullOrWhiteSpace(product.Name)) throw new ArgumentNullException(nameof(name));
        Name = product.Name;
        if (string.IsNullOrWhiteSpace(product.Description)) throw new ArgumentNullException(nameof(description));
        Description = product.Description;
        if (product.Price is 0 or null) throw new ArgumentNullException(nameof(price));
        Price = product.Price ?? 0;
        base.Update();
    }
}