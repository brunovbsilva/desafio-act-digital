# desafio-act-digital

### Introdução

O desafio consiste em criar uma aplicação fullstack utilizando Angular no front-end e .NET no back-end.

### Tarefas 
- Criar uma API RESTful em .NET para gerenciar produtos (CRUD).
- Desenvolver uma interface em Angular para interagir com a API.

### Requisitos para o Desafio
- **Back-end**:
  - .NET 6 ou superior.
  - Entity Framework.
  - Boas práticas de código (SOLID, Clean Code).

- **Front-end**:
  - Angular 12 ou superior.
  - RxJS.
  - Formulários reativos.
  - Consumo de API RESTful.

### Tecnologias Utilizadas
- **Back-end**: .NET 9, Entity Framework, In-Memory Database.
- **Front-end**: Angular 20, PrimeNg, RxJS, Angular Forms.

### Instruções para Execução via Docker

1. Clone o repositório.
2. Navegue até a pasta raiz do repositório.
3. Execute o comando `docker-compose up --build` para iniciar os containers do front-end e back-end.
4. Acesse a aplicação front-end em `http://localhost:4200`.

### Instruções para Execução Local

#### Back-end
1. Clone o repositório.
2. Navegue até a pasta `BackEnd`.
3. Abra o terminal e execute `dotnet restore` para restaurar as dependências.
4. Execute `dotnet run` para iniciar a API.
5. A API estará disponível em `http://localhost:5000`.

#### Front-end
1. Clone o repositório.
2. Navegue até a pasta `front-end`.
3. Abra o terminal e execute `ng serve`.
4. A aplicação estará disponível em `http://localhost:4200`.

### Autor
- Bruno Vinicius Barros da Silva
