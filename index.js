const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      //
      type: "rawlist",
      message: "Please select an option from the following menu:",
      choices: [
        "View All Departments",
        "View All Roles",
        "View All Employees",
        "Add A Department",
        "Add A Role",
        "Add An Employee",
        "Update An Employee Role",
      ],
      name: "userChoice",
    },
  ])
  .then((response) => {
    console.log(response.userChoice);
  });
