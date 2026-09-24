//moulo externos
const { default: inquirer } = require("inquirer")
const { default: chalk } = require('chalk')

//modulos internos
const fs = require('fs')
operation()

function operation() {
    inquirer.prompt([
        {
            type: 'select',
            name: 'action',
            message: 'O que você deseja fazer?',
            choices: ['Criar Conta', 'Consultar Saldo', 'Depositar', 'Sacar', 'Sair'],
        },
    ]).then((answer) => {
        const action = answer['action']
        if (action === 'Criar Conta') {
            createAccount()
        } else if (action === 'Depositar') {
            deposito()
        } else if (action === 'Consultar Saldo') {
            getAccountBalance()
        } else if (action === 'Sacar') {
            withdraw()
        } else if (action === 'Sair') {
            console.log(chalk.bgBlue.black('Obrigado por usar Account'))
            process.exit()
        }
    })
        .catch((err) => { console.log(err) })
}

//create account 
function createAccount() {
    console.log(chalk.bgGreen.black('Parabéns por escolher o nosso banco!'))
    console.log(chalk.green('Defina as opções da sua conta a seguir'))
    buildAccount()
}

function buildAccount() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite seu Nome para sua Conta:'
        },
    ]).then((answer) => {
        const accountName = answer['accountName']
        console.info(accountName)

        if (!fs.existsSync('accounts')) {
            fs.mkdirSync('accounts')
        }

        if (fs.existsSync(`accounts/${accountName}.json`)) {
            console.log(chalk.bgRed.black('Esta Conta já existe , escolha outro nome!'))
            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify({ balance: 0 }),
            function (err) {
                console.log(err)
            }
        )
        console.log(chalk.green('Parabéns , Conta criada com sucesso!'))
        operation()

    })
        .catch((err) => { console.log(err) })
}

//add a amount to user account

function deposito() {
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Qual o nome da sua Conta: '
        },
    ]).then((answer) => {
        const accountName = answer['accountName']
        // verify if account exists
        if (!checkAccount(accountName)) {
            return deposito()
        }

        inquirer.prompt([{
            name: 'amount',
            message: 'Qual o valor do deposito: '
        },
        ]).then((answer) => {
            const amount = answer['amount']

            //add an amount
            addAmount(accountName, amount)

        }).catch((err) => {
            console.log(err)
        })


    }).catch((err) => { console.log(err) })
}


function checkAccount(accountName) {
    if (!fs.existsSync(`accounts/${accountName}.json`)) {
        console.log(chalk.bgRed.black('Esta Conta não existe , escolha outro nome!'))
        return false
    }
    return true
}

function addAmount(accountName, amount) {
    const account = getAccount(accountName)

    if (!amount) {
        console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde! '))
        return deposito()
    }

    account.balance = parseFloat(amount) + parseFloat(account.balance)
    fs.writeFileSync(
        `accounts/${accountName}.json`,
        JSON.stringify(account),
        function (err) {
            console.log(err)
        }
    )

    console.log(chalk.green(`Foi depositado o valor de ${amount} na sua conta`))
    operation()
}

function getAccount(accountName) {
    const accountJSON = fs.readFileSync(`accounts/${accountName}.json`, {
        encoding: 'utf8',
        flag: 'r'
    })
    return JSON.parse(accountJSON)
}

//show account balance
function getAccountBalance() {
    inquirer.prompt([{
        name: 'accountName',
        message: 'Qual o nome da sua conta'
    }
    ]).then((answer) => {
        const accountName = answer["accountName"]
        //verify if account exists
        if (!checkAccount(accountName)) {
            return getAccountBalance()
        }

        const accountData = getAccount(accountName)
        console.log(chalk.bgBlue.black(`Olá , o saldo da sua conta é de ${accountData.balance}`))
        operation()

    }).catch((err) => { console.log(err) })
}

//withdraw an amount from user account 

function withdraw(){
   inquirer
     .prompt([
       {
         name: 'accountName',
         message: 'Qual o nome da sua conta?',
       },
     ])
     .then((answer) => {
       const accountName = answer['accountName'];
       // verify if accounts exists
       if (!checkAccount(accountName)) {
         return getAccountBalance();
       }

       inquirer
         .prompt([
           {
             name: 'amount',
             message: 'Quanto você deseja sacar?',
           },
         ])
         .then((answer) => {
           const amount = answer['amount'];
           // remove an amount
           removeAmount(accountName, amount);

         })
         .catch((err) => console.log(err));
     })
     .catch((err) => console.log(err));
}

function removeAmount(accountName, amount) {
  const accountData = getAccount(accountName)

  if(!amount) {
    console.log(chalk.bgRed.black('Ocorreu um erro, tente novamente mais tarde!'))
    return withdraw()
  }

  if(accountData.balance < amount) {
     console.log(chalk.bgRed.black('Valor indisponível!'));
     return withdraw();
  }

  accountData.balance = parseFloat(accountData.balance) - parseFloat(amount)

  fs.writeFileSync(`accounts/${accountName}.json`, JSON.stringify(accountData), function (err) {
    console.log(err);
  });

  console.log(chalk.green(`Foi realizado o saque de R$${amount} na sua conta`));
  operation()
}







