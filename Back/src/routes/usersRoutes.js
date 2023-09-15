const { Router } = require('express');

const usersRoutes = Router();

usersRoutes.get("/" , (req , res) => {
    res.send("estoy en users")
});

module.exports = usersRoutes