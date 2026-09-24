# 💰 Accounts --- Sistema de Contas Bancárias

Aplicação de terminal desenvolvida em **Node.js** para simular operações
básicas de gerenciamento de contas bancárias.

O sistema permite criar contas, consultar saldo, realizar depósitos e
efetuar saques. Os dados das contas são armazenados localmente em
arquivos **JSON**, utilizando o sistema de arquivos do Node.js.

------------------------------------------------------------------------

## 🚀 Sobre o projeto

O **Accounts** é uma aplicação executada diretamente pelo terminal, com
uma interface interativa para que o usuário possa realizar operações
bancárias de forma simples.

A aplicação utiliza o **Inquirer** para interação com o usuário e o
**Chalk** para melhorar a apresentação das mensagens no terminal. As
informações das contas são persistidas localmente através de arquivos
JSON.

O projeto foi desenvolvido com foco na prática de conceitos fundamentais
do **Node.js**, como manipulação de arquivos, módulos, funções,
operações assíncronas e gerenciamento de dependências.

------------------------------------------------------------------------

## ✨ Funcionalidades

### 🏦 Criar conta

Permite criar uma nova conta informando o nome do titular.

Ao criar uma conta, um arquivo JSON é gerado para armazenar seus dados.

A conta é criada inicialmente com saldo:

``` text
R$ 0,00
```

O sistema também verifica se já existe uma conta com o nome informado.

### 💰 Consultar saldo

Permite consultar o saldo disponível de uma conta cadastrada.

O usuário informa o nome da conta e o sistema recupera os dados
armazenados no arquivo correspondente.

### ➕ Depositar

Permite adicionar um determinado valor ao saldo da conta.

O sistema:

1.  Localiza a conta;
2.  Recupera o saldo atual;
3.  Adiciona o valor informado;
4.  Atualiza o arquivo JSON;
5.  Exibe o novo saldo.

### 💸 Sacar

Permite retirar dinheiro de uma conta.

Antes de realizar a operação, o sistema verifica se existe saldo
suficiente.

Caso o valor solicitado seja maior que o saldo disponível, o saque não é
realizado.

### 🚪 Sair

Permite encerrar a execução da aplicação através do menu principal.

------------------------------------------------------------------------

## 🛠️ Tecnologias utilizadas

### Node.js

Utilizado como ambiente de execução da aplicação.

### JavaScript

Linguagem utilizada para desenvolver toda a lógica do sistema.

### Inquirer

Biblioteca utilizada para criar os menus interativos e receber
informações do usuário através do terminal.

### Chalk

Biblioteca utilizada para estilizar as mensagens exibidas no terminal.

### File System (`fs`)

Módulo nativo do Node.js utilizado para leitura, criação e atualização
dos arquivos das contas.

### JSON

Formato utilizado para persistir os dados das contas localmente.

### NPM

Utilizado para gerenciamento das dependências e execução do projeto.

------------------------------------------------------------------------

## 📂 Estrutura do projeto

``` text
Projeto_Accounts/
│
├── accounts/
│   └── *.json
│
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── LICENSE
└── README.md
```

### 📁 `accounts/`

Diretório utilizado para armazenar os dados das contas cadastradas.

Cada conta possui seu próprio arquivo JSON.

Exemplo:

``` text
accounts/
├── Juan.json
├── Maria.json
└── Pedro.json
```

### 📄 `index.js`

Arquivo principal da aplicação.

É responsável pela execução do sistema, interação com o usuário e
implementação das operações de criação de contas, consulta de saldo,
depósitos e saques.

### 📄 `package.json`

Arquivo responsável pelas configurações do projeto e gerenciamento das
dependências.

Também contém o comando utilizado para iniciar a aplicação:

``` bash
npm start
```

------------------------------------------------------------------------

## ⚙️ Como executar

### 1. Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

-   [Node.js](https://nodejs.org/)
-   NPM

Para verificar se o Node.js está instalado:

``` bash
node --version
```

Para verificar o NPM:

``` bash
npm --version
```

### 2. Clone o repositório

``` bash
git clone https://github.com/JuanRodrigues-Dev/Projeto_Accounts.git
```

### 3. Acesse o diretório do projeto

``` bash
cd Projeto_Accounts
```

### 4. Instale as dependências

``` bash
npm install
```

Esse comando instala as dependências definidas no `package.json`.

### 5. Execute a aplicação

``` bash
npm start
```

Ou, diretamente:

``` bash
node index.js
```

------------------------------------------------------------------------

## 🖥️ Utilização

Após iniciar a aplicação, o sistema apresenta um menu interativo no
terminal.

O usuário pode escolher a operação que deseja realizar:

``` text
O que você deseja fazer?

❯ Criar Conta
  Consultar Saldo
  Depositar
  Sacar
  Sair
```

A opção escolhida determina o fluxo que será executado pela aplicação.

------------------------------------------------------------------------

## 🔄 Fluxo da aplicação

O funcionamento geral do sistema pode ser representado da seguinte
forma:

``` text
                    ┌─────────────────┐
                    │     Usuário     │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Menu interativo │
                    │    Inquirer     │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
              ▼              ▼              ▼
         Criar conta     Consultar       Operações
                           saldo       Depósito/Saque
              │              │              │
              └──────────────┼──────────────┘
                             ▼
                    ┌─────────────────┐
                    │  Node.js / fs   │
                    └────────┬────────┘
                             │
                             ▼
                    ┌─────────────────┐
                    │ Arquivos JSON   │
                    │    accounts/    │
                    └─────────────────┘
```

------------------------------------------------------------------------

## 💾 Persistência dos dados

A aplicação não utiliza um banco de dados externo.

As informações são armazenadas diretamente no sistema de arquivos
utilizando o módulo `fs` do Node.js.

Cada conta possui um arquivo JSON próprio.

Por exemplo:

``` text
accounts/
└── Juan.json
```

Um arquivo de conta pode possuir informações como:

``` json
{
  "balance": 500
}
```

Quando ocorre uma operação de depósito ou saque, o arquivo
correspondente é atualizado.

------------------------------------------------------------------------

## 🔐 Validações

A aplicação possui verificações para evitar operações inválidas,
incluindo:

-   Verificação da existência da conta;
-   Verificação de contas já cadastradas;
-   Validação do saldo disponível antes de realizar um saque;
-   Atualização dos dados após as operações bancárias.

------------------------------------------------------------------------

## 🧠 Conceitos praticados

O projeto permite colocar em prática diversos conceitos importantes do
desenvolvimento backend com Node.js.

### JavaScript

-   Variáveis;
-   Funções;
-   Estruturas condicionais;
-   Manipulação de objetos;
-   Arrays;
-   Módulos;
-   Promises;
-   Programação assíncrona.

### Node.js

-   Execução de JavaScript no ambiente Node;
-   Módulos nativos;
-   Manipulação de arquivos;
-   Leitura e escrita de dados;
-   Sistema de módulos CommonJS.

### NPM

-   Gerenciamento de dependências;
-   `package.json`;
-   `package-lock.json`;
-   Scripts de execução.

### Persistência

-   Criação de arquivos;
-   Leitura de arquivos;
-   Atualização de arquivos;
-   Manipulação de JSON.

------------------------------------------------------------------------

## 📌 Principais operações

  Operação             Descrição
  -------------------- ----------------------------
  🏦 Criar conta       Cria uma nova conta
  💰 Consultar saldo   Exibe o saldo da conta
  ➕ Depositar         Adiciona dinheiro ao saldo
  💸 Sacar             Retira dinheiro do saldo
  🚪 Sair              Encerra a aplicação

------------------------------------------------------------------------

## 🎯 Objetivo do projeto

O objetivo do projeto é desenvolver uma aplicação de gerenciamento de
contas utilizando **Node.js**, praticando conceitos fundamentais de
desenvolvimento de software e introduzindo uma estrutura de persistência
de dados baseada em arquivos.

O projeto também serve como base para evoluções futuras, como a
substituição dos arquivos JSON por um banco de dados e a transformação
da aplicação em uma API.

------------------------------------------------------------------------

## 🔮 Possíveis melhorias futuras

-   [ ] Utilizar banco de dados;
-   [ ] Criar uma API REST;
-   [ ] Implementar autenticação de usuários;
-   [ ] Adicionar número de conta;
-   [ ] Criar histórico de transações;
-   [ ] Adicionar transferência entre contas;
-   [ ] Implementar diferentes tipos de conta;
-   [ ] Criar testes automatizados;
-   [ ] Separar a aplicação em camadas;
-   [ ] Criar uma interface web;
-   [ ] Implementar tratamento de erros mais completo.

------------------------------------------------------------------------

## 📸 Demonstração

### Menu principal

Adicione aqui uma captura de tela da aplicação sendo executada no
terminal.

### Criação de conta

Adicione aqui uma captura de tela mostrando o processo de criação de uma
conta.

### Operações bancárias

Adicione aqui uma captura de tela mostrando uma operação de depósito ou
saque.

------------------------------------------------------------------------

## 👨‍💻 Autor

### Juan Rodrigues

Estudante de **Análise e Desenvolvimento de Sistemas**, com foco em
**Desenvolvimento de Software** e interesse em desenvolvimento backend e
tecnologias relacionadas a dados.

### 🔗 Links

-   **GitHub:** https://github.com/JuanRodrigues-Dev
-   **Repositório:**
    https://github.com/JuanRodrigues-Dev/Projeto_Accounts

------------------------------------------------------------------------

## 📄 Licença

Este projeto está sob a licença **ISC**.

Consulte o arquivo `LICENSE` para mais informações.
