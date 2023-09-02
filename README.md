<div align="center" style={{ marginTop: 16 }}>
  <img src="./web/public/luizalabs-logo.png" height="80px" />
  <h2 style={{ margin: 0 }} align="center">
    Desafio Técnico - Consulta de CEP
  </h2>
  <p align="center" style={{ margin: 0 }}>
    Teste técnico para a vaga de desenvolvedor pleno na Luiza Labs
  </p>
</div>

## 🔗 Sumário

- [01 - Expor serviço de consulta de CEP](#01---expor-serviço-de-consulta-de-cep)
  - [📖 Sobre o projeto](#-sobre-o-projeto)
    - [📜 O que é?](#-o-que-é)
    - [⚒️ Linguagem escolhida](#️-linguagem-escolhida)
    - [🎨 Arquitetura](#-arquitetura)
  - [☁️ Deploy](#️-deploy)
  - [📚 Documentação](#-documentação)
  - [⚡ Tecnologias usadas na API](#-tecnologias-usadas-na-api)
  - [🛣️ Rotas](#️-rotas)
  - [🚀 Como executar o projeto](#-como-executar-o-projeto)
    - [📦 Pré-requisitos](#-pré-requisitos)
    - [📂 Clonando o repositório](#-clonando-o-repositório)
    - [🐳 Iniciando o banco de dados](#-iniciando-o-banco-de-dados)
    - [📦 Instalando as dependências](#-instalando-as-dependências)
    - [📚 Preparando o banco de dados](#-preparando-o-banco-de-dados)
    - [🚀 Iniciando o servidor](#-iniciando-o-servidor)
  - [🧪 Testes](#-testes)
    - [⚗️ Testes unitários](#️-testes-unitários)
    - [🧪 Testes e2e](#-testes-e2e)
- [02 - Questão teórica](#02---questão-teórica)
- [🖊️ Autor](#️-autor)

#### <a id="01---expor-serviço-de-consulta-de-cep"></a> 01 - Expor serviço de consulta de CEP

## <a id="-sobre-o-projeto"></a> 📖 Sobre o projeto

### <a id="-o-que-é"></a> 📜 O que é?

O projeto consiste em um serviço de consulta de CEP, onde o usuário informa o CEP e obtem informações como rua, cidade e estado.

### <a id="️-linguagem-escolhida"></a> ⚒️ Linguagem escolhida

A linguagem escolhida para o desenvolvimento do projeto foi o **JavaScript**, mais especificamente o **Node.js**. A escolha se deu por ser uma linguagem que tenho mais familiaridade e por ser uma linguagem que permite a tipagem de dados, o que facilita a manutenção do código. Além disso, o Node.js é uma plataforma que permite a criação de aplicações web com JavaScript, o que permite a criação de aplicações web com uma única linguagem, além de ser uma plataforma que permite a criação de aplicações escaláveis.

### <a id="-arquitetura"></a> 🎨 Arquitetura

A arquitetura do projeto é baseada nos conceitos de **DDD** (Domain Driven Design), **SOLID** e **Clean Architecture**. A escolha se deu por ser uma arquitetura que permite a criação de aplicações escaláveis, de fácil manutenção e que permite a criação de testes automatizados. Além disso, a arquitetura permite a criação de aplicações com baixo acoplamento e alta coesão.

## <a id="️-deploy"></a> ☁️ Deploy

O projeto foi hospedado na plataforma [Render](https://render.com/), que permite o deploy de aplicações de forma simples e rápida. Para acessar o projeto, acesse os links:

- [x] [API](https://desafio-tecnico-luizalabs-api.onrender.com) - API para consulta de CEP
- [x] [Web](https://desafio-tecnico-luizalabs-web.onrender.com) - Aplicação web que consome a APIs

```
⚠️ A API está hospedada em um plano gratuito, portanto, pode demorar a responder na primeira requisição.
```

## <a id="-documentação"></a> 📚 Documentação

A documentação da API foi feita utilizando o [Swagger](https://swagger.io/), que é uma ferramenta que permite a criação de documentações para APIs de forma simples e rápida. Para acessar a documentação, acesse o link:

- [x] [Documentação](https://desafio-tecnico-luizalabs-api.onrender.com/docs)

## <a id="-tecnologias-usadas-na-api"></a> ⚡ Tecnologias usadas na API

- [Node.js](https://nodejs.org/en/) - Interpretador de JavaScript para o backend
- [Express](https://expressjs.com/pt-br/) - Framework para criação de aplicações web com Node.js
- [TypeScript](https://www.typescriptlang.org/) - Superset de JavaScript que permite a tipagem de dados
- [Vitest](https://vitejs.dev/guide/) - Ferramenta de teste para aplicações JavaScript
- [Zod](https://zod.dev/) - Biblioteca para validação de dados
- [Docker](https://www.docker.com/) - Plataforma para criação de ambientes isolados
- [Prisma](https://www.prisma.io/) - ORM para Node.js e TypeScript
- [JWT](https://jwt.io/) - Geração e validação de tokens de autenticação
- [Postman](https://www.postman.com/) - Ferramenta para testar APIs

## <a id="-rotas"></a> 🛣️ Rotas

| Método  | Rota          | Descrição               | Autenticação |
| ------- | ------------- | ----------------------- | ------------ |
| POST 📤 | /authenticate | Autenticação do usuário | 🔓 Público   |
| GET 📥  | /check        | Health check            | 🔓 Público   |
| GET 📥  | /cep/:cep     | Consulta de CEP         | 🔒 Privado   |

## <a id="-como-executar-o-projeto"></a> 🚀 Como executar o projeto

### <a id="-pré-requisitos"></a> 📦 Pré-requisitos

Para executar o projeto é necessário ter instalado o [Node.js](https://nodejs.org/en/) e o [Docker](https://www.docker.com/).

### <a id="-clonando-o-repositório"></a> 📂 Clonando o repositório

```bash
# Clone o repositório
$ git clone

# Acesse a pasta do projeto
$ cd desafio-luizalabs/service
```

### <a id="-iniciando-o-banco-de-dados"></a> 🐳 Iniciando o banco de dados

```bash
# Inicie o banco de dados
$ docker-compose up -d
```

### <a id="-instalando-as-dependências"></a> 📦 Instalando as dependências

```bash
# Instale as dependências
$ npm install
```

### <a id="-preparando-o-banco-de-dados"></a> 📚 Preparando o banco de dados

```bash
# Execute as migrations
$ npm run prisma:migrate

# Esse comando irá criar as tabelas e popular o banco de dados com os dados do arquivo ./service/prisma/seed.ts
```

### <a id="-iniciando-o-servidor"></a> 🚀 Iniciando o servidor

```bash
# Inicie o servidor
$ npm run dev
```

Pronto, o servidor está rodando em http://localhost:3333 ou na porta que você definiu no arquivo .env.

## <a id="-testes"></a> 🧪 Testes

### <a id="️-testes-unitários"></a> ⚗️ Testes unitários

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

### <a id="-testes-e2e"></a> 🧪 Testes e2e

Para executar os testes e2e, execute o seguinte comando:

```bash
# Execute os testes e2e
$ npm run test:e2e
```

#### <a id="02---questão-teórica"></a> 02 - Questão teórica

> Quando você digita a URL de um site (http://www.netshoes.com.br) no browser e
> pressiona enter, explique da forma que preferir, o que ocorre nesse processo do
> protocolo HTTP entre o Client e o Server?

Ao acessar o site, o navegador faz uma requisição para o servidor utilizando o protocolo HTTP, mais precisamente o método GET. O servidor recebe a requisição e retorna o status 307 Internal Redirect, que indica que o recurso solicitado está temporariamente em um local diferente, e nos headers da resposta, no header Location, retorna a nova URL do recurso.

```http
HTTP/1.1 307 Internal Redirect
Location: https://www.netshoes.com.br
```

Essa URL utiliza o protocolo HTTPS, que é uma versão mais segura do HTTP. O navegador então faz uma nova requisição para o servidor utilizando a nova URL e o servidor retorna o status 200 OK, que indica que a requisição foi bem sucedida, e retorna o html da página.

```http
HTTP/1.1 200 OK
Content-Type: text/html; charset=utf-8
```

O navegador então interpreta o html e faz novas requisições para o servidor para obter os arquivos necessários para renderizar a página, como imagens, arquivos css e arquivos javascript.

E por fim, o navegador renderiza a página e exibe para o usuário.

#### <a id="️-autor"></a> 🖊️ Autor - [@raniellimontagna](https://www.github.com/raniellimontagna)
