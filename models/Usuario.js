const { DataTypes } = require('sequelize')
const db = require('../db/conn')

const Usuario = db.define('usuarios', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username:{
        type: DataTypes.STRING(50),
        allowNull: false
    },
    password:{
        type: DataTypes.STRING(255),
        allowNull: false
    }
},{
    timestamps: false,
    tableName: 'usuarios'
})

module.exports = Usuario