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

    addADept() {
        
    }

    addARole() {

    }

    addAnEmp() {

    }

    updateEmpRole(employee, role) {
        con.connect(function(err) {
            if (err) throw err;
            var sql = `UPDATE employees SET role_id  = '${role}' WHERE id = '${employee}'`;
            con.query(sql, function (err, result) {
              if (err) throw err;
              console.log(result.affectedRows + " record(s) updated");
            });
          });
          return this.connection.promise().query(
            "SELECT e.first_name, e.last_name, e.role_id AS emp_role, e.manager_id AS m FROM employee e LEFT JOIN emp_role ON e.role_id = emp_role.id LEFT JOIN employee m ON e.manager_id = m.id;"
            )
    }




}

module.exports = new db(connection)