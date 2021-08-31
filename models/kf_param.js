const { sequelize, DataTypes } = require("../config/db");
const kf_param = sequelize.define("kf_param", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dict_no: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    param_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    param_icon: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "参数图标"
    }
  }, {
    sequelize,
    tableName: 'kf_param',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  module.exports = kf_param;
