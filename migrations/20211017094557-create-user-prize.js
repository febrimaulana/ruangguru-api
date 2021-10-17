"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("UserPrizes", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      email: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phone: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      phoneOther: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      address: {
        allowNull: false,
        type: Sequelize.TEXT,
      },
      noted: {
        allowNull: true,
        type: Sequelize.TEXT,
      },
      packageName: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      packageTag: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      packageSerial: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      prize: {
        allowNull: false,
        type: Sequelize.ENUM("Shoes", "Bag", "Pencils"),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("UserPrizes");
  },
};
