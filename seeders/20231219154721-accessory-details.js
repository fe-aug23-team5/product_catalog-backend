'use strict';
const accessories = require('../public/accessories.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert('accessory_details', accessories, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete('accessory_details', accessories, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  },
};

