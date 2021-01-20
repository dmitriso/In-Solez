module.exports = function(sequelize, DataTypes) {
  const Wishlist = sequelize.define("Wishlist", {
    // The email cannot be null, and must be a proper email before creation
    sneaker: DataTypes.INTEGER,
    owned: DataTypes.BOOLEAN,
    userIdWishlist: DataTypes.STRING
  });
  // Wishlist.associate = models => {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Wishlist.hasMany(models.Sneaker, { foreignKey: id });
  // };
  // Wishlist.associate = models => {
  //   // Associating Author with Posts
  //   // When an Author is deleted, also delete any associated Posts
  //   Wishlist.belongsTo(models.User, {
  //     foreignKey: {
  //       allowNull: false,
  //       value: "id"
  //     }
  //   });
  // };
  return Wishlist;
};
