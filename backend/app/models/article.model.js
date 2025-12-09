module.exports = (sequelize, DataTypes) => {
  const Article = sequelize.define("Article", {
    title: {
      type: DataTypes.STRING
    },
    text: {
      type: DataTypes.TEXT
    },
  }, 
  {
    tableName: 'articles',
    timestamps: true
  });

  return Article;
};