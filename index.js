const inquirer = require('inquirer');
const fs = require('fs');
const manager = require('./lib/manager');
// const employee = require('./lib/employee');
const engineer = require('./lib/engineer');
const intern = require('./lib/intern');
const generateHTML = require('./lib/generateHTML');

const team = [];

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
            name: "employeeName",
            validate: (value)=> {if (value){return true} else {return "Please enter Name to continue"}}
        },
        {
            type: "input",
            message: "Enter Employee's ID:",
            name: "employeeId",
            validate: (value)=> {if (value){return true} else {return "Please enter ID to continue"}}
        },
        {
            type: "input",
            message: "Enter employee's e-mail address:",
            name: "employeeEmail",
            validate: (value)=> {if (value){return true} else {return "Please enter e-mail to continue"}}
        },
        {
            type: "input",
            message: "Enter employee's GitHub username:",
            name: "employeeGithub",
            when: (input) => input.position === "Engineer",
            validate: (value)=> {if (value){return true} else {return "Please enter username to continue"}}
        },
        {
            type: "input",
            message: "Enter the employee's school: ",
            name: "employeeSchool",
            when: (input) => input.position === "Intern",
            validate: (value)=> {if (value){return true} else {return "Please enter school name to continue"}}
        },
    ]);

    .then((employeeInfo) => {
        const {position, employeeName, employeeId, employeeEmail, employeeGithub, employeeSchool } = employeeInfo;
        let employee;
        if (position === "Engineer") {
            employee = new Engineer (employeeName, employeeId, employeeEmail, employeeGithub);
            console.log(employee);
        } 
        else if (position === "Intern") {
            employee = new Intern (employeeName, employeeId, employeeEmail, employeeSchool);
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
    inquirer.prompt(addEmployee)
    .then(function(input) {
        console.log(input)
        writeToFile("index.html", generateHTML(input));
    });
};

// Function call to initialize app
init();


