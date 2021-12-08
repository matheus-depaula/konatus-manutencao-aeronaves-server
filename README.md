# Konatus - Manutenção de Aeronaves (server)

## Requisitos

- [NodeJs](https://nodejs.org/pt-br/)
- [Postgres](https://www.postgresql.org/)
- [Yarn (opcional)](https://yarnpkg.com/)

## Instalação

### Dependências

Instale as dependências executando o comando a seguir no diretório raíz da aplicação.

```
yarn
```

ou

```
npm i
```

### Banco de dados

Crie um banco de dados vazio utilizando Postgres.

### Variáveis de ambiente

Configure as variáveis de ambiente em um arquivo `.env` no diretório raíz da aplicação. [Exemplo](https://github.com/matheus-depaula/konatus-manutencao-aeronaves-server/blob/master/.env.example).

### Entidades

Execute o comando seguir no diretório raíz da aplicação.

```
yarn typeorm migrations:run
```

ou

```
npm run typeorm migrations:run
```

## Execução

### Dev

Execute o comando a seguir no diretório raíz da aplicação.

```
yarn dev
```

ou

```
npm run dev
```

### Build

Execute o comando a seguir no diretório raíz da aplicação.

```
yarn build
```

ou

```
npm run build
```

## Referência

### Postman

[Workspace](https://www.postman.com/matheus-depaula/workspace/konatus/overview) utilizado durante desenvolvimento da api.
