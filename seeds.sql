INSERT INTO dept (dept_name)
VALUES (""),
        (""),
        ("");



CREATE TABLE emp_role (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL,
    dept_id INT,
    FOREIGN KEY(dept_id) 
    REFERENCES dept(id)
    ON DELETE SET NULL
);
CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    role_id INT,
    manager_id INT,
    FOREIGN KEY(role_id)
    REFERENCES emp_role(id)
    ON DELETE SET NULL
);