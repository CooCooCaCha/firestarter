module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.createTable('todos', { id: Sequelize.INTEGER, body: Sequelize.STRING });
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.dropTable('todos');
  }
};
