const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_phone_list', {
    pl_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    pl_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "通讯录名称"
    },
    pl_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "地址"
    },
    pl_phone: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "电话"
    },
    pl_division: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "部门"
    },
    pl_sos: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "紧急联系电话"
    }
  }, {
    sequelize,
    tableName: 'kf_phone_list',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "pl_id" },
        ]
      },
    ]
  });
};
