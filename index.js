const inquirer = require("inquirer");
const Query = require("./query");

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
          // Do 2 code
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
              query = new Query("department", `*`);
              query.update(response.answer);
            });
          break;
        case 5:
          // Do 5 code
          //
          break;
        case 6:
          // Do 6 code
          //
          break;
        case 7:
          // Do 7 code
          //
          break;
      }
    });
}

init();
