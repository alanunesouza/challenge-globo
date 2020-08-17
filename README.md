<h1 align="center">
  Desafio - Votação Big Brother Brasil - Globo
</h1> 

![](bbb.gif)

<p align="center">
  <a href="#rocket-sobre-o-desafio">Sobre o desafio</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#hammer-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-observações">Observações</a>
</p>

## :rocket: Sobre o desafio

Durante esse desafio, foi necessário criar a aplicação de ponta a ponta (api e web), utilizando diversas ferramentas utilizadas atualmente no mercado de trabalho.

### Ferramentas utilizadas

`API`:

- NodeJS;
- Express;
- TypeORM;
- TypeScript;
- ESLint + Prettier + EditorConfig;
- PostgreSQL;

`WEB`:

- React;
- TypeScript;
- Hooks;
- Styled Components;
- ESLint + Prettier + EditorConfig;

## :hammer: Instalação

clone o projeto rodando o comando:

```
git clone git@github.com:SelecaoGlobocom/AlanNunes.git
```

prossiga com as instrucoes abaixo:

### 1. API

Instale o [docker](https://docs.docker.com/install/), em seguida vamos criar o docker necessário com o seguinte comando:

```
sudo sh configure.sh
```

Instale o [dbeaver](https://dbeaver.io/) (interface de acesso ao banco postgres). Após instalado, execute e configure a conexão ao banco (HOST localhost, PORT 5432, USERNAME postgres, PASSWORD docker) e clique em "connect". Assim que conectar, crie um banco de dados chamado "bbb"

Se seguiu os passos anteriores corretamente, agora estamos com tudo pronto para rodar a API. Rode os comando abaixo em seu terminal:

```
cd back && npm install && npm run migration:run && npm run dev:server
```
Prontinho, sua API já está rodando.

Obs.: requests estão todos no arquivo 'BBB.postman_collection.json', basta importá-lo no Postman.

### 2. WEB

Abra um novo terminal e execute os comandos abaixo:

```
cd front && npm install && npm run start
```

## :memo: Observações

Para a visualização de um paredão com seus respectivos participantes, é necessário seguir os passos:

- Criação de Participantes;
- Criação de Paredão;
- Inclusão de Participantes ao Paredão;
- Start do Paredão;
