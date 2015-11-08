export default function(sequelize, DataTypes) {
    return sequelize.define('todos', {
        body: DataTypes.STRING
    });
};
