const inquirer = require('inquirer');
const fs = require('fs');
const Manager = require('./lib/manager');
const Engineer = require('./lib/engineer');
const Intern = require('./lib/intern');
const generateHTML = require('./src/generateHTML');

const team = [];

// Questions for Team Manager
const managerQuestion = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Team Manager's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Team Manager's Employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Team Manager's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Team Manager's office number:",
            name: "office",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter office number to continue");
                    return false;
                }
            }        
        },
    ])

    .then((value) => {
        const manager = new Manager (value.name, value.id, value.email, value.office);
        console.log(manager);
        team.push(manager);
        addEmployee();
    });

};

// Questions for Employees
const addEmployee = () => {
    return inquirer.prompt([
        {
            type: "list",
            message: "Please select from the following:",
            name: "menu",
            choices: ["Engineer", "Intern", "Neither"],
        }
    ]).then(employeeData => {
        switch (employeeData.menu) {
            case "Intern":
                internQuestions();
                break;
            case "Engineer":
                engineerQuestions();
                break;
            default:
                writeFile();
        }
    });    
}

const internQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Intern's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Intern's employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Intern's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Intern's school name:",
            name: "school",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter school name to continue");
                    return false;
                }
            }        
        },
    ]).then(response => {
        console.log(response);
        const intern = new Intern (response.name, response.id, response.email, response.school);
        team.push(intern);
        addEmployee();
        
    })
};

const engineerQuestions = () => {
    return inquirer.prompt([
        {
            type: "input",
            message: "Enter Engineers's Name:",
            name: "name",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter name to continue");
                    return false;
                }
            }
        },
        {
            type: "input",
            message: "Enter Engineers's employee ID:",
            name: "id",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter ID to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Engineers's e-mail address:",
            name: "email",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter email to continue");
                    return false;
                }
            }        
        },
        {
            type: "input",
            message: "Enter Engineers's GitHub username:",
            name: "github",
            validate: (value)=> {
                if (value){
                    return true;
                } else {
                    console.log ("Please enter GitHub username to continue");
                    return false;
                }
            }        
        },
    ]).then(response => {
        console.log(response);
        const engineer = new Engineer (response.name, response.id, response.email, response.github);
        team.push(engineer);
        addEmployee();
        
    })
};



// TODO: Create a function to write HTML file

const writeFile = () => {
    fs.writeFile('./resources/index.html', generateHTML(team), err => {
        // if there is an error 
        if (err) {
            console.log(err);
            return;
        // when the profile has been created 
        } else {
            console.log("Team profile created")
        }
    })
}; 

managerQuestion();

