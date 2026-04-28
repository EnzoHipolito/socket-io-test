const { Sequelize } = require('sequelize');
const db = new Sequelize(
    process.env.DB_NAME || "bd_03",
    process.env.DB_USER || "root",
    process.env.DB_PASS || "senai",
    {
        host: process.env.DB_HOST || "localhost",
        dialect: "mysql",
        port: 3306,
    }
);

module.exports = db;