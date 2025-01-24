const Song = require("../models/songs");

const getSongs = async(req, res, next) => {
    try {
        const songs = await Song.find();

        return res.status(200).json(songs);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const getSongById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const song = await Song.findById(id);

        return res.status(200).json(song);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const getSongsByCategory = async(req, res, next) => {
    try {
        const { category } = req.params;

        const songs = await Song.find({ category });  //category: category (field name: param)

        return res.status(200).json(songs);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const getSongsByAlbum = async(req, res, next) => {
    try {
        const { album } = req.params;

        const songs = await Song.find({ album });  //category: category (field name: param)

        return res.status(200).json(songs);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const postSong = async(req, res, next) => {
    try {
        const newSong = new Song(req.body);
        const songSaved = await newSong.save();

        return res.status(201).json(songSaved);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const putSong = async(req, res, next) => {
    try {
        const { id } = req.params;
        const newSong = new Song(req.body);

        newSong._id = id;

        const updatedSong = await Song.findByIdAndUpdate(id, newSong, { new: true });   //new:true for it to return de updated song

        return res.status(200).json(updatedSong);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const deleteSong = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSong = await Song.findByIdAndDelete(id);

        return res.status(200).json(deleteSong);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

module.exports = {
    getSongs,
    getSongById,
    getSongsByCategory,
    getSongsByAlbum,
    postSong,
    putSong,
    deleteSong,
};