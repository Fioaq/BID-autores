const mongoose = require('mongoose');

const AutorSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: [3, "Name must be at least 3 characters."],
        required: [true, "Name is required"]
    }
}, { timestamps: true });

module.exports.Autor = mongoose.model("Autor", AutorSchema);