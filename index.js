const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');

const generatePage = require('./lib/page-template.js');
const writeFile = require('./lib/generate-site.js')

var employees = [];

const promptUserManger = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'Enter the name of your team manager:'
        },
        {
            type: 'input',
            name: 'manager-id',
            message: 'Enter the id of the team manager:'
        },
        {
            type: 'input',
            name: 'manager-email',
            message: 'Enter the email of the team manager:'
        },
        {
            type: 'input',
            name: 'manager-office',
            message: 'Enter the office number of the team manager:'
        },
    ])
    .then(managerInfo => {
        managerInfo.role = 'Manager';
        employees.push(managerInfo);
        menuPage();
    });
};

const getEngineer = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'engName',
            message: 'Enter the name of the engineer:'
        },
        {
            type: 'input',
            name: 'engID',
            message: 'Enter the ID of the engineer:'
        },
        {
            type:'input',
            name: 'engEmail',
            message: 'Enter the email of the engineer:'
        },
        {
            type: 'input',
            name: 'engGithub',
            message: 'Enter the github username of the engineer:'
        },
    ])
    .then(engInfo => {
        engInfo.role = 'Engineer';
        employees.push(engInfo);
        menuPage();
    });
}

const getIntern = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'intrnName',
            message: 'Enter the name of the intern:'
        },
        {
            type: 'input',
            name: 'intrnID',
            message: 'Enter the ID of the intern:'
        },
        {
            type:'input',
            name: 'intrnEmail',
            message: 'Enter the email of the intern:'
        },
        {
            type: 'input',
            name: 'intrnSchool',
            message: 'Enter the name of the school attended by the intern:'
        },
    ])
    .then(internInfo => {
        internInfo.role = 'Intern';
        employees.push(internInfo);
        menuPage();
    });
}

const menuPage = () => {
    inquirer.prompt([
        {
            type: 'checkbox',
            name: 'next',
            message: 'Enter next option',
            choices: ['Add engineer', 'Add intern', 'Complete Team'],
            validate: list => 
            {
                if(list.length)
                    return true;
                else 
                {
                    console.log("Please pick one of the values");
                    return false;
                }
            }
        }
    ])
    .then(menuInfo => {
        if(menuInfo.next[0] === 'Complete Team')
        {
            console.log(employees);
            var pageData = generatePage(employees);
            console.log(pageData);
            writeFile(pageData);
        }
        else if(menuInfo.next[0] === 'Add engineer')
            getEngineer();
        else    
            getIntern();
    });
}

function init() {
    promptUserManger();
    
    /*
    .then(managerInfo => {
        managerInfo.role = 'Manager';
        console.log(managerInfo);
        employees.push(managerInfo);
    })
    .then(() => {
        return menuPage();
    })
    .then(menuInfo => {
        //console.log(menuInfo);
        if(menuInfo.next[0] === 'Complete Team')
            // call generate site
            console.log('done');
        else if(menuInfo.next[0] === 'Add Engineer')
            getEngineer()
            .then(engInfo => {
                employees.push(engInfo);
            });
        else
            getIntern()
            .then(intrnInfo => {
                employees.push(intrnInfo);
            })
    }); */

}

init();
