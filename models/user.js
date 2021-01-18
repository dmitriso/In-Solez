// Requiring bcrypt for password hashing. Using the bcryptjs version as the regular bcrypt module sometimes causes errors on Windows machines
const bcrypt = require("bcryptjs");
const { STRING } = require("sequelize/types");
// Creating our User model
module.exports = function(sequelize, DataTypes) {
  const User = sequelize.define("User", {
    // The email cannot be null, and must be a proper email before creation
    firstName: { DataTypes: STRING, isAlphanumeric: true, allowNull: true },
    lastName: { DataTypes: STRING, allowNull: true },
    userName: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      Validate: {
        len: {
          args: [3, 20],
          msg: "The user length should be between 6 and 20 characters."
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true
      }
    },
    // The password cannot be null
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [6, 20],
          msg: "The password length should be between 6 and 20 characters."
        }
      }
    }
  });
  // Creating a custom method for our User model. This will check if an unhashed password entered by the user can be compared to the hashed password stored in our database
  User.prototype.validPassword = function(password) {
    return bcrypt.compareSync(password, this.password);
  };
  // Hooks are automatic methods that run during various phases of the User Model lifecycle
  // In this case, before a User is created, we will automatically hash their password
  User.addHook("beforeCreate", user => {
    user.password = bcrypt.hashSync(
      user.password,
      bcrypt.genSaltSync(10),
      null
    );
  });

  User.associate = models => {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    User.hasMany(models.Sneaker, { foreignKey: "id" });
  };
  User.associate = models => {
    User.hasOne(models.Collection, { foreignKey: "id" });
  };
  User.associate = models => {
    User.hasOne(models.Wishlist, { foreignKey: "id" });
  };
  return User;
};
