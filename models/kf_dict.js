const { sequelize, DataTypes } = require("../config/db");
const kf_dict = sequelize.define("kf_dict", {
    id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dict_no: {
      type: DataTypes.STRING(10),
      allowNull: true
    },
    dict_name: {
      type: DataTypes.STRING(30),
      allowNull: true
    },
    dict_sort: {
      type: DataTypes.STRING(2),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kf_dict',
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
  module.exports = kf_dict;
