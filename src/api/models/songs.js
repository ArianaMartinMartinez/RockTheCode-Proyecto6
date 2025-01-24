const mongoose = require("mongoose");

const songSchema = new mongoose.Schema(
    {
        name: { type: String, required: true },
        duration: { type: Number, required: true },
        album: { type: String, required: true },
        category: { 
            type: String, 
            required: true, 
            enum: [
                "classic",
                "jazz",
                "pop",
                "rock",
                "country",
                "techno",
                "flamenco",
                "reggaeton",
                "rap",
                "alternative",
            ] 
        },
    }, {
        timestamps: true,
        collection: "songs",
    }
);

const Song = mongoose.model("songs", songSchema, "songs");  //model, schema, colection
module.exports = Song;