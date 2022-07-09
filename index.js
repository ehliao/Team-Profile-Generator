const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const generateHTML = require('./lib/generateHTML');

const team = [];

// Questions for Team Manager
const managerQuestion = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Team Manager's Name:",
            name: "name",
            validate: (value)=> {if (value){return true} else {return "Please enter name to continue"}}
        },
        {
            type: "input",
            message: "Enter Team Manager's Employee ID:",
            name: "id",
            validate: (value)=> {if (value){return true} else {return "Please enter ID to continue"}}
        },
        {
            type: "input",
            message: "Enter Team Manager's e-mail address:",
            name: "email",
            validate: (value)=> {if (value){return true} else {return "Please enter e-mail to continue"}}
        },
        {
            type: "input",
            message: "Enter Team Manager's office number:",
            name: "office",
            validate: (value)=> {if (value){return true} else {return "Please enter office number to continue"}}
        },
    ])

    .then((value) => {
        const managerEntry = new manager (value.name, value.id, value.email, value.office);
        console.log(managerEntry);
        team.push(managerEntry);
    })

};

// Questions for Employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "checkbox",
            message: "Please add either an Engineer or Intern to your team:",
            name: "position",
            choices: ["Engineer", "Intern"],
            validate: (value)=> {if (value){return true} else {return "Please select a position to continue"}}
        },
        {
            type: "input",
            message: "Enter Employee's Name:",
            name: "name",
            validate: (value)=> {if (value){return true} else {return "Please enter Name to continue"}}
        },
        {
            type: "input",
            message: "Enter Employee's ID:",
            name: "id",
            validate: (value)=> {if (value){return true} else {return "Please enter ID to continue"}}
        },
        {
            type: "input",
            message: "Enter employee's e-mail address:",
            name: "email",
            validate: (value)=> {if (value){return true} else {return "Please enter e-mail to continue"}}
        },
        {
            type: "input",
            message: "Enter employee's GitHub username:",
            name: "github",
            when: (input) => input.position === "Engineer",
            validate: (value)=> {if (value){return true} else {return "Please enter username to continue"}}
        },
        {
            type: "input",
            message: "Enter the employee's school: ",
            name: "school",
            when: (input) => input.position === "Intern",
            validate: (value)=> {if (value){return true} else {return "Please enter school name to continue"}}
        },
    ])
    // asks if employee is an Engineer or Intern
    .then(employeeInfo => {
        const {position, name, id, email, github, school } = employeeInfo;
        let employee;
        if (position === "Engineer") {
            employee = new engineer (name, id, email, githumb);
            console.log(employee);
        } 
        else if (position === "Intern") {
            employee = new intern (name, id, email, school);
            console.log(employee);
        } 
        team.push(employee);
        return team;
        });
        
};

// TODO: Create a function to write HTML file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (error) => {
        if (error)
        throw error;
        console.log ('Complete! Your information has been added!')
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(addEmployee, managerQuestion)
    .then(function(input) {
        console.log(input)
        writeToFile("index.html", generateHTML(input));
    });
};

// Function call to initialize app
init();


