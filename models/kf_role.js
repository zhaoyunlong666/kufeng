const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_role', {
    r_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    r_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "角色权限表"
    },
    r_menu_id: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "菜单列表"
    },
    r_del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "删除标记"
    }
  }, {
    sequelize,
    tableName: 'kf_role',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "r_id" },
        ]
      },
    ]
  });
};
