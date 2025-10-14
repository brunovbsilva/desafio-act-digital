using Domain.Interfaces.Repositories;
using Infra.Data.Context;
using Infra.Data.Repositories;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;

namespace Infra.Data;
public static class DataInjector
{
    public static IServiceCollection InjectData(this IServiceCollection services, IConfiguration configuration)
    {
        services
            .InjectUnitOfWork()
            .InjectRepositories();
        return services;
    }
    
    private static IServiceCollection InjectUnitOfWork(this IServiceCollection services)
    {
        services.AddDbContext<CustomDbContext>(options => 
            options
                .UseLazyLoadingProxies()
                .UseInMemoryDatabase("Database")
        );
        services.AddScoped<IUnitOfWork, UnitOfWork>();
        return services;
    }
    
    private static IServiceCollection InjectRepositories(this IServiceCollection services)
    {
        services.AddScoped<IProductsRepository, ProductsRepository>();
        return services;
    }
}