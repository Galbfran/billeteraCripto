const { User } = require("../db");


/* {
    "dataUpdate": {
      "name": "Nuevo Nombre",
      "email": "nuevoemail@example.com"
    }
  } */

const modificarUsuario = async (idUser, dataUpdate) => {
  try {
    // Primero, verifica si el usuario existe
    const usuarioExistente = await User.findByPk(idUser);

    if (!usuarioExistente) {
      return "Usuario no encontrado"; // Puedes manejar el caso en que el usuario no exista
    }

    // Luego, utiliza el método update para modificar el usuario
    const user = await User.update(dataUpdate, {
      where: { idUser },
    });

    return user;
  } catch (error) {
    console.error("Error al modificar el usuario:", error);
    throw error;
  }
};

module.exports = modificarUsuario