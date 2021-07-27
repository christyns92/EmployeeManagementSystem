const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Department = require("./lib/Department");
const Roles = require("./lib/Role");
const connection = require("./config");

function initializeQuestions() {
    inquirer
        .prompt({
            type: "list",
            message: "What would you like to do?",
            name: "answer",
            choices: [
                "Add Employee",
                "Remove Employee",
                "Update Employee Role",
                "Update Employee Manager",
                "View All Employees",
                "View All Employees By Department",
                "View All Employees By Manager",
                "Add Role",
                "View All Roles",
                "Remove Role",
                "View Total Utilized Budget By Department",
                "Quit",
            ],
        })
        .then((response) => {
            switch (response.answer) {
                case "Add Employee":
                    addEmployee();
                    break;

                case "Update Employee Role":
                    updateEmployee();
                    break;

                default:
                    process.exit();
            }
        });
}
initializeQuestions();

async function updateEmployee() {
    const allEmployees = await connection.query("SELECT * FROM employees");
    const allRoles = await connection.query("SELECT * FROM roles");
    const employeeChoices = allEmployees.map((person) => {
        return {
            name: `${person.first_name} ${person.last_name}`,
            value: person.id,
        };
    });
    const roleChoices = allRoles.map((role) => {
        return { name: role.title, value: role.id };
    });
    const answers = await inquirer.prompt([
        { type, name, message, choices: employeeChoices },
    ]);
}

//skdfjsfsdkfjkfj

//     const questions = [{
//         type: 'list',
//         message: 'What would you like to do?',
//         name: 'action',
//         choices: ["Add Employee", "Remove Employee", "Update Employee Role", "Update Employee Manager", "View All Employees",
//             "View All Employees By Department", "View All Employees By Manager", "Add Role", "View All Roles", "Remove Role", "View Total Utilized Budget By Department",
//             "Quit"
//         ]
//     },
//     {
//         type: 'list',
//         message: "Which employee's role do you want to update?",
//         name: 'update',
//         choices: ["Christyn Garcia", "Jessamyn McTwigan", "Thomas Limmer", "Rico Perez",
//             "Jacob Guiro", "Brandon Norsworthy", "Debra Duvall", "Amy Honaker"]
//     }, {
//         type: 'list',
//         message: "What is name of the department?",
//         name: 'name',
//         choices: []
//     }, {
//         type: 'list',
//         message: "What is the name of the role?",
//         name: 'role',
//         choices: []
//     }, {
//         type: 'list',
//         message: "What is the salary  of the role?",
//         name: 'salary',
//         choices: []
//     }, {
//         type: 'list',
//         message: "Which department does the role belong to?",
//         name: 'belong',
//         choices: ["Engineering", "Sales", "Legal", "Finance"]
//     }, {
//         type: 'list',
//         message: "What is employee's first name?",
//         name: 'first name',
//         choices: []
//     }, {
//         type: 'list',
//         message: "What is employee's last name?",
//         name: 'last name',
//         choices: []
//     }, {
//         type: 'list',
//         message: "What is employee's role?",
//         name: 'role',
//         choices: ["Sales Lead", "Salesperson", "Lead Engineering", "Software Engineering", "Account manager", "Accountant", "Legal Team Lead", "Lawyer"]
//     }, {
//         type: 'list',
//         message: "Who is the employee's manager?",
//         name: 'manager',
//         choices: [" "]
//     },
// ]
// inquirer.prompt(questions).then((res) => {
//     console.log(res)
// });

// // function init();
// // init();