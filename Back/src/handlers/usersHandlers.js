



const getUsersHandler = (req , res) =>{
    res.send("estoy en users")
}

const postUsersHandler = (req , res) =>{
    try {
        const { email , name } = req.body;
        if(email === undefined || name === undefined ){
            return res.status(400).send(`faltan datos para crear usuario`)
        }


        res.send(`Creando usuario con nombre ${name} , email ${email}`)
        } catch (error) {
        res.status(400).send(`${error}`)
    }
}

const getOneUserHandler = (req , res) =>{
    const { idUser } = req.params;
    res.send(`ruta get users por id ${idUser}`)
}

const updateOneUserHandler = (req , res) =>{
    const { idUser } = req.params;
    res.send(`ruta update users por id ${idUser}`)
}

const deleteUserHandler = (req , res) =>{
    const { idUser } = req.params;
    res.send(`ruta delete users por id ${idUser}`)
}



module.exports= {
    getUsersHandler,
    postUsersHandler,
    getOneUserHandler,
    updateOneUserHandler,
    deleteUserHandler
}