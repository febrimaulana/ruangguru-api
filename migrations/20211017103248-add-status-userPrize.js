"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.addColumn("UserPrizes", "status", {
      allowNull: false,
      type: Sequelize.ENUM("created", "delivery", "rejected"),
      after: "prize",
    });
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.removeColumn("UserPrizes", "status");
  },
};
