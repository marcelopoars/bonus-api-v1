# CASHBACK API - [In memory data]

Projeto desenvolvido na disciplina de `Desenvolvimento de Serviços e APIs` do curso de Análise e Desenvolvimento de Sistemas - Faculdade UniSenac - SENAC-RS.

<br>

## Sobre a API

Esta API tem como funcionalidades principais o `cadastro de clientes (Customers)` e o `registro de vendas (Orders)`. A cada veda é gerado um valor de `CASHBACK` para o cliente, que na sua próxima compra, receberá este valor como `desconto`. No momento o percentual de CASHBACK por venda está fixado em `15%`.

Os dados são gerando in-memory e salvos em array. Ao encerrar o programa todos os dados são apagados. Veja o projeto onde os dados são persistidos em banco de dados. [Link para o repositório Github](https://github.com/marcelopoars/cashback-api-postgres)

<br>

## Install

Para instalar as dependência do projeto execute no terminal o comando `npm install`.

<br>

## Run project

Para executar o projeto em modo de desenvolvimento, execute no terminal o comando `npm run dev`.

Para executar o projeto em modo de produção, execute o comando `npm start`

<br>

## Testes unitários

Para executar os testes unitários execute o comando `npm test`

<br>

## Testando a API com Thunder Client

Você pode testar a API utilizando a extensão para VS Code `Thunder Client`. Você pode baixar neste [link](https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client).

Depois de instalar a extensão no seu editor VS Code digite `Ctrl+Shift+R` para abrir o Thunder Client no seu editor.

Na aba `Collections` busque a opção `import` para importar a coleção de rotas da a api. Agora você já pode executar seus testes.

<br>

## API DOCs

Nesta documentação você pode testar os endpoints da api. [Link para Swagger](http://localhost:3000/api-docs/)
