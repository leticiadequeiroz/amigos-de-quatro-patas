# Amigos de Quatro Patas

Projeto acadêmico desenvolvido na disciplina de Desenvolvimento Front-End para Web.

A aplicação apresenta a ONG fictícia Amigos de Quatro Patas, dedicada ao resgate, acolhimento, proteção e adoção responsável de animais.

## Estrutura do projeto

- `html/`: páginas HTML do projeto.
- `css/`: arquivos de estilização.
- `js/`: módulos JavaScript e funcionalidades da aplicação.
- `imagens/`: recursos visuais utilizados no projeto original.
- `public/imagens/`: imagens utilizadas na geração da build de produção.
- `dist/`: arquivos gerados pela build de produção.
- `package.json`: configurações, dependências e scripts do projeto.
- `vite.config.js`: configuração utilizada para geração da build com Vite.

## Funcionalidades

- Navegação no formato Single Page Application (SPA).
- Conteúdo dinâmico com JavaScript e manipulação do DOM.
- Formulário com validação e máscaras de preenchimento.
- Armazenamento de cadastros com localStorage.
- Modal de confirmação utilizando Bootstrap.
- JavaScript organizado com ES6 Modules.
- Geração de build de produção com Vite.

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap
- Vite
- Node.js e npm
- Git e GitHub

## Execução local

### Pré-requisitos

Para executar o projeto localmente, é necessário ter:

- Um navegador web atualizado.
- Visual Studio Code ou outro editor de código.
- Node.js e npm instalados.

### Instalação

1. Clone ou faça o download do repositório.
2. Abra a pasta do projeto no Visual Studio Code.
3. Abra o terminal na raiz do projeto.
4. Instale as dependências:

   `npm install`

### Ambiente de desenvolvimento

Para executar o projeto em ambiente de desenvolvimento, utilize:

`npm run dev`

O terminal exibirá o endereço do servidor local utilizado para acessar a aplicação no navegador.

### Build de produção

Para gerar a versão de produção, utilize:

`npm run build`

A build processa os arquivos da aplicação e gera a versão de produção na pasta `dist/`.

### Visualização da build

Para visualizar localmente a build de produção, utilize:

`npm exec vite -- preview`

Após iniciar o servidor de visualização, a aplicação pode ser acessada pelo endereço apresentado no terminal, utilizando o caminho `/html/index.html`.

## Build e testes

O projeto utiliza Vite para gerar a build de produção. Durante esse processo, os arquivos da aplicação são processados e preparados para publicação na pasta `dist/`.

Os testes foram realizados manualmente no navegador, verificando:

- carregamento da interface e das imagens;
- navegação entre as seções da SPA;
- funcionamento do formulário;
- validações dos campos;
- máscaras de CPF, telefone e CEP;
- armazenamento dos cadastros com localStorage;
- exibição do modal de confirmação.

## Versionamento

O projeto utiliza Git e GitHub para controle de versões e uma estrutura de branches baseada no GitFlow.

### Estratégia de branches

- `main`: mantém a versão estável do projeto.
- `develop`: recebe e integra as alterações em desenvolvimento.
- `feature/`: utilizada para desenvolver alterações de forma isolada antes da integração.

As alterações são registradas por meio de commits com mensagens semânticas. A integração das funcionalidades é realizada por meio de Pull Requests antes do merge para a branch de desenvolvimento.

## Organização do repositório

O desenvolvimento utiliza branches específicas para separar as alterações realizadas no projeto. Issues são utilizadas para registrar atividades e melhorias, enquanto milestones auxiliam na organização das entregas previstas para uma versão.

Os Pull Requests permitem revisar e integrar as alterações realizadas nas branches de desenvolvimento antes que sejam incorporadas à versão principal do projeto.