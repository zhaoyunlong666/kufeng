const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_sanitation', {
    s_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      comment: "卫生区分配id"
    },
    s_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "负责人"
    },
    s_part: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "负责部分"
    }
  }, {
    sequelize,
    tableName: 'kf_sanitation',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "s_id" },
        ]
      },
    ]
  });
};
