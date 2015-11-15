var Sequelize = require("sequelize");
var Umzug     = require("umzug");
var glob      = require("glob");
var config    = require("config").get("database");
var db        = {};

var sequelize = new Sequelize(
  config.name,
  config.username,
  config.password,
  {
    host: "firestarter_postgres_1", //process.env.POSTGRES_PORT_5432_TCP_ADDR,
    dialect: "postgres",
    pool: {
      maxConnections: 100,
      maxIdleTime: 1000
    }
  }
);

// initialize database connection
Sequelize.Promise.onPossiblyUnhandledRejection(error => {
  if(error.name === "SequelizeConnectionRefusedError") {
    sequelize.authenticate();
  }
});

var umzug = new Umzug({
  sequelize: sequelize,
  migrations: {
    params: [sequelize.getQueryInterface(), sequelize.constructor, () => {
      throw new Error("Migration tried to use old style \"done\" callback. Please upgrade to \"umzug\" and return a promise instead.");
    }],
    path: "./migrations",
    pattern: /\.js$/
  }
});

glob.sync("models/**.js")
  .filter(file => file !== "models/index.js")
  .map(file => {
    var model = sequelize.import(file.slice(7));
    db[model.name] = model; 
  });

Object.keys(db).forEach(modelName => {
  if("associate" in db[modelName]) {
    db[modelName].associate(db);
  }
});

umzug.up().then(migrations => {
  migrations.forEach(migration => console.info("MIGRATION: " + migration.file));
});

sequelize.sync();

export default db;
