module.exports = app => {
    const comments = require("../controllers/comment.controller.js");
    var router = require("express").Router({ mergeParams: true });

    router.post('/comment', comments.create);
    
    router.get('/comment/:id', comments.findOne);
    
    router.get('/comments', comments.findAll);

    router.patch('/comment/:id', comments.update);

    router.delete('/comment/:id', comments.delete);

    app.use('/article/:article_id', router);
}