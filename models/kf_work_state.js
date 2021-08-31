const { sequelize, DataTypes } = require("../config/db");
const kf_work_state = sequelize.define("kf_work_state", {
    ws_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    ws_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "1未办2在办3完成"
    },
    ws_state: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    ws_del: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kf_work_state',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "ws_id" },
        ]
      },
    ]
  });
  module.exports = kf_work_state;
