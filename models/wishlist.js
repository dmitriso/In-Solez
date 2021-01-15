module.exports = function (sequelize, DataTypes) {
        const Wishlist = sequelize.define("Wishlist", {
            // The email cannot be null, and must be a proper email before creation
            sneaker: DataTypes.int,
            userId: DataTypes.STRING,

        });
        Wishlist.associate = function (models) {
            // Associating Author with Posts
            // When an Author is deleted, also delete any associated Posts
            Wishlist.hasMany(models.Sneaker);
        };
        Wishlist.associate = function (models) {
            // Associating Author with Posts
            // When an Author is deleted, also delete any associated Posts
            Wishlist.belongsTo(models.User);
        };
        return Wishlist;
    }