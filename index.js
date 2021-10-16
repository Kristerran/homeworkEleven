const inquirer = require("inquirer");
const mysql = require("./connection");
const { insertADept, insertARole, insertAnEmp, updateARole } = require("./sequel");
// You’ll need to use the [MySQL2 package](https://www.npmjs.com/package/mysql2) to connect to your MySQL database and perform queries, the [Inquirer package](https://www.npmjs.com/package/inquirer) to interact with the user via the command line, and the [console.table package](https://www.npmjs.com/package/console.table) to print MySQL rows to the console.
db = require("./sequel")


const viewAllEmployees = async () => {
  const dbData = await db.findAllEmployees();
  console.table(dbData[0])
  mainMenu()
}


const viewAllDept = async () => {
    const dbData = await db.findAllDept();
    console.table(dbData[0]);
    mainMenu()
  }

  const viewAllRoles = async () => {
    dbData = await db.findAllRoles()
    console.table(dbData[0]);
    mainMenu()
  }


  const addADept = async () => {
    inquirer.prompt([
      {
        name: 'name',
        message: 'What is the department name?'
      },
    ]).then((answer) => {
      insertADept(answer.name)
      mainMenu()
    })
      .catch((err) => {
        console.log(err)
        mainMenu()
      })
  }

  const addARole = async () => {
    inquirer.prompt([
      {
        name: 'title',
        message: 'What is the role title?'
      },
      {
        name: 'salary',
        message: "What is the role salary?"
      },
      {
        name: 'dept_id',
        message: 'What department is the role in? (Please enter number id of department)'
      }
    ]).then((answer) => {
      insertARole(answer.title, answer.salary, answer.dept_id)
      mainMenu()
    })
      .catch((err) => {
        console.log(err)
        mainMenu()
      })
  }


  const addAnEmp = async () => {
    inquirer.prompt([
      {
        name: 'first_name',
        message: 'What is the Employees first name?'
      },
      {
        name: 'last_name',
        message: "What is the employees last name?"
      },
      {
        name: 'role_id',
        message: 'What role is the employee? (Please enter number id of department)'
      },
      {
        name: 'manager_id',
        message: 'Who is the employees manager? (Please enter managers id number) (if no manager leave blank)'
      }
    ]).then((answer) => {
      insertAnEmp(answer.first_name, answer.last_name, answer.role_id, answer.manager_id)
      mainMenu()
    })
      .catch((err) => {
        console.log(err)
        mainMenu()
      })
  }


  const updateEmpRole = async () => {
    inquirer.prompt([
      {
        name: 'employee',
        message: 'Which employee did you want to update? (Please enter employee ID)'
      },
      {
        name: 'role',
        message: "What role would you like to give them? (Please enter role ID)"
      }
    ]).then((answers) => {
      updateARole(answers.employee, answers.role)
      mainMenu()
    })
      .catch((err) => {
        console.log(err)
        mainMenu()
      })
  }


  //MAIN MENU
  function mainMenu() {
    inquirer.prompt([
      {
        name: "menu",
        message: "Welcome to the Employee Database Handler, use the arrow keys to select one of the options below!",
        type: "list",
        choices: ["viewAllEmployees", "viewAllDept", "viewAllRoles", "addADept", "addARole", "addAnEmp", "updateEmpRole"]
      }
    ])
      .then(
        //CALL FUNCTIONS BASED ON ANSWERS
        function (answer) {
          if (answer.menu == "viewAllEmployees") {
            console.log('View All Employees');
            viewAllEmployees();
          }
          else if (answer.menu == "viewAllDept") {
            console.log('View All Departments');
            viewAllDept();
          }
          else if (answer.menu == "viewAllRoles") {
            console.log('View All Roles');
            viewAllRoles();
          }
          else if (answer.menu == "addADept") {
            console.log('Add A Dept');
            addADept();
          }
          else if (answer.menu == "addARole") {
            console.log('Add A Role');
            addARole();
          }
          else if (answer.menu == "addAnEmp") {
            console.log('Add An Emp');
            addAnEmp();
          }
          else if (answer.menu == "updateEmpRole") {
            console.log('Update Emp Role');
            updateEmpRole();
          }
        }
      );
  }
  mainMenu()