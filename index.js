const inquirer = require("inquirer");
const mysql = require("connection")
// You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.

const menu = require('inquirer-menu');

const viewAllDept = {
  message: 'View All Departments',
  choices: {
    callApi: function() {

      return;
    }
  }
};

const updateEmpRole = {
    message: 'Update Employee Role',
    choices: {
      callApi: function() {

        return;
      }
    }
  };
const addAnEmp = {
    message: 'Add An Employee',
    choices: {
      callApi: function() {

        return;
      }
    }
  };
  const addARole = {
    message: 'Add A Role',
    choices: {
      callApi: function() {

        return;
      }
    }
  };
const addADept = {
    message: 'Add A Department',
    choices: {
      callApi: function() {

        return;
      }
    }
  };
const viewAllRoles = {
  message: 'View All Roles',
  choices: {
    callApi: function() {

      return;
    }
  }
};
const endProgram = {
    message: 'Are you ready to quit?',
    choices: {
      Yes: function() {
        process.end
        return;
      },
      No: function() {

      }
    }
  };
 
let level = 0;
 
function createMenu() {
  return {
    message: 'Welcome to the Employee Database Handler',
    choices: {
      // setupData: function() {
      //   level++;
      //   console.log('success');
 
      //   return;
      // },
      viewAllDept: viewAllDept,
      viewAllRoles: viewAllRoles,
      addADept: addADept,
      addARole: addARole,
      addAnEmp: addAnEmp,
      updateEmpRole: updateEmpRole,
      endProgram: endProgram
    }
  };
};

menu(createMenu)
  .then(function() {
    console.log('Thank you for using the Employee Database Handler, Are you ready to quit?.');
    exitApp()
  })
  .catch(function(err) {
    console.log(err.stack);
  });

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database 