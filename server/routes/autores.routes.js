const AutoresController= require('../controllers/autores.controller');

module.exports= app => {
    app.post('/api/author', AutoresController.createAuthor);
    app.get('/api/author', AutoresController.getAllAuthors);
    app.get('/api/author/:id', AutoresController.getOneAuthor);
    app.put('/api/author/:id', AutoresController.updateAuthor);
    app.delete('/api/author/:id', AutoresController.deleteAuthor);
};