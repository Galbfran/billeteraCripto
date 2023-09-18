const { Router } = require('express');
const { getMonedasHandler} = require("../handlers/monedasHandlers")
const monedasRoutes = Router();

monedasRoutes.get("/" , getMonedasHandler);

module.exports = monedasRoutes