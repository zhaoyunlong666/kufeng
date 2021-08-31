const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_day', {
    day: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    code: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工作日:0 休息日:1"
    }
  }, {
    sequelize,
    tableName: 'kf_day',
    timestamps: false
  });
};
