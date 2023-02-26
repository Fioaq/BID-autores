const { Autor } = require("../models/autores.model");

module.exports.createAuthor = (req, res) => {
    Autor.create(req.body)
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err));
}

module.exports.getAllAuthors = (req, res) => {
    Autor.find({})
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err))
}

module.exports.getOneAuthor = (req, res) => {
    Autor.findOne({ _id: req.params.id })
        .then(autor => res.json(autor))
        .catch(err => res.status(400).json(err))
}

module.exports.updateAuthor = (req, res) => {
    Autor.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then(updatedAutor => res.json(updatedAutor))
        .catch(err => res.status(400).json(err))
}

module.exports.deleteAuthor = (req, res) => {
    Autor.deleteOne({ _id: req.params.id })
        .then(deleteConfirmation => res.json(deleteConfirmation))
        .catch(err => res.status(400).json(err))
}