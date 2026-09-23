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
            choices: ['Criar Conta', 'Consultar Salso', 'Depositar', 'Sacar', 'Sair'],
        },
    ]).then((answer) => {
        const action = answer['action']
        if (action === 'Criar Conta') {
            createAccount()
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

function buildAccount(){
    inquirer.prompt([
        {
            name: 'accountName',
            message: 'Digite seu Nome para sua Conta:'
        },
    ]).then((answer)=>{
        const accountName = answer['accountName']
        console.info(accountName)

        if(!fs.existsSync('accounts')){
            fs.mkdirSync('accounts')
        }

        if(fs.existsSync(`accounts/${accountName}.json`)){
            console.log(chalk.bgRed.black('Esta Conta já existe , escolha outro nome!'))
            buildAccount()
            return
        }
        fs.writeFileSync(`accounts/${accountName}.json`, '"balance":0',
            function(err){
                console.log(err)
            }
        )
        console.log(chalk.green('Parabéns , Conta criada com sucesso!'))
        operation()

    })
    .catch((err)=>{console.log(err)})
}






