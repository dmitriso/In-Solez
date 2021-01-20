module.exports = function(sequelize, DataTypes) {
  const Collection = sequelize.define("Collection", {
    // The email cannot be null, and must be a proper email before creation
    sneaker: DataTypes.INTEGER,
    owned: DataTypes.BOOLEAN,
    topFive: DataTypes.BOOLEAN,
    userIdCollection: DataTypes.INTEGER
  });
  // Collection.associate = models => {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Collection.hasMany(models.Sneaker, { foreignKey: "id" });
  // };
  // Collection.associate = models => {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Collection.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //       value: "id"
  //     }
  //   });
  // };
  return Collection;
};
