const inquirer = require('inquirer');
const fs = require('fs');
const Choices = require('inquirer/lib/objects/choices');
const observe = require('inquirer/lib/utils/events');
var empObject = {};
const empArr = []
function createStuff (data){
    const card = document.createElement('div')
    const h1=document.createElement('h1')
    const h2=document.createElement('h2')
    const h3=document.createElement('h3')
    const h4=document.createElement('h4')
    h1.textContent(data.name)
    h2.textContent(data.title)
    h3.textContent(data.id)
    h4.textContent(data.officeNum)
    if(!data.officeNum){
    h4.textContent(data.intSchool)
    }
    else if (!data.intSchool){
        h4.textContent(data.engGithub)
    }
    card.appendChild(h1)
    card.appendChild(h2)
    card.appendChild(h3)
    card.appendChild(h4)
    document.querySelector('body').appendChild(card)
    
}
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
    empObject.officeNum= answers.officeNum
    empArr.push(empObject);
    createStuff(empObject);
    console.log(empArr)
    empObject ={};
    console.log(empObject)
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
        createStuff(empObject);
        console.log(empArr)
        empObject ={};
        console.log(empObject)
        EmpPrompt();
    })}
    
function intPrompt(){
    inquirer.prompt([
        {   
        type: 'prompt',
        message: 'Intern name',
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
        message:'school attended',
        name:'intSchool'
        }
    ]).then((answers) =>{
        empObject.name = answers.intName
        empObject.id= answers.intID
        empObject.email = answers.intEmail
        empObject.intSchool= answers.intSchool
        empArr.push(empObject);
        createStuff(empObject);
        console.log(empArr);
        empObject ={};  
        console.log(empObject);
        EmpPrompt();
        createStuff(empObject);
    })
    };
        EmpPrompt();
        
        
        
        // const createME= document.createElement('div')
        // const p = document.createElement('p')
        // h1.textContent(empArr.name)
        // h2.textContent(empArr.title)
        // h3.textContent(empArr.id)
        // h4.textContent(empArr.email)