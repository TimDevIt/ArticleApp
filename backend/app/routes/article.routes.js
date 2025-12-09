module.exports = app => {
    const articles = require("../controllers/article.controller.js");
    var router = require("express").Router();

    router.post('/article', articles.create);
    
    router.get('/article/:id', articles.findOne);
    
    router.get('/articles', articles.findAll);

    router.patch('/article/:id', articles.update);

    router.delete('/article/:id', articles.delete);

    app.use('/', router);
}