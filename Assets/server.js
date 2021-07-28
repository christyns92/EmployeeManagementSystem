const express = require("express");
const inquirer = require("inquirer");
const mysql = require("mysql2");
const index = require("./index")
const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());;

// Connect to database
const db = mysql.createConnection({
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL password
        password: "Password123",
        database: "employeeRoster_db",
    },
    console.log(``)
);
// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
module.exports = db;