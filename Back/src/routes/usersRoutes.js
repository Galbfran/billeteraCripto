const { Router } = require('express');
const {getUsersHandler , postUsersHandler , getOneUserHandler , updateOneUserHandler, deleteUserHandler} = require("./../handlers/usersHandlers")
const usersRoutes = Router();




usersRoutes.get("/" , getUsersHandler);

usersRoutes.get("/:idUser" , getOneUserHandler);

usersRoutes.post("/" , postUsersHandler);

usersRoutes.put("/:idUser" , updateOneUserHandler);

usersRoutes.delete("/:idUser", deleteUserHandler);


module.exports = usersRoutes