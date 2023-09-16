const { Sequelize } = require('sequelize');
const UserModel = require("./models/user")
require("dotenv").config();

const { DB_NAME ,DB_PASSWORD , DB_USER , DB_HOST} = process.env;


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
{logging:false});

UserModel(sequelize)

module.exports = {sequelize , ...sequelize.models};