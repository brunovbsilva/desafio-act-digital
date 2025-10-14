namespace Domain.Models.Requests;

public class GetProductsRequest
{
    public string? Name { get; set; }
    public string? Description { get; set; }
    public int? MaxPrice { get; set; }
    public int? MinPrice { get; set; }
}