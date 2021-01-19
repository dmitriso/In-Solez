module.exports = function(sequelize, DataTypes) {
  const Sneaker = sequelize.define("Sneaker", {
    // The email cannot be null, and must be a proper email before creation
    brand: DataTypes.STRING,
    shoe: DataTypes.STRING,
    name: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    saleable: DataTypes.BOOLEAN,
    tradeable: DataTypes.BOOLEAN,
    owned: DataTypes.BOOLEAN,
    topFive: DataTypes.BOOLEAN,
    media: DataTypes.STRING
  });
  // Sneaker.associate = models => {
  //   Sneaker.hasMany(models.User, { foreignKey: "id" });
  // };
  return Sneaker;
};
