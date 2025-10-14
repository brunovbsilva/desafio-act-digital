using Domain.Interfaces.Services;
using Domain.Models.Dtos;
using Domain.Models.Requests;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class ProductsController(IProductsService service) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get([FromQuery] GetProductsRequest request)
    {
        return Ok(await service.GetAsync(request));
    }
    [HttpPost]
    public async Task<IActionResult> Post([FromBody] ProductDto product)
    {
        await service.CreateAsync(product);
        return Created();
    }
    [HttpPatch("{id}")]
    public async Task<IActionResult> Patch([FromRoute] Guid id, [FromBody] ProductDto product)
    {
        await service.PatchAsync(id, product);
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete([FromRoute] Guid id)
    {
        await service.DeleteAsync(id);
        return NoContent();
    }
}