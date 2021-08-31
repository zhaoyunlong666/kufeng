// const { Sequelize, DataTypes } = require("sequelize");
// const sequelize = new Sequelize(require("./postgres").postgresURI);
// module.exports = { sequelize, DataTypes };

const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize(require("./mysql").mysqlURI);
module.exports = { sequelize, DataTypes };

