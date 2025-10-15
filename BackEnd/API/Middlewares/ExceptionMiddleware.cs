using System.Net;
using System.Text.Json;
using Domain.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

namespace API.Middlewares
{
    public class ExceptionMiddleware(
        RequestDelegate next,
        IOptions<JsonOptions> options,
        ILogger<ExceptionMiddleware> logger
    )
    {
        private readonly JsonSerializerOptions _jsonOptions = options.Value.JsonSerializerOptions;
        public async Task InvokeAsync(HttpContext context)
        {
            try
            {
                await next(context);
            }
            catch (Exception ex)
            {
                logger.LogError(ex, "{Message} | Path: {Path}", "An unexpected exception was thrown.", context.Request.Path);
                await HandleExceptionAsync(context, ex);
            }
        }
        private async Task HandleExceptionAsync(HttpContext context, Exception exception)
        {
            var result = new ErrorResponse(exception.ToString());
            UpdateContext(context, HttpStatusCode.InternalServerError);
            var stringResponse = JsonSerializer.Serialize(result, _jsonOptions);
            await context.Response.WriteAsync(stringResponse);
        }
        private static void UpdateContext(HttpContext context, HttpStatusCode code)
        {
            context.Response.ContentType = "application/json";
            context.Response.StatusCode = (int)code;
        }
    }
}
