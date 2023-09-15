



const getUsersHandler = (req , res) =>{
    res.send("estoy en users")
}

const postUsersHandler = (req , res) =>{
    res.send("ruta post users")
}

const getOneUserHandler = (req , res) =>{
    res.send("ruta get users por id")
}

const updateOneUserHandler = (req , res) =>{
    res.send("ruta update users por id")
}

const deleteUserHandler = (req , res) =>{
    res.send("ruta delete users por id")
}



module.exports= {
    getUsersHandler,
    postUsersHandler,
    getOneUserHandler,
    updateOneUserHandler,
    deleteUserHandler
}