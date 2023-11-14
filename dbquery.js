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
        if (!err) {
          console.log(`${tableTitle.toUpperCase()} TABLE`);
          console.table(results);
          console.log(`\n`);
        } else {
          console.error(err);
        }
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
        if (!err) console.log("Data successfully added!");
        else console.log(err);
      }
    );
  }

  post(updateData, itemToUpdate) {
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
    // BONUS
  }
}

module.exports = DBQuery;
