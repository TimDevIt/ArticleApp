const db = require("../models");
const Op = db.Sequelize.Op;

const Article = db.Article;
const Comment = db.Comment;


exports.getCommentsByPeriod = (req, res) => {
    const {dateFrom, dateTo} = req.query;

    if (!dateFrom || !dateTo) {
        return res.status(400).send({
        message: "dateFrom and dateTo are required"
        });
    }

    Article.findAll({
        include: [{
            model: Comment,
            where: {
                createdAt: {
                    [Op.between] : [dateFrom, dateTo]
                }
            }
        }],
    
    })
    .then(data => {
        res.json(
            data.map(a => ({
                articleId: a.id,
                articleTitle: a.title,
                comments: a.Comments})
            )
        );
    })
    .catch(err => {
        res.status(500).send({
            message:
                err.message || "Some error occurred while retrieving comments."
        });
    });    
};