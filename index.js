const inquirer = require("inquirer");
const DBQuery = require("./dbquery");

function init() {
  inquirer
    .prompt([
      {
        type: "rawlist",
        message: "Please select an option from the following menu:",
        choices: [
          {
            name: "View All Departments",
            value: 1,
          },
          {
            name: "View All Roles",
            value: 2,
          },
          {
            name: "View All Employees",
            value: 3,
          },
          {
            name: "Add a Department",
            value: 4,
          },
          {
            name: "Add a Role",
            value: 5,
          },
          {
            name: "Add an Employee",
            value: 6,
          },
          {
            name: "Update an Employee Role",
            value: 7,
          },
        ],
        name: "userChoice",
      },
    ])
    .then((response) => {
      switch (response.userChoice) {
        case 1: // View All Departments
          promptViewDept();
          break;
        case 2: // View All Roles
          promptViewRole();
          break;
        case 3: // View all employees
          promptViewEmployee();
          break;
        case 4: // Add department
          promptAddDept();
          break;
        case 5: // Add role
          promptAddRole();
          break;
        case 6: //Add employee
          promptAddEmployee();
          break;
        case 7: //Update employee's role
          promptUpdateEmployee();
          break;
      }
    });
}

init();

function promptViewDept() {
  dbRequest = new DBQuery("department", "*");
  dbRequest.fetch();
  return init();
}

function promptViewRole() {
  dbRequest = new DBQuery("role", "*");
  dbRequest.fetch();
  return init();
}

function promptViewEmployee() {
  dbRequest = new DBQuery("employee", "*");
  dbRequest.fetch();
  return init();
}

function promptAddDept() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the department name:",
        name: "answer",
      },
    ])
    .then((response) => {
      dbRequest = new DBQuery("department", `name`);
      dbRequest.put(`"${response.answer}"`);
    });
}

function promptAddRole() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Enter the role's title:",
        name: "title",
      },
      {
        type: "input",
        message: "Enter the new role's salary:",
        name: "salary",
      },
      {
        type: "input",
        message: "Enter the role's department ID:",
        name: "department",
      },
    ])
    .then((response) => {
      dbRequest = new DBQuery("role", ["title", "salary", "department_id"]);
      dbRequest.put(
        `"${response.title}", "${response.salary}", "${response.department}"`
      );
    });
}

function promptAddEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        message: "Employee first name:",
        name: "firstName",
      },
      {
        type: "input",
        message: "Employee last name:",
        name: "lastName",
      },
      {
        type: "input",
        message: "Employee's role:",
        name: "role",
      },
      {
        type: "input",
        message: "Employee's manager",
        name: "manager",
      },
    ])
    .then((response) => {
      dbRequest = new DBQuery("employee", [
        "first_name",
        "last_name",
        "role_id",
        "manager_id",
      ]);
      console.log(response);
      dbRequest.put(
        `"${response.firstName}", "${response.lastName}", "${response.role}", "${response.manager}"`
      );
    });
}

function promptUpdateEmployee() {
  const employeeList = new DBQuery("employee", "*");
  const roleList = new DBQuery("role", "*");

  employeeList.fetch();
  roleList.fetch();
  setTimeout(function () {
    inquirer
      .prompt([
        {
          type: "input",
          message: "Enter the ID of the employee you want to update:",
          name: "employeeChoice",
        },
        {
          type: "input",
          message: "What Role would you like to give them?",
          name: "roleChoice",
        },
      ])
      .then((response) => {
        const query = new DBQuery("employee", "*");
        query.post(`role_id = ${response.roleChoice}`, response.employeeChoice);
      });
  }, 500);
}
