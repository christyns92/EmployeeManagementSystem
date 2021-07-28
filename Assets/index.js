const mysql = require("mysql2");
const db = mysql.createConnection({
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL password
        password: "Password123",
        database: "employeeRoster_db",
    },
    console.log(`Connected to the employeeRoster_db database.`)
);

const inquirer = require("inquirer");

function initialPrompt() {
    inquirer
        .prompt([{
            type: "list",
            message: "What would you like to do?",
            choices: [
                "View All Employees",
                "View Roles",
                "View All Departments",
                "Add Departments",
                "Add Roles",
                "Add Employee",
                "Quit",
            ],
            name: "answer",
        }, ])
        .then((answer) => {
            console.log(answer.answer);
            let question = answer.answer;
            switch (question) {
                case "View All Employees":
                    viewAllEmployees();
                    break;
                case "Add Employee":
                    addEmployee();
                    break;
                case "Add Roles":
                    addRoles();
                    break;
                case "View Roles":
                    viewAllRoles();
                    break;
                case "View All Departments":
                    viewAllDepartment();
                    break;
                case "Add Departments":
                    addDepartment();
                    break;
                case "Quit":
                    break;
            }
        });
}

function viewAllEmployees() {
    db.query(
        "SELECT employees.id employees_id, CONCAT(employees.first_name, ' ', employees.last_name)AS employees_name, roles.title, department.name AS department, roles.salary,CONCAT(manager.first_name, ' ', manager.last_name) AS manager_name FROM employees employees LEFT JOIN employees manager ON employees.manager_id = manager.id INNER JOIN roles ON(roles.id = employees.role_id) INNER JOIN department ON(department.id = roles.department_id) ORDER BY employees.id;",
        (err, answer) => {
            if (err) {
                console.log(err);
            }
            console.log(answer);
            initialPrompt();
        }
    );

}

function viewAllRoles() {
    db.query(
        "SELECT roles.id,title, department.name AS department, salary FROM roles roles INNER JOIN department department ON roles.department_id = department.id;",
        (err, answer) => {
            if (err) {
                console.log(err);
            }
            console.log(answer);
            initialPrompt();
        }
    );
}

function viewAllDepartment() {
    db.query(
        "SELECT id, name AS department FROM department;",
        (err, answer) => {
            if (err) {
                console.log(err);
            }
            console.log(answer);
            initialPrompt();
        }
    );
}

function addEmployee() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is employee's id?",
                name: "employees_id",
            },
            {
                type: "input",
                message: "What is employee's first name?",
                name: "employees_firstName",
            },
            {
                type: "input",
                message: "What is employee's last name?",
                name: "employees_lastName",
            },
            {
                type: "list",
                message: "What is employee's role?",
                name: "employeeRole",
                choices: [
                    "Sales Lead",
                    "Salesperson",
                    "Lead Engineering",
                    "Software Engineering",
                    "Account manager",
                    "Accountant",
                    "Legal Team Lead",
                    "Lawyer",
                ],
            },
            {
                type: "list",
                message: "Who is the employee's manager?",
                name: "employeeManager",
                choices: [
                    "Christyn Garcia",
                    "Jessamyn McTwigan",
                    "Thomas Limmer",
                    "Rico Perez",
                    "Jacob Guiro",
                    "Harrison Kidd",
                    "Brandon Norsworthy",
                    "Mason Wallis",
                    "None",
                ],
            },
        ])
        .then((answer) => {
            console.log(answer);
            let employees_id = answer.employees_id;
            let employeeFirstName = answer.employee_firstName;
            let employeeLastName = answer.employee_lastName;
            let employeeRole = answer.employee_Role;
            let employeeManager = answer.employee_manager;
            db.query(
                `INSERT INTO employees (id,first_name, last_name, roles_id, manager_id) VALUES (${employees_id},${employeeFirstName},${employeeLastName},${employeeRole}','${employeeManager}')`,
                (err, results) => {
                    if (err) return err;
                    console.log(`\n Added ${employeeLastName} to the database!\n `);
                }
            );

            initialPrompt();
        });
}

function addRoles() {
    inquirer
        .prompt([{
                type: "input",
                message: "What is the name of the role?",
                name: "role",
            },
            {
                type: "input",
                message: "What is the salary  of the role?",
                name: "salary",
            },

            {
                type: "list",
                message: "What is name of the department?",
                name: "departmentName",
                choices: departmentName,
            },
        ])
        .then((answer) => {
            console.log(answer);
            let getRoleName = answer.getRoleName;
            let getRoleSalary = answer.getRoleSalary;
            let getRoleDepartment = answer.getRoleDepartment;


            db.query(
                `
                        INSERT INTO roles(title, salary, department.name AS department) VALUES("${getRoleName}", $ { getRoleSalary }, $ { getRoleDepartment });
                        `,
                function(err, results) {
                    if (err) return err;

                    console.log("Added New Roles");
                }
            );
            initialPrompt();
        });

}

let departmentName = ["Engineering", "Sales", "Legal", "Finance"];

function addDepartment() {
    inquirer
        .prompt([{
                type: "list",
                message: "What is name of the department?",
                name: "name",
                choices: ["Engineering", "Sales", "Legal", "Finance"],
            },
            {
                type: "list",
                message: "Which department does the role belong to?",
                name: "belong",
                choices: departmentName,
            },
        ])
        .then((answer) => {
            console.log(answer)
            let getName = answer.getName;
            departmentName.push(getName);
            //console.log("hit");
            db.query(
                `
                        INSERT INTO department(id, name) VALUES(005, "${getName}");
                        `,
                function(err, answer) {
                    if (err) return err;

                    console.log(answer);
                }
            );
            initialPrompt();
        });

}
initialPrompt();