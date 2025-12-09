const dbConfig = require("../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});


const Article = require('./article.model.js')(sequelize, Sequelize);
const Comment = require('./comment.model.js')(sequelize, Sequelize);

Comment.belongsTo(Article, { 
  foreignKey: 'article_id'   
});
 
Article.hasMany(Comment, { 
  foreignKey: 'article_id' 
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.Article = Article;      
db.Comment = Comment;      

 
module.exports = db;