module.exports = function (sequelize, DataTypes) {
    const Collection = sequelize.define("Collection", {
        // The email cannot be null, and must be a proper email before creation
        sneaker: DataTypes.int,
        userId: DataTypes.STRING,
        
    });
 Collection.associate = function (models) {
     // Associating Author with Posts
     // When an Author is deleted, also delete any associated Posts
     Collection.hasMany(models.Sneaker);
 };
  Collection.associate = function (models) {
      // Associating Author with Posts
      // When an Author is deleted, also delete any associated Posts
      Collection.belongsTo(models.User);
  };
    return Collection;
}