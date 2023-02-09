# IGMA-API

## Proposta:

Escrever uma API de cadastro de clientes (Nome, CPF, nascimento)

## Tecnologias utilizadas:
- Node.js
- Express
- TypeScript
- Prisma (ORM)
- PostgreSQL (data base)
- Jest e Supertest (testes)
- Docker

## Rotas
### POST("/register")
Nessa rota é possível adicionar um novo usuário (cliente) informando no corpo da requisição um objeto no formato:
```
{
  "name": "Guilherme",
  "CPF": "78510920002",
  "birthday": "10/10/1996"
}
```
Caso o CPF informado não seja válido, a rota retorna erro 422

### GET("/user/:CPF")
Essa rota retorna os dados de um usuário cadastrado, enviando seu CPF como parametro. Portanto, fazendo uma requisição para "localhost:4000/user/785.109.200-02", por exemplo, a rota retorna:
```
{
  "id": 1
  "name": "Guilherme",
  "CPF": "78510920002",
  "birthday": "10/10/1996"
}
```

### GET("/user")
Essa rota recebe 2 parametros via query, take e skip (https://www.prisma.io/docs/concepts/components/prisma-client/pagination). take defini o número de usuários listados por página e skip, como o nome sugere, o salto.

## Uso da API

1) clonar o repositório:
```
git clone https://github.com/Guilherme-NL/IGMA-API.git
```
2) Criar um arquivo .env com as mesmas informações do arquivo .env.example. 
```
PORT=
DATABASE_URL=
POSTGRES_USER=
POSTGRES_PASSWORD=
POSTGRES_DB=
```
### Iniciar API via docker

No terminal, dentro da pasta clonada, digite:
```
docker compose up
```
Pronto! a API está funcionando na porta 4000 dá sua máquina (http://localhost:4000/).

### Testes
Usamos Jest e SuperTest para realizar os testes, em ambiente de desenvolvimento. Para testar a aplicação basta:

1) Criar arquivo .env.test no seguinte formato:
```
PORT=
DATABASE_URL=
```
2) Intalar os pacotes e rodar os testes:
```
npm i
npm run test
```
