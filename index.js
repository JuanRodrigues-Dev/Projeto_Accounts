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
}






