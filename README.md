<div align="center" style={{ marginTop: 16 }}>
  <img src="./web/public/luizalabs-logo.png" height="80px" />
  <h2 style={{ margin: 0 }} align="center">
    Desafio Técnico - Consulta de CEP
  </h2>
  <p align="center" style={{ margin: 0 }}>
    Teste técnico para a vaga de desenvolvedor pleno na Luiza Labs
  </p>
</div>

## 📖 Sobre o projeto

### 📜 O que é?

O projeto consiste em um serviço de consulta de CEP, onde o usuário informa o CEP e obtem informações como logradouro, bairro, cidade e estado.

### ⚒️ Linguagem escolhida

A linguagem escolhida para o desenvolvimento do projeto foi o **JavaScript**, mais especificamente o **Node.js**. A escolha se deu por ser uma linguagem que tenho mais familiaridade e por ser uma linguagem que permite a tipagem de dados, o que facilita a manutenção do código. Além disso, o Node.js é uma plataforma que permite a criação de aplicações web com JavaScript, o que permite a criação de aplicações web com uma única linguagem, além de ser uma plataforma que permite a criação de aplicações escaláveis.

### 🎨 Arquitetura

A arquitetura do projeto é baseada nos conceitos de **DDD** (Domain Driven Design), **SOLID** e **Clean Architecture**. A escolha se deu por ser uma arquitetura que permite a criação de aplicações escaláveis, de fácil manutenção e que permite a criação de testes automatizados. Além disso, a arquitetura permite a criação de aplicações com baixo acoplamento e alta coesão.

## ⚡ Tecnologias

- [Node.js](https://nodejs.org/en/) - Interpretador de JavaScript para o backend
- [Express](https://expressjs.com/pt-br/) - Framework para criação de aplicações web com Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que permite a tipagem de dados
- [Vitest](https://vitejs.dev/guide/) - Ferramenta de teste para aplicações JavaScript
- [Zod](https://zod.dev/) - Biblioteca para validação de dados
- [Docker](https://www.docker.com/) - Plataforma para criação de ambientes isolados
- [Prisma](https://www.prisma.io/) - ORM para Node.js e TypeScript
- [JWT](https://jwt.io/) - Geração e validação de tokens de autenticação
- [Postman](https://www.postman.com/) - Ferramenta para testar APIs

## 🛣️ Rotas

| Método  | Rota          | Descrição               | Autenticação |
| ------- | ------------- | ----------------------- | ------------ |
| POST 📤 | /authenticate | Autenticação do usuário | 🔓 Público   |
| GET 📥  | /check        | Health check            | 🔓 Público   |
| GET 📥  | /cep/:cep     | Consulta de CEP         | 🔒 Privado   |

## 🚀 Como executar o projeto

### 📦 Pré-requisitos

Para executar o projeto é necessário ter instalado o [Node.js](https://nodejs.org/en/) e o [Docker](https://www.docker.com/).

### 📂 Clonando o repositório

```bash
# Clone o repositório
$ git clone

# Acesse a pasta do projeto
$ cd luizalabs-cep/service
```

### 🐳 Iniciando o banco de dados

```bash
# Inicie o banco de dados
$ docker-compose up -d
```

### 📦 Instalando as dependências

```bash
# Instale as dependências
$ npm install
```

### 📚 Preparando o banco de dados

```bash
# Execute as migrations
$ npm run prisma:migrate

# Esse comando irá criar as tabelas e popular o banco de dados com os dados do arquivo ./service/prisma/seed.ts
```

### 🚀 Iniciando o servidor

```bash
# Inicie o servidor
$ npm run dev
```

Pronto, o servidor está rodando em http://localhost:3333 ou na porta que você definiu no arquivo .env.

## 🧪 Testes

### ⚗️ Testes unitários

Para executar os testes unitários, execute o seguinte comando:

```bash
# Execute os testes unitários
$ npm run test
```

caso queira executar os testes com o coverage, execute o seguinte comando:

```bash
# Execute os testes unitários com o coverage
$ npm run test:coverage
```

#### 🖊️ Autor - [@raniellimontagna](https://www.github.com/raniellimontagna)
