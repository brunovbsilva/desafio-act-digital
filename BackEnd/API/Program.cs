using API.Configurators;
using API.Middlewares;
using Infra.IoC;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();
builder.Services.AddOpenApi();
builder.Services
    .AddCorsConfiguration()
    .InjectDependencies(builder.Configuration);

var app = builder.Build();

if (app.Environment.IsDevelopment())
{
    app.MapOpenApi();
}

app.UseMiddleware<ExceptionMiddleware>();

app.UseHttpsRedirection();

app.UseLocalCors(builder.Environment);

app.UseAuthorization();

app.MapControllers();

await app.RunAsync();
