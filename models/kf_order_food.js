const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_order_food', {
    of_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    of_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "日期"
    },
    of_remarks: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "订餐备注"
    },
    of_num: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "人数"
    }
  }, {
    sequelize,
    tableName: 'kf_order_food',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "of_id" },
        ]
      },
    ]
  });
};
