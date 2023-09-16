const { DataTypes } = require("sequelize");

module.exports = (sequelize) =>{
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
}