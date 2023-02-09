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
  "CPF": "142.815.690-90",
  "birthday": "10/10/1996"
}
```
Caso o CPF informado não seja válido, a rota retorna erro 422

### GET("/user/:CPF")
Essa rota retorna os dados de um usuário cadastrado, enviando seu CPF como parametro. Portanto, fazendo uma requisição para "localhost:4000/user/142.815.690-90", por exemplo, a rota retorna:
```
{
  "id": 1
  "name": "Guilherme",
  "CPF": "14281569090",
  "birthday": "10/10/1996"
}
```

### GET("/user")
Essa rota recebe 2 parametros via query, take e skip (https://www.prisma.io/docs/concepts/components/prisma-client/pagination). take defini o número de usuários listados por página e skip, como o nome sugere, o salto. Caso take e skip não sejam passados via query, a rota retorna todos os usuários cadastrados.

## Uso da API via docker

1) clonar o repositório:
```
git clone https://github.com/Guilherme-NL/IGMA-API.git
```
2) Criar um arquivo .env com as mesmas informações do arquivo .env.example. 
```
PORT= #porta que deseja rodar a aplicação, esse parametro é opcional, por padrão a aplicação vai rodar na porta 4000
DATABASE_URL= postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}
POSTGRES_USER= #INformar usuário Postgres (ex: postgres)
POSTGRES_PASSWORD= #Informar senha Postegres (ex: postgres)
POSTGRES_HOST= postgres_IGMA_db 
POSTGRES_DB= #Informar nome do banco de dados (ex: IGMA_DB)
```
3) No terminal, dentro da pasta clonada, digite:
```
docker compose up
```
Pronto! a API está funcionando na porta 4000 dá sua máquina (http://localhost:4000/).

### Testes
Usamos Jest e SuperTest para realizar os testes. Para testar a aplicação basta:

1) Criar arquivo .env.test no seguinte formato:
```
PORT= #porta que deseja rodar a aplicação, esse parametro é opcional, por padrão a aplicação vai rodar na porta 4000
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}
POSTGRES_USER= #Informar usuário Postgres (ex: postgres)
POSTGRES_PASSWORD= #Informar senha Postegres (ex: postgres)
POSTGRES_HOST=localhost
POSTGRES_DB= #Informar nome do banco de dados (ex: IGMA_DB_test)
```
2) Intalar os pacotes e rodar os testes:
```
npm i
npm run test
```

### Rodar aplicação em ambiente de desenvolvimento:
1) Criar arquivo .env.development no seguinte formato:
```
PORT= #porta que deseja rodar a aplicação, esse parametro é opcional, por padrão a aplicação vai rodar na porta 4000
DATABASE_URL=postgresql://${POSTGRES_USER}:${POSTGRES_PASSWORD}@${POSTGRES_HOST}:5432/${POSTGRES_DATABASE}
POSTGRES_USER= #Informar usuário Postgres (ex: postgres)
POSTGRES_PASSWORD= #Informar senha Postegres (ex: postgres)
POSTGRES_HOST=localhost
POSTGRES_DB= #Informar nome do banco de dados (ex: IGMA_DB_dev)
```
2) Intalar os pacotes e rodar os testes:
```
npm i
npm run dev
```

### Testando API no Postman:

Foi incluido o arquivo IGMA.postman_collection.json, na pasta collection, basta importá-lo no Postman para testar as rotas da API. Para isso é necessário ter a aplicação rodando.
