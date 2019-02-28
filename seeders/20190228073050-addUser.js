'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
   return queryInterface.bulkInsert('Users', [{
    firstName: 'Rudy',
    lastName: 'Kurniawan',
    email: "rudy@gmail.com",
    userName: "rudy",
    password: "1234",
    birthday: new Date ("1990-03-25T12:00:00Z"),
    isAlcohol: "yes",
    drinkBody: "Medium",
    afterTaste: "Medium",
    createdAt: new Date (),
    updatedAt: new Date()
  }, {
    firstName: 'William',
    lastName: 'Suryawan',
    email: "william@gmail.com",
    userName: "william",
    password: "6789",
    birthday: new Date ("2000-03-25T12:00:00Z"),
    isAlcohol: "no",
    drinkBody: "Light",
    afterTaste: "Light",
    createdAt: new Date(),
    updatedAt: new Date()
  }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
   return queryInterface.bulkDelete('Users', null, {});
  }
};
