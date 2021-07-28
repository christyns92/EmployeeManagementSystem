DROP DATABASE IF EXISTS employeeRoster_db;
CREATE DATABASE employeeRoster_db;
USE employeeRoster_db;
CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
CREATE TABLE roles (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title  VARCHAR(30) NOT NULL,
    salary DECIMAL,
    department_id INT,
    FOREIGN KEY(department_id) REFERENCES department(id) ON DELETE SET NULL 

);
CREATE TABLE employees (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name  VARCHAR (30) NOT NULL,
    last_name  VARCHAR (30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY(role_id) REFERENCES roles(id) ON DELETE SET NULL,
    FOREIGN KEY(manager_id) REFERENCES employees(id) 
);

INSERT INTO department (name)
VALUES
    ("Sales"),
    ("Engineering"),
    ("Finance"),
    ("Legal");
   
INSERT INTO roles (title, salary, department_id)
VALUES
    ("Sales Lead", 60000, 4),
    ("Salesperson", 35000, 4),
    ("Lead Engineer", 200000, 1),
    ("Software Engineer", 150000, 1),
    ("Account Manager", 140000, 2),
    ("Accountant", 10000, 2),
    ("Legal Team Lead", 225000, 3),
    ("Lawyer", 175000, 3);
  

INSERT INTO employees (first_name, last_name, role_id, manager_id)
VALUES
    ("Christyn", "Garcia", 1, null),
    ("Jessamyn", "McTwigan", 2, 1),
    ("Thomas", "Limmer", 3, null),
    ("Rico", "Perez", 4, 3),
    ("Jacob", "Guiro", 5, null),
    ("Harrison", "Kidd", 6, 5),
    ("Brandon", "Norsworthy", 7, null),
    ("Mason", "Wallis", 8, 7);