const { User } = require("../db")

const getUser = async(idUser) =>{
    let usuario = await User.findByPk(idUser);
    if(usuario === null) usuario = `Usuario no encontrado`
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