namespace Domain.Entities;

public class Product(string name, string description, int price) : BaseEntity
{
    public string Name { get; set; } = name;
    public string Description { get; set; } = description;
    public int Price { get; set; } = price;
}