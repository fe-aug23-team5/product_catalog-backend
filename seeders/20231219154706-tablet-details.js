'use strict';
const tablets = require('../public/tablets.json');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkInsert('tablet_details', tablets, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  },
  async down(queryInterface, Sequelize) {
    const transaction = await queryInterface.sequelize.transaction();

    try {
      await queryInterface.bulkDelete('tablet_details', tablets, { transaction });

      await transaction.commit();
    } catch (err) {
      console.log(err);

      await transaction.rollback();
    }
  },
};

