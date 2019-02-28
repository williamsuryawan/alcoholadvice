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
   return queryInterface.bulkInsert('Alcohol', [{
    alcoholName: 'Bintang',
    body: 'Light',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    alcoholName: 'Heineken',
    body: 'Light',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    alcoholName: 'Stark',
    body: 'Light',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'San Miguel',
    body: 'Medium',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Corona',
    body: 'Medium',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Budsweiser',
    body: 'Medium',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Guiness',
    body: 'High',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'El Diablo',
    body: 'High',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Stout',
    body: 'High',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  }, {
    alcoholName: 'Bintang Radler',
    body: 'Light',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Carslberg',
    body: 'Medium',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Erdinger',
    body: 'High',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Heineken Light',
    body: 'Light',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Bali Hai',
    body: 'Light',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Anker',
    body: 'High',
    taste: 'Medium',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Singha',
    body: 'Medium',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Paulaner',
    body: 'Medium',
    taste: 'High',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Duvel',
    body: 'High',
    taste: 'Light',
    CategoryId: 1,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Chivas Regal',
    body: 'Light',
    taste: 'Light',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Chivas Regal Extra',
    body: 'Light',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Jack Daniels',
    body: 'Light',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'JohnnieWalker Black Label',
    body: 'Medium',
    taste: 'Light',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'JohnnieWalker Blue Label',
    body: 'Medium',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'JohnnieWalker Gold Label',
    body: 'Medium',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Jim Bean',
    body: 'Light',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Glenfiddich 12YO',
    body: 'Medium',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Glenfiddich 18YO',
    body: 'High',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Macallan 12YO',
    body: 'Medium',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Macallan 15YO',
    body: 'High',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Highland 12YO',
    body: 'High',
    taste: 'Light',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Glenlivet 15YO',
    body: 'High',
    taste: 'Light',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Glenlivet 18YO',
    body: 'High',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Yamazaki 12YO',
    body: 'Medium',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Hibiki 12YO',
    body: 'High',
    taste: 'Medium',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Hibiki 17YO',
    body: 'High',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Chita Suntory 12YO',
    body: 'Medium',
    taste: 'Light',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Nikka Whiskey 12YO',
    body: 'Light',
    taste: 'High',
    CategoryId: 2,
    createdAt: new Date(),
    updatedAt: new Date()
  },{
    alcoholName: 'Gilbeys Whiskey',
    body: 'Light',
    taste: 'Light',
    CategoryId: 2,
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
   return queryInterface.bulkDelete('Alcohol', null, {});
  }
};
