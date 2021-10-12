const mysql = require("./connection")

class db {
    constructor() {
        this.connection = mysql
    }
    findAllEmployees() {
        return this.connection.promise().query(
            "SELECT employee.first_name, employee.last_name, employee.role_id FROM emp_role, role FROM employee;"
        )
    }
    findAllRoles() {
        return this.connection.promise().query(
            "SELECT emp_role.title, emp_role.salary, emp_roledept_id;"
        )
    }
    findAllDept() {
        return this.connection.promise().query(
            "SELECT  dept.dept_name;"
        )
    }

}

module.exports = new db