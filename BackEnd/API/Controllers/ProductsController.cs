using Domain.Interfaces.Services;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[ApiController]
[Route("api/[controller]")]
[Produces("application/json")]
public class ProductsController(IProductsService service) : ControllerBase
{
    [HttpGet]
    public async Task<IActionResult> Get()
    {
        return Ok(await service.GetAsync());
    }
    [HttpPost]
    public async Task<IActionResult> Post()
    {
        await service.CreateAsync();
        return Created();
    }
    [HttpPatch("{id}")]
    public async Task<IActionResult> Patch(Guid id)
    {
        await service.PatchAsync(id);
        return NoContent();
    }
    [HttpDelete("{id}")]
    public async Task<IActionResult> Delete(Guid id)
    {
        await service.DeleteAsync(id);
        return NoContent();
    }
}