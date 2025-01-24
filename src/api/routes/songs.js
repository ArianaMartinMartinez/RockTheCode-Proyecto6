const { getSongs, getSongById, getSongsByCategory, getSongsByAlbum, postSong, putSong, deleteSong } = require("../controllers/songs");

const songsRouter = require("express").Router();

songsRouter.get("/album/:album", getSongsByAlbum);
songsRouter.get("/category/:category", getSongsByCategory);
songsRouter.get("/:id", getSongById);
songsRouter.get("/", getSongs);
songsRouter.post("/", postSong);
songsRouter.put("/:id", putSong);
songsRouter.delete("/:id", deleteSong);

module.exports = songsRouter;