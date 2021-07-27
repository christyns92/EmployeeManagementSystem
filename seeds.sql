INSERT INTO department (name)
VALUES
    (1, "Sales"),
    (2, "Engineering"),
    (3, "Finance"),
    (4, "Legal")
   
INSERT INTO role (title, salary, department_id)
VALUES
    ("Sales Lead", 60000, 4),
    ("Salesperson", 35000, 4),
    ("Lead Engineer", 200000, 1),
    ("Software Engineer", 150000, 1),
    ("Account Manager", 140000, 2),
    ("Accountant", 10000, 2),
    ("Legal Team Lead", 225000, 3),
    ("Lawyer", 175000, 3);"),
  

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ("Christyn", "Garcia", 1, null),
    ("Jessamyn", "McTwigan", 2, 1),
    ("Thomas", "Limmer", 3, null),
    ("Rico", "Perez", 4, 3),
    ("Jacob", "Guiro", 5, null),
    ("Harrison", "Kidd", 6, 5),
    ("Brandon", "Norsworthy", 7, null),
    ("Mason", "Wallas", 8, 7);"
   