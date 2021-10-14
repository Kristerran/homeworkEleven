const connection = require("./connection")
const mysql = require("./connection")

class db {
    constructor() {
        this.connection = mysql
    }

    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT e.first_name, e.last_name, e.role_id AS emp_role, e.manager_id AS m FROM employee e LEFT JOIN emp_role ON e.role_id = emp_role.id LEFT JOIN employee m ON e.manager_id = m.id;"
            )
    }

    findAllRoles() {
        return this.connection.promise().query(
            "SELECT emp_role.title, emp_role.salary, emp_role.dept_id As dept FROM emp_role LEFT JOIN dept ON emp_role.dept_id = dept.id ;"
        )
    }

    findAllDept() {
        return this.connection.promise().query(
            "SELECT  dept.dept_name FROM dept;"
        )
    }

    insertADept(newName) {
        mysql.connect(function(err) {
            if (err) throw err;
            var sql = `INSERT INTO dept (dept_name) VALUES ("${newName}")`;
            mysql.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + "Department Added");
            });
          });
    }

    insertARole(newTitle, newSalary, newDept_id,) {
        mysql.connect(function(err) {
            if (err) throw err;
            var sql = `INSERT INTO emp_role  (title, salary, dept_id) VALUES ("${newTitle}", "${newSalary}", "${newDept_id}")`;
            mysql.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + "Role Added");
            });
          });
    }

    insertAnEmp(newFirstName, newLastName, newRoleId, newManagerid) {
        mysql.connect(function(err) {
            if (err) throw err;
            var sql = `INSERT INTO  employee (first_name, last_name, role_id, manager_id) VALUES ("${newFirstName}", "${newLastName}", "${newRoleId}", "${newManagerid}")`;
            mysql.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + "Employee Added");
            });
          });
        }

    updateARole(employee, role) {
        mysql.connect(function(err) {
            if (err) throw err;
            var sql = `UPDATE employee SET role_id  = '${role}' WHERE id = '${employee}'`;
            mysql.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + " record(s) updated");
            });
          });
        }




}

module.exports = new db(connection)