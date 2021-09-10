'use strict';
const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkInsert('users', [
      {
        name: "andika", 
        profession: "Admin",
        role: "admin",
        email: "andika@gmail.com",
        password: await bcrypt.hash('andika123', 10),
        created_at: new Date(),
        updated_at: new Date()
      },
      {
        name: "dika", 
        profession: "Frontend Developer",
        role: "student",
        email: "dika@gmail.com",
        password: await bcrypt.hash('dika123', 10),
        created_at: new Date(),
        updated_at: new Date()
      }
    ]);
    
  },

  down: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkDelete('users', null, {});
   
  }
};
