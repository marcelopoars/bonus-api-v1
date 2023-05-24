# Projeto Bonus API

Projeto desenvolvido na disciplina de `Desenvolvimento de Serviços e APIs` do curso de Análise e Desenvolvimento de Sistemas - Faculdade UniSenac - SENAC-RS.

## Sobre o sistema

Este programa permite o usuário cadastrar clientes e registrar vendas. Cada venda registrada, gera pontos para o cliente. Estes pontos são convertidos em dinheiro, e posteriormente o cliente poderá resgatar em produtos.

## API

### Customers

#### Create customer / POST

http://localhost:3000/customers

#### Get customers / GET

http://localhost:3000/customers

#### Get by ID / GET

http://localhost:3000/customers/id

#### Edit customer by ID / POST
http://localhost:3000/customers/id

### Delete customer by ID
http://localhost:3000/customers/id


### Orders

#### Create order / POST

http://localhost:3000/orders

#### Get orders / GET

http://localhost:3000/orders

#### Get by ID / GET

http://localhost:3000/orders/id

#### Edit order by ID / POST
http://localhost:3000/orders/id

### Delete order by ID
http://localhost:3000/orders/id