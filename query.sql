  
-- it is first way to join 3 tables
SELECT  first_name,last_name,title,name,salary,manager_id, role_id
FROM department -- first table's name
INNER JOIN  role -- second table's name
ON role.department_id = department.department_id
INNER JOIN employee -- third table's name
ON employee.role_id =role.role_id
-- it is secoind way to join 3 tables 
SELECT id, first_name,last_name,title,department.name AS department,salary,manager_id, role_id
FROM department,role,employee --all 
WHERE department_id = department_id AND role_id =role_id;
-- it is third way to join 3 tables 
SELECT  employees_id,firtName,lastName,title,salary,department.name AS department,manager_id, role_id
FROM employees 
INNER JOIN  roles 
ON role_id =roles_id
INNER JOIN department
ON department_id = department_id

SELECT employee.id employee_id, CONCAT(employee.firstName, ' ', employee.lastName) AS employees_name, roles.title, department.name AS department, roles.salary, CONCAT(manager.firstName, ' ', manager.lastName) AS manager_name FROM employees employee LEFT JOIN employees manager ON employee.manager_id = manager.id INNER JOIN roles ON (roles.id = employee.role_id) 
INNER JOIN department ON (department.id = roles.department_id) ORDER BY employee.id;