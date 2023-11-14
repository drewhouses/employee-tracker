const mysql = require("mysql2");
require("dotenv").config();

class DBQuery {
  constructor(table, columns) {
    this.table = table;
    this.columns = columns;
    this.data = [];
    this.newData = [];
  }

  fetch() {
    const db = mysql.createConnection(
      {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
      },
      console.log(`\n`)
    );
    let tableTitle = this.table;
    db.query(
      `SELECT ${this.columns.toString()} FROM ${this.table}`,
      function (err, results) {
        console.log(`${tableTitle.toUpperCase()} TABLE`);
        // console.log(`${this.table} TABLE`);
        console.table(results);
        console.log(`\n`);
      }
    );
  }

  put(data) {
    const db = mysql.createConnection({
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASS,
      database: process.env.DB_NAME,
    });

    db.query(
      `INSERT INTO ${this.table} (${this.columns}) VALUES (${data})`,
      function (err, results) {
        // console.log(results);
        if (!err) console.log(err);
      }
    );
  }

  post(updateData, itemToUpdate) {
    // UPDATE table_name
    // SET column1 = value1, column2 = value2, ...
    // WHERE condition;

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
      `UPDATE ${this.table} SET ${updateData} WHERE id=${itemToUpdate}`,
      function (err, results) {
        // console.log(results);
        if (!err) console.log("Update successful!");
      }
    );
  }

  delete() {
    //
  }
}

module.exports = DBQuery;
