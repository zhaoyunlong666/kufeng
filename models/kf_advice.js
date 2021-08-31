const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_advice', {
    a_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    a_text: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "通知内容"
    },
    a_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "通知时间"
    },
    a_u_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "通知发布者"
    },
    a_type: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "通知类型"
    }
  }, {
    sequelize,
    tableName: 'kf_advice',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "a_id" },
        ]
      },
    ]
  });
};
