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