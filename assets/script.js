const inquirer = require('inquirer');
const Choices = require('inquirer/lib/objects/choices');
const objStore = {};
function EmpPrompt {inquirer
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
        }
        {
            type:'prompt',
            message:'email:',
            name:'empEmail'
        }
        {
            type:'prompt',
            message:'Github username',
            name:'empGithub'
        }
        {
            type:'confirm',
            message:'Would you like to add more Employees? y or n',
            name:'prompt2'
        }
    ])

}
function mngrPrompt () {inquirer 
.prompt ([
    {
    type: 'prompt',
    message: 'Managers name',
    name: 'Name'
    },
    {
    type: 'prompt',
    message: 'Employee ID',
    name:'empID'
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
     message:'would you like to add anymore employees? y or n'
     .then( function confirmed(){
          return EmpPrompt();
     }
     .then( function cancelled (){
         console.log("thank you for filling out")
     }
    ))}

])}

