# Projeto de Automação com Cypress

Este projeto contém testes automatizados para uma aplicação web usando o framework Cypress "cypress": "12.17.4".

Instalação:

npm inttall cypess --save-dev

## Estrutura do Projeto

├── cypress
│   ├── downloads
│   ├── e2e
│   │   ├── Integration
│   │   │   └── home.cy.js
│   │   └── Pages
│   │       └── HomePage.js
│   ├── fixtures
│   │   └── images
│   ├── plugins
│   │   └── index.js
│   ├── screenshots
│   ├── support
│   │   ├── e2e.js
│   │   └── commands.js
│   └── videos
├── package.json
└── cypress.config.js

## Pré-requisitos

- Node.js (versão recomendada: 14.x ou superior)
- npm (geralmente vem com Node.js)

## Instalação

1. Clone este repositório:
git clone [URL_DO_SEU_REPOSITÓRIO]

2. Navegue até a pasta do projeto:
cd [NOME_DA_PASTA_DO_PROJETO]

3. Instale as dependências:

npm install
npm install -D cypress-xpath

## Executando os Testes

Para abrir o Cypress Test Runner:
npm run cypress:open

Para executar os testes em modo headless:
npm run cypress:run

## Principais Arquivos

- `cypress/e2e/Integration/home.cy.js`: Contém os testes para a página inicial.
- `cypress/e2e/Pages/HomePage.js`: Contém os métodos da Page Object para a página inicial.
- `cypress/support/commands.js`: Contém comandos personalizados do Cypress.
- `cypress.config.js`: Arquivo de configuração do Cypress.

## Customização

- Adicione novos testes na pasta `cypress/e2e/Integration/`.
- Crie novas Page Objects na pasta `cypress/e2e/Pages/`.
- Adicione comandos personalizados em `cypress/support/commands.js`.

## Recursos Adicionais

- [Documentação oficial do Cypress](https://docs.cypress.io/)
- [Boas práticas do Cypress](https://docs.cypress.io/guides/references/best-practices)

