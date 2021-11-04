const inquirer = require("inquirer");
const fs = require("fs");
const Choices = require("inquirer/lib/objects/choices");
const observe = require("inquirer/lib/utils/events");
var empObject = {};
const empArr = [];
function EmpPrompt() {
  inquirer
    .prompt([
      {
        type: "list",
        message: "Please select employee title",
        choices: ["Manager(Do First)","Engineer", "Intern",  "None"],
        name: "empTitle",
      },
    ])
    .then((answers) => {
      if (answers !== "None") {
        empObject.title = answers.empTitle;
      }
      if (answers.empTitle === "Engineer") {
        engPrompt();
      } else if (answers.empTitle === "Intern") {
        intPrompt();
      } else if (answers.empTitle === "Manager(Do First)") {
        mngrPrompt();
      } else {

        console.log("thank you for completing");
      }
    });
}

function mngrPrompt() {
  inquirer
    .prompt([
      {
        type: "prompt",
        message: "Managers name",
        name: "name",
      },
      {
        type: "prompt",
        message: "Employee ID",
        name: "idInfo",
      },
      {
        type: "prompt",
        message: "email adress:",
        name: "email",
      },
      {
        type: "prompt",
        message: "Office Number",
        name: "officeNum",
      },
    ])
    .then((answers) => {
      empObject.name = answers.name;
      empObject.idInfo = answers.idInfo;
      empObject.email = answers.email;
      empObject.officeNum = answers.officeNum;
        empArr.push(empObject);
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4><a href="gmail.com>" ${empObject.email}></a></h4><p>${empObject.officeNum}</p></div>`;
      // const appendthis= document.body.appendChild(newHTML)
      fs.writeFile("index.html", newHTML, err =>{
        if (err){
          return
        }
      })
      console.log(empArr);
      empObject = {};
      console.log(empObject);
      EmpPrompt();
    });
}
function engPrompt() {
  inquirer
    .prompt([
      {
        type: "prompt",
        message: "Engineer name",
        name: "name",
      },
      {
        type: "prompt",
        message: "Employee idInfo",
        name: "idInfo",
      },
      {
        type: "prompt",
        message: "email adress:",
        name: "email",
      },
      {
        type: "prompt",
        message: "github?",
        name: "engGithub",
      },
    ])
    .then((answers) => {
      empObject.name = answers.name;
      empObject.idInfo = answers.idInfo;
      empObject.email = answers.email;
      empObject.engGithub = answers.engGithub;
      empArr.push(empObject);
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4><a href="gmail.com>" ${empObject.email}></a></h4><p>${empObject.engGithub}</p></div>`;
      // const appendthis= document.body.appendChild(newHTML)
      fs.appendFile("index.html", newHTML, err =>{
        if (err){
          return
        }
      })
      empObject = {};
      console.log(empObject);
      EmpPrompt();
    });
}

function intPrompt() {
  inquirer
    .prompt([
      {
        type: "prompt",
        message: "Intern name",
        name: "name",
      },
      {
        type: "prompt",
        message: "Employee idInfo",
        name: "idInfo",
      },
      {
        type: "prompt",
        message: "email adress:",
        name: "intEmail",
      },
      {
        type: "prompt",
        message: "school attended",
        name: "intSchool",
      },
    ])
    .then((answers) => {
      empObject.name = answers.name;
      empObject.idInfo = answers.idInfo;
      empObject.email = answers.intEmail;
      empObject.intSchool = answers.intSchool
      empArr.push(empObject);
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4><a href="gmail.com>" ${empObject.email}></a></h4><p>${empObject.intSchool}</p></div>`;
      // const appendthis= document.body.appendChild(newHTML)
      console.log(empArr);
      fs.appendFile("index.html", newHTML, err =>{
        if (err){
          return
        }
      })
      empObject = {};
      console.log(empObject);
      EmpPrompt();
    });
}
EmpPrompt();

