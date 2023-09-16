const datoError = (email, name, password) => {
  const errores = [];

  if (email === undefined || email === null) {
    errores.push('El parámetro "email" es undefined o null.');
  }

  if (name === undefined || name === null) {
    errores.push('El parámetro "name" es undefined o null.');
  }

  if (password === undefined || password === null) {
    errores.push('El parámetro "password" es undefined o null.');
  }

  if (errores.length > 0) {
    return errores.join(" "); // Concatena los mensajes de error en un solo texto
  }

  // Si ninguno de los parámetros es undefined o null, devuelve un mensaje indicando que no hay errores.
  return "Ningún parámetro es undefined o null.";
};

module.exports = { datoError };
