const mysql2 = require("mysql2")

const connection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Ju66l3my!',
    database: 'employee_db'
});

module.exports = connection