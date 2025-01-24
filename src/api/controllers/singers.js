const Singer = require("../models/singers");

const getSingers = async(req, res, next) => {
    try {
        const singers = await Singer.find().populate("songs");

        return res.status(200).json(singers);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const getSingerById = async(req, res, next) => {
    try {
        const { id } = req.params;
        const singer = await Singer.findById(id).populate("songs");

        return res.status(200).json(singer);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const postSinger = async(req, res, next) => {
    try {
        const newSinger = new Singer(req.body);
        const singerSaved = await newSinger.save();

        return res.status(201).json(singerSaved);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const putSinger = async(req, res, next) => {
    try {
        const { id } = req.params;
        const oldSinger = await Singer.findById(id);
        const newSinger = new Singer(req.body);

        newSinger._id = id;
        newSinger.songs = [...oldSinger.juegos, ...req.body.juegos];

        const updatedSinger = await Singer.findByIdAndUpdate(id, newSinger, { new: true });   //new:true for it to return de updated singer

        return res.status(200).json(updatedSinger);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

const deleteSinger = async(req, res, next) => {
    try {
        const { id } = req.params;
        const deletedSinger = await Singer.findByIdAndDelete(id);

        return res.status(200).json(deletedSinger);
    } catch (error) {
        return res.status(400).json("Request error", error);
    }
}

module.exports = {
    getSingers,
    getSingerById,
    postSinger,
    putSinger,
    deleteSinger,
};