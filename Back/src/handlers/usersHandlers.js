const  createUser = require("../controlers/createUser");
const { getUser, getAllUsers} = require("../controlers/getUser");
const { datoError } = require("./funcionesAuxiliares");
const modificarUsuario = require("../controlers/updateUser");
const deleteUserId = require("../controlers/deleteUser")


const getUsersHandler = async (req , res) =>{
    try {
        const users = await getAllUsers();
        res.status(200).json(users)
    } catch (error) {
        res.status(400).send(`${error.message}`)
    }
}

const postUsersHandler = async (req , res) =>{
    try {
        const { email , name , password} = req.body;
        if(email === undefined || name === undefined || password === undefined ){
            let faltaDato = datoError(email , name , password);
            return res.status(400).send(faltaDato)
        }
        const newUser = await createUser(name , email , password);
        res.status(200).json( newUser )
        } catch (error) {
        res.status(400).send(`${error.message}`)
    }
}

const getOneUserHandler = async(req , res) =>{
    try {
        const { idUser } = req.params;
        if (idUser === undefined){
            return res.status(400).send(`El usuario no esta definido`)
        }
        const user = await getUser(idUser)
        res.status(200).json(user)
    } catch (error) {
        res.status(400).send(`${error.message}`)
    }
}

const updateOneUserHandler = async(req , res) =>{
    try {
        const { idUser } = req.params;
        const { dataUpdate} = req.body
        const userUpdate = await modificarUsuario(idUser , dataUpdate )
        res.status(200).json(userUpdate)
        
    } catch (error) {
        res.status(400).send(`${error.message}`)
    }
}

const deleteUserHandler = async(req , res) =>{
    try {
        const { idUser } = req.params;
        await deleteUserId(idUser)
        res.status(200).send(`Usuario ${idUser} eliminado con exito`)
        
    } catch (error) {
        res.status(400).send(`${error.message}`)
    }
}



module.exports= {
    getUsersHandler,
    postUsersHandler,
    getOneUserHandler,
    updateOneUserHandler,
    deleteUserHandler
}