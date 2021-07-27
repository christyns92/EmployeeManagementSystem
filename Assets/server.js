const express = require('express');
const inquirer = require('inquirer');
const employee = require('./lib/Employee');
const role = require('./lib/Role');
const department = require('./lib/Department');

const PORT = process.env.PORT || 8080;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection({
        host: 'localhost',
        // MySQL username,
        user: 'root',
        // MySQL password
        password: 'Password123',
        database: 'roster_db'
    },
    console.log(`Connected to the roster_db database.`)
);

// Query database
db.query('SELECT * FROM employees', function(err, results) {
    console.log(results);
});
// Query database
db.query('SELECT * FROM departments', function(err, results) {
    console.log(results);
});

// Query database
db.query('SELECT * FROM roles', function(err, results) {
    console.log(results);
});


// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});