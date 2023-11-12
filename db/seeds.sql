INSERT INTO department (name)
VALUES ("HR"),
       ("Accounting"),
       ("Sales"),
       ("IT");

INSERT INTO role (title, salary, department_id)
VALUES ("Salesman", 100000, 3),
       ("Accountant", 150000, 2),
       ("Support Technician", 65000, 4),
       ("HR Specialist", 50000, 1);

INSERT INTO managers (first_name)
VALUES ("Bob"),
       ("Pat"),
       ("Mary"),
       ("Will");

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Bob", "Davis", 1, 1),
       ("Dan", "MaJam", 4, 2),
       ("Eli", "Tristan", 2, 3),
       ("Trini", "Gaytan", 3, 4);

