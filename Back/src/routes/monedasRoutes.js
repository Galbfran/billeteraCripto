const { Router } = require('express');

const monedasRoutes = Router();

monedasRoutes.get("/" , (req , res) => {
    res.send("estoy en monedas")
});

module.exports = monedasRoutes