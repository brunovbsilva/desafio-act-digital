using System.Diagnostics.CodeAnalysis;

namespace API.Configurators;
[ExcludeFromCodeCoverage]
public static class CorsConfigurator
{
    public static IServiceCollection AddCorsConfiguration(this IServiceCollection services)
    {
        services.AddCors(options =>
        {
            options.AddPolicy("AllowAll", builder =>
            {
                builder.AllowAnyOrigin()
                    .AllowAnyHeader()
                    .AllowAnyMethod();
            });
        });
        return services;
    }

    public static void UseLocalCors(this IApplicationBuilder app, IWebHostEnvironment environment)
    {
        app.UseCors("AllowAll");
    }
}