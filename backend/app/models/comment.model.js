module.exports = (sequelize, DataTypes) => {
  const Comment = sequelize.define("Comment", {
    text: {
      type: DataTypes.TEXT
    },
  }, 
  {
    tableName: 'comments',
    timestamps: true
  });

  return Comment;
};