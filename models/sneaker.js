module.exports = function (sequelize, DataTypes) {
    const Sneaker = sequelize.define("Sneaker", {
        // The email cannot be null, and must be a proper email before creation
        brand: DataTypes.STRING,
        name: DataTypes.STRING,
        userName: DataTypes.STRING,
        userPrice: DataTypes.INT,
        retailPrice: DataTypes.INT,
        marketValue: DataTypes.INT,
        releaseDate: DataTypes.INT,
        saleable: DataTypes.BOOLEAN,
        tradeable: DataTypes.BOOLEAN,
        topFive: DataTypes.BOOLEAN
    });
 Sneaker.associate = function (models) {
     // Associating Author with Posts
     // When an Author is deleted, also delete any associated Posts
     Sneaker.hasMany(models.User);
 };
    return Sneaker;
}