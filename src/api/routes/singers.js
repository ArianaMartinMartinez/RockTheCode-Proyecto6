const { getSingers, getSingerById, postSinger, putSinger, deleteSinger } = require("../controllers/singers");

const singersRouter = require("express").Router();

singersRouter.get("/:id", getSingerById);
singersRouter.get("/", getSingers);
singersRouter.post("/", postSinger);
singersRouter.put("/:id", putSinger);
singersRouter.delete("/:id", deleteSinger);

module.exports = singersRouter;