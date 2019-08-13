console.log("inside of char.js");

const mongoose = require("mongoose");

const CharSchema = new mongoose.Schema({
    name: String,
    race: String,
    class: String,
    level: Number
}, {timestamps: true});

mongoose.model("Char", CharSchema);