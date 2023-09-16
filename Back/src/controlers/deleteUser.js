const { User } = require("../db");

const deleteUserId = async (idUser) => {
  try {
    // Primero, verifica si el usuario existe
    const usuarioExistente = await User.findByPk(idUser);

    if (!usuarioExistente) {
      return "Usuario no encontrado"; // Puedes manejar el caso en que el usuario no exista
    }

    // Luego, utiliza el método destroy para eliminar el usuario
    await User.destroy({
      where: { idUser },
    });

    return "Usuario eliminado con éxito";
  } catch (error) {
    console.error("Error al eliminar el usuario:", error);
    throw error;
  }
};

module.exports = deleteUserId;