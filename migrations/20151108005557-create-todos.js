module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable("Todos", { id: Sequelize.INTEGER, body: Sequelize.STRING });
  },

  down: function (queryInterface) {
    return queryInterface.dropTable("Todos");
  }
};
