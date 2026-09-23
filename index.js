//moulo externos
const { default: inquirer } = require("inquirer")
const chalk = require('chalk')

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
    ]).then().catch((err) => { console.log(err) })
}






