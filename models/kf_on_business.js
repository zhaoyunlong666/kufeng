const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_on_business', {
    ob_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ob_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "出差人员"
    },
    ob_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "出差地址"
    },
    ob_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "出差时间"
    },
    ob_task: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "出差任务"
    }
  }, {
    sequelize,
    tableName: 'kf_on_business',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ob_id" },
        ]
      },
    ]
  });
};
