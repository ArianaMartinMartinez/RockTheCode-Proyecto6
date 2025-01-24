require("dotenv").config();
const singersRouter = require("./src/api/routes/singers");
const songsRouter = require("./src/api/routes/songs");
const { connectDB } = require("./src/config/db");

const express = require("express");
const app = express();

//express.json so de server is able to get data in json format
app.use(express.json());

connectDB();

app.use("/api/v1/songs", songsRouter);
app.use("/api/v1/singers", singersRouter);

app.use("*", (req, res, next) => {
    return res.status(404).json("Route not found");
});

app.listen(3000, () => {
    console.log("Server deployed in http://localhost:3000");
});