const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection({
        host: "localhost",
        // MySQL username,
        user: "root",
        // MySQL password
        password: "Password123",
        database: "roster_db",
    },
    console.log(`Connected to the roster_db database.`)
);
// fancy line of code that allows us to us asynch/await
connection.query = util.promisify(connection.query);
connection.connect();
module.exports = connection;