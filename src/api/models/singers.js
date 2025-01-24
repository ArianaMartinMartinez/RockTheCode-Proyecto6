const mongoose = require("mongoose");

const singerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    photo: { type: String, required: true },
    songs: [{ type: mongoose.Types.ObjectId, ref: "songs", required: false, unique: true }],
}, {
    timestamps: true,
    collection: "singers",
});

const Singer = mongoose.model("singers", singerSchema, "singers");  //model, schema, colection
module.exports = Singer;