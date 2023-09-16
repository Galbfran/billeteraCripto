const { Sequelize, DataTypes } = require('sequelize');
require("dotenv").config();

const { DB_NAME ,DB_PASSWORD , DB_USER , DB_HOST} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging:false});

sequelize.define("User", {
    idUser:{
        type:DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email:{
        type: DataTypes.STRING,
        unique:true
    },
    password:{
        type: DataTypes.STRING,
        allowNull:false
    },
    billetera:{
        type: DataTypes.JSON
    }
})

module.exports = {sequelize};