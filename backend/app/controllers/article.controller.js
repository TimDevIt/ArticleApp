const db = require("../models");
const Article = db.Article;


exports.create = (req, res) => {
    if (!req.body.title || !req.body.text) {
        return res.status(400).send({
            message: "Title and text cannot be empty"
        });
    }

    const article = {
        title: req.body.title,
        text: req.body.text,
    }

    Article.create(article)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
            message:
                err.message || "Some error occurred while creating the article."
        });
    });
};

exports.findAll = (req, res) => {
    Article.findAll()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while retrieving articles."
            });
        });
};

exports.findOne = (req, res) => {
    const id = req.params.id;
    Article.findByPk(id)
        .then(data => {
            if (data) {
                res.send(data);
            } else {
                res.status(404).send({
                    message: `Cannot find Article with id=${id}.`
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Error retrieving Article with id=" + id
            });
        });
}

exports.update = (req, res) => {
    const id = req.params.id;

    Article.update(req.body, {
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Article was updated successfully."
            });
        } else {
            res.send({
                message: `Cannot update Article with id=${id}. Maybe Tutorial was not found or req.body is empty!`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Error updating Article with id=" + id
        });
    });
}

exports.delete = (req, res) => {
    const id = req.params.id;

    Article.destroy({
        where: { id: id }
    })
    .then(num => {
        if (num == 1) {
            res.send({
                message: "Article was deleted successfully!"
            });
        } else {
            res.send({
                message: `Cannot delete Article with id=${id}.`
            });
        }
    })
    .catch(err => {
        res.status(500).send({
            message: "Could not delete Article with id=" + id
        });
    });
}