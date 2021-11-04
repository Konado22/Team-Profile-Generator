const inquirer = require("inquirer");
const fs = require("fs");
const html = require('html')
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
        choices: ["Engineer", "Intern", "Manager", "None"],
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
      } else if (answers.empTitle === "Manager") {
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
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4>${empObject.email}</h4><p>${empObject.officeNum}`;
      // const appendthis= document.body.appendChild(newHTML)
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
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4>${empObject.email}</h4><p>${empObject.engGithub}`;
      // const appendthis= document.body.appendChild(newHTML)
      console.log(empArr);
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
      let newHTML = `<div><h1>${empObject.name}</h1><h2>${empObject.title}</h2><h3>${empObject.idInfo}</h3><h4>${empObject.email}</h4><p>${empObject.intSchool}`;
      // const appendthis= document.body.appendChild(newHTML)
      console.log(empArr);
      empObject = {};
      console.log(empObject);
      EmpPrompt();
    });
}
EmpPrompt();
function createStuff(data) {
  const card = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  const h3 = document.createElement("h3");
  const h4 = document.createElement("h4");
  h1.textContent(data.name);
  h2.textContent(data.title);
  h3.textContent(data.idInfo);
  h4.textContent(data.officeNum);
  if (!data.officeNum) {
    h4.textContent(data.intSchool);
  } else if (!data.intSchool) {
    h4.textContent(data.engGithub);
  }
  card.appendChild(h1);
  card.appendChild(h2);
  card.appendChild(h3);
  card.appendChild(h4);
  document.querySelector("body").appendChild(card);
}

// const createME= document.createElement('div')
// const p = document.createElement('p')
// h1.textContent(empArr.name)
// h2.textContent(empArr.title)
// h3.textContent(empArr.idInfo)
// h4.textContent(empArr.email)
