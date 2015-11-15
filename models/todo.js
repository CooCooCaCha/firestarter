export default function(sequelize, DataTypes) {
  return sequelize.define("Todo", {
    body: DataTypes.STRING
  });
}
