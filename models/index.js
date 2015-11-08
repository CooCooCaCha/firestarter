var Sequelize = require('sequelize');
var config    = require('config').get('development');  // we use node-config to handle environments

// initialize database connection
var sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  {
    host: config.host,
    dialect: config.dialect
  }
);

// list models
var models = [
  'Todo'
];

// load models
models.forEach(function(model) {
  module.exports[model] = sequelize.import(__dirname + '/' + model.toLowerCase());
});

// describe relationships
(function(m) {
})(module.exports);

sequelize.sync();

// export connection
module.exports.sequelize = sequelize;
