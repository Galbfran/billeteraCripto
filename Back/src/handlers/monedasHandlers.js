const getAllMonedas = require("../controlers/getAllMonedas")



const getMonedasHandler = async(req , res) =>{
    console.log("handler")
    try {
        const monedas = await getAllMonedas();
        res.status(200).json(monedas)
    } catch (error) {
        res.status(400).json(error.message)
    }
}

module.exports = {
    getMonedasHandler
}