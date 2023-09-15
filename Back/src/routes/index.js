const { Router } = require('express');
const usersRoutes = require("./usersRoutes");
const monedasRoutes = require("./monedasRoutes")
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use("/users", usersRoutes);
router.use("/monedas", monedasRoutes);


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);







module.exports = router;
