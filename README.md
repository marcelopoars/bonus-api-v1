# Projeto CASHBACK API

Projeto desenvolvido na disciplina de `Desenvolvimento de Serviços e APIs` do curso de Análise e Desenvolvimento de Sistemas - Faculdade UniSenac - SENAC-RS.

## Sobre o sistema

Esta API tem como funcionalidades principais o cadastro de clientes (Customers) e o registro de vendas (Orders). A cada veda é gerado um valor de CASHBACK para o cliente, que na sua próxima compra, receberá este valor como desconto. No momento o percentual de CASHBACK por venda está fixado em 15%.

## Install

`npm install`

## Run project

`npm run dev`

## API

### Customers

#### Create customer / POST

`/customers`

#### Get customers / GET

`/customers`

#### Get by ID / GET

`/customers/id`

#### Edit customer by ID / POST

`/customers/id`

### Delete customer by ID

`/customers/id`

### Orders

#### Create order / POST

`/orders`

#### Get orders / GET

`/orders`

#### Get by ID / GET

`/orders/id`

#### Edit order by ID / POST

`/orders/id`

#### Delete order by ID

`/orders/id`
