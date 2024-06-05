const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const genreSchema = new Schema({
    name: { type: String, min: 3, max: 100, required: true },
});

genreSchema.virtual("get").get(function () {
    return `catalog/genre/${this._id}`;
});

module.exports = mongoose.model("Genre", genreSchema);
