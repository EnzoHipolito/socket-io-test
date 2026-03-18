const mysql = require('mysql2')

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'senai',
    port: '3306',
    database: 'db_ts'
})

module.exports = db;