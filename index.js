const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const observe = require('inquirer/lib/utils/events');
const empObject = {
    title: undefined,
    name: undefined,
    id:undefined,
    email:undefined
};
const empArr = []
function EmpPrompt() {inquirer
    .prompt([
        {
            type: 'list',
            message: 'Please select employee title',
            choices:['Engineer', 'Intern', 'Manager', 'None'],
            name:'empTitle'
        }])
    .then((answers) =>{
        if (answers!=='None'){
           empObject.title = answers.empTitle 
        }
        if( answers.empTitle==="Engineer"){
             engPrompt();
        }
        else if (answers.empTitle==="Intern"){
             intPrompt();
        }
        else if (answers.empTitle ==="Manager"){
             mngrPrompt();
        }
        else {
            console.log("thank you for completing");
        }

    });
}
    
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
    }

]).then((answers) =>{
    empObject.name = answers.manName
    empObject.id= answers.manID
    empObject.email = answers.email
    empObject.engGithub= answers.engGithub
    empArr.push(empObject)
empArr.splice(0, empArr.length)    
    EmpPrompt();
})
};
function engPrompt (){
    inquirer.prompt([
        {   
        type: 'prompt',
        message: 'Engineer name',
        name: 'engName'
        },
        {
        type: 'prompt',
        message: 'Employee ID',
        name:'engID'
        },
        {
        type: 'prompt',
        message: 'email adress:',
        name: 'email'
        },
        {
            type:'prompt',
            message: 'github?',
            name:'engGithub',
        }
    ]).then((answers) =>{
        empObject.name = answers.engName
        empObject.id= answers.engID
        empObject.email = answers.email
        empObject.engGithub= answers.engGithub
        empArr.push(empObject)
        empObject = {
            title: undefined,
            name: undefined,
            id:undefined,
            email:undefined
        };
        EmpPrompt();
    })}
    
function intPrompt(){
    inquirer.prompt([
        {   
        type: 'prompt',
        message: 'Engineer name',
        name: 'intName'
        },
        {
        type: 'prompt',
        message: 'Employee ID',
        name:'intID'
        },
        {
        type: 'prompt',
        message: 'email adress:',
        name: 'intEmail'
        },
        {
        type: 'prompt',
        message:'school attended?',
        name:'intSchool'
        }]).then((answers) =>{
            empObject.name = answers.intName
            empObject.id= answers.intID
            empObject.email = answers.email
            empObject.intSchool= answers.intSchool
            empArr.push(empObject)
            empObject = {
                title: undefined,
                name: undefined,
                id:undefined,
                email:undefined
            };
            EmpPrompt();
        })
    };
        EmpPrompt();

        const createH = document.createElement('h1')
        const createH2= document.createElement('h2')
        const create 