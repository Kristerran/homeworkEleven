INSERT INTO dept (dept_name)
VALUES ("Doing sched"),
("Hardlines"),
("Front-end");

INSERT INTO emp_role  (title, salary, dept_id)
VALUES ("Manager", 1000, 1),
("Cashier", 10, 2),
("Stock-human", 10, 3);

INSERT INTO  employee (first_name, last_name, role_id, manager_id)
VALUES ("Bill", "Billsworth", 1, NULL),
("Cecilia", "Cecil", 2, 1),
("Jordan", "Almondsworth", 3, 1);