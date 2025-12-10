const db = require("../models");
const Comment = db.Comment;


exports.create = (req, res) => {
    const articleId = req.params.article_id; 
    
    if (!req.body.text || !articleId) {
        return res.status(400).send({
            message: "Text and article_id cannot be empty"
        });
    }

    const comment = {
        text: req.body.text,
        article_id: articleId,
    }

    Comment.create(comment)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the comment."
        });
    });
};

exports.findAll = (req, res) => {
    const articleId = req.params.article_id;
    Comment.findAll({ 
        where: { article_id: articleId } 
    })
    .then(data => {
            res.send(data);
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving comments."
        });
    });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Comment.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Comment with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Comment with id=" + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Comment.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Comment was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Comment with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Comment with id=" + id
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Comment.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Comment was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Comment with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Comment with id=" + id
        });
    });
}