const mysql = require("mysql2");
require("dotenv").config();

class DBQuery {
  constructor(table, columns) {
    this.table = table;
    this.columns = columns;
    this.data = [];
  }

  fetch() {
    const db = mysql.createConnection(
      {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      console.log(`Connected to the Employees database.`)
    );

    db.query(
      `SELECT ${this.columns.toString()} FROM ${this.table}`,
      function (err, results) {
        console.log(results);
      }
    );
  }

  update(data) {
    // INSERT INTO managers (first_name)
    // VALUES ("Bob");

    const db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    db.query(
      `INSERT INTO ${this.table} (name) VALUES ("${data}")`,
      function (err, results) {
        console.log(results);
        console.log(`Deparment "${data}" added successfully!`);
      }
    );
  }

  delete() {
    //
  }
}

module.exports = DBQuery;
