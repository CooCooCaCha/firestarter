var Sequelize = require('sequelize');
var glob      = require('glob');
var path      = require('path');
var config    = require('config').get('development');
var db        = {};

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

glob.sync('models/**.js')
  .filter(file => file !== 'models/index.js')
  .map(file => {
    var model = sequelize.import(file.slice(7));
    db[model.name] = model; 
  });

Object.keys(db).forEach(modelName => {
  if("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

sequelize.sync();

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;
