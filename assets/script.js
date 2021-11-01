const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const objStore = [];
function EmpPrompt() {inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select employee title',
            choices:['Engineer', 'Intern'],
            name:'empTitle'
        },
        {
            type: 'prompt',
            message:'employee id',
            name:'empID'
        },
        {
            type:'prompt',
            message:'email:',
            name:'empEmail'
        },
        {
            type:'prompt',
            message:'Github username',
            name:'empGithub'
        },
        {
            type:'confirm',
            message:'Would you like to add more Employees? y or n',
            then( res ) {
                return EmpPrompt
            }
        }
    ])}
function mngrPrompt () {inquirer 
.prompt ([
    {
    type: 'prompt',
    message: 'Managers name',
    name: 'manName'
    },
    {
    type: 'prompt',
    message: 'Employee ID',
    name:'manID'
    },
    {
    type: 'prompt',
    message: 'email adress:',
    name: 'email'
    },
    {
    type: 'prompt',
    message: 'Office Number',
    name: 'officeNum'
    },
    {
     type:'confirm',
     name: 'mngRespond',
     message:'would you like to add anymore employees? y or n',
     if (response='y'){
         return EmpPrompt();
     }
    }

])}
mngrPrompt();
