using Domain.Entities;
using Domain.Interfaces.Repositories;
using Infra.Data.Context;

namespace Infra.Data.Repositories;

internal class ProductsRepository(IUnitOfWork unitOfWork) : BaseRepository<Product>(unitOfWork), IProductsRepository;