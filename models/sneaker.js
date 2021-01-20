module.exports = function(sequelize, DataTypes) {
  const Sneaker = sequelize.define("Sneaker", {
    // SETTING UP ALL TABLE COLUMNS
    brand: DataTypes.STRING,
    shoe: DataTypes.STRING,
    name: DataTypes.STRING,
    retailPrice: DataTypes.INTEGER,
    releaseDate: DataTypes.STRING,
    saleable: DataTypes.BOOLEAN,
    tradeable: DataTypes.BOOLEAN,
    owned: DataTypes.BOOLEAN,
    topFive: DataTypes.BOOLEAN,
    media: DataTypes.STRING,
    sneakeruserID: DataTypes.INTEGER
  });
  // ASSOCIATING SNEAKERS TO TABLE AND ASSIGNING A USER TO THE SNEAKER
  Sneaker.associate = models => {
    Sneaker.belongsTo(models.User, { foreignKey: { allowNull: false } });
  };
  return Sneaker;
};
