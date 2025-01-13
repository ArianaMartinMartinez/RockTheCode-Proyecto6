require("dotenv").config();

const express = require("express");
const app = express();

app.listen(3000, () => {
    console.log("Servidor desplegado en http://localhost:3000");
})