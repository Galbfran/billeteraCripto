const { User } = require("../db")

const createUser = async (name , email , password) => {
    let billetera = {
        pesos: 3000
    }
    const newUser = await User.create({ name , email , password , billetera});
    return newUser
}

module.exports = createUser;