const app = require("./src/app");

const PORT = 3001;


app.listen(PORT , () => {
    console.log(`servidor en puerto ${PORT}`);
})