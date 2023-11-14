const inquirer = require("inquirer");
const Query = require("./dbquery");

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
      console.log(typeof response.userChoice);
      let dbRequest;
      switch (response.userChoice) {
        case 1:
          dbRequest = new Query("department", "*");
          dbRequest.fetch();
          break;
        case 2:
          dbRequest = new Query("role", "*");
          dbRequest.fetch();
          break;
        case 3:
          dbRequest = new Query("employee", "*");
          dbRequest.fetch();
          break;
        case 4:
          inquirer
            .prompt([
              {
                type: "input",
                message: "Enter the department name:",
                name: "answer",
              },
            ])
            .then((response) => {
              dbRequest = new Query("department", `name`);
              dbRequest.put(`"${response.answer}"`);
            });
          break;
        case 5:
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
              dbRequest = new Query("role", [
                "title",
                "salary",
                "department_id",
              ]);
              dbRequest.put(
                `"${response.title}", "${response.salary}", "${response.department}"`
              );
            });
          break;
        case 6:
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
              dbRequest = new Query("employee", [
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
          break;
        case 7:
          // Do 7 code
          //
          break;
      }
    });
}

init();
