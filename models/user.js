'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    userName: DataTypes.STRING,
    password: DataTypes.STRING,
    birthday: DataTypes.DATE,
    isAlcohol: DataTypes.STRING,
    drinkBody: DataTypes.STRING,
    afterTaste: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.belongsToMany(models.Alcohol, {through: models.UserAlcohol})
  };
  return User;
};