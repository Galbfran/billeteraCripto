const { User } = require("../db")

const getUser = async(idUser) =>{
    const usuario = await User.findByPk(idUser);
    return usuario;
}

const getAllUsers = async () =>{ 
    const usuarios = await User.findAll();
    return usuarios;
}

module.exports = {
    getUser,
    getAllUsers
}