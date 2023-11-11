const inquirer = require("inquirer");
const express = require("express");
require("dotenv").config();

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: "",
  },
  console.log(`Connected to the < > database.`)
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
