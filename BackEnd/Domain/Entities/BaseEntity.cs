namespace Domain.Entities;

public abstract class BaseEntity()
{
    public Guid Id { get; } = Guid.CreateVersion7();
    public DateTime CreatedAt { get; protected set; } = DateTime.UtcNow;
    public DateTime? UpdatedAt { get; private set; }

    protected void Update() => UpdatedAt = DateTime.UtcNow;
}