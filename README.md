<h1 align="center">
    Buscador.ao
</h1>
<p align="center">
    <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/acidiney/buscador-ao">
  	<img alt="Repository size" src="https://img.shields.io/github/repo-size/acidiney/buscador-ao">
  	<a href="https://github.com/acidiney/buscador-ao/commits/master">
    	<img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/acidiney/buscador-ao">
  	</a>
  	<a href="https://github.com/acidiney/buscador-ao/issues">
    	<img alt="Repository issues" src="https://img.shields.io/github/issues/acidiney/buscador-ao">
  	</a>
  	<img alt="License" src="https://img.shields.io/badge/license-MIT-brightgreen">
</p>

<p align="center">
  <a href="#rocket-techs">Techs</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#avaliable-routes">Avaliable Routes</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-build-setup">How to Build Setup</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-how-to-contribute">How to Contribute</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-license">License</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#-author">Author</a>
</p>



## :rocket: Techs

Este projecto foi desenvolvido usando as seguintes tecnologias:

- [Nestjs](https://nestjs.com)
- [MongoDB](https://mongodb.com)

## 💻 Project

Ponto de obtenção de informações públicas - `https://buscador.ao`

## Avaliable Routes

Rotas existentes no momento:

- [ deprecad ] `nif/:nif` permite retornar informações de um nif. ( No momento a rota exite, porém será eliminada posteriormente ).

  ```json
  {
    "data": {
      "nif": ":nif:",
      "name": "Acidiney Alvaro  Carvalho Soares Dias",
    },
    "source": "Buscador"
  }
  ```

- [ NEW ] GET `search/document`, permite validar os documentos do tipo ['NIF', 'BI']. ( esses parametros type e number devem ser enviados como query, caso queira testar pelo navegar recomendo usar no metodo acima )
eg: 

  - Para BI
  ```js
    axios.get('https://buscador.ao/search/document', {
      type: 'BI',
      number: 'número do BI a ser válidado'
    })
  ```

  Isso deve retornar

  ```js
    {
      "data": {
          "name": "ACIDINEY ALVARO CARVALHO SOARES DIAS",
          "bi": "meu-bi"
      },
      "source": "Buscador"
    }
  ```

  - Para NIF 
  ```js
    axios.get('https://buscador.ao/search/document', {
      type: 'NIF',
      number: 'número do NIF a ser válidado'
    })
  ```

  Isso deve retornar
  ```js
    {
      "data": {
          "name": "ACIDINEY ALVARO CARVALHO SOARES DIAS",
          "nif": "meu-nif"
      },
      "source": "Buscador"
    }
  ```

## How to  Build Setup

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
​```

## Test

​```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## 🤔 How to Contribute

- Faça Fork deste repositório;
- Crie sua branch com a sua funcionalidade: `git checkout -b my-feature`;
- Commit suas mudanças: `git commit -m 'feat: my new feature'`;
- Envie suas mudanças para o Githuh: `git push origin my-feature`.

Depois de feito merge da sua PR, pode apagar a branch!

## :memo: License

Este projecto está sobre licensa MIT. Verifique o arquivo [LICENSE](LICENSE) para mais informações.

## Author

Acidiney Dias
