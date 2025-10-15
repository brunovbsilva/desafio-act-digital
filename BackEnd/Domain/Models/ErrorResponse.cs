namespace Domain.Models;

public class ErrorResponse(params IEnumerable<string> errors)
{
    public IEnumerable<string> Errors { get; private set; } = errors;
}