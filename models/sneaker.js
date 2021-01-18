module.exports = function(sequelize, DataTypes) {
  const Sneaker = sequelize.define("Sneaker", {
    // The email cannot be null, and must be a proper email before creation
    brand: DataTypes.STRING,
    name: DataTypes.STRING,
    userName: DataTypes.STRING,
    userPrice: DataTypes.INTEGER,
    retailPrice: DataTypes.INTEGER,
    marketValue: DataTypes.INTEGER,
    releaseDate: DataTypes.INTEGER,
    saleable: DataTypes.BOOLEAN,
    tradeable: DataTypes.BOOLEAN,
    owned: DataTypes.BOOLEAN,
    topFive: DataTypes.BOOLEAN
  });
  Sneaker.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Sneaker.hasMany(models.User);
  };
  return Sneaker;
};
