
const { sequelize, DataTypes } = require("../config/db");
const kf_user = sequelize.define("kf_user", {
    u_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    u_name: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "名字"
    },
    u_sex: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "性别"
    },
    u_address: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "地址"
    },
    u_tel: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "电话"
    },
    u_openid: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "openid"
    },
    u_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "状态（是否赋权）"
    },
    u_dept: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "关联部门id"
    },
    u_role_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "职务关联id"
    },
    u_username: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "账户"
    },
    u_password: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "密码"
    },
    u_Job_description: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "职责描述"
    },
    u_group_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "权限组"
    }
  }, {
    sequelize,
    tableName: 'kf_user',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "u_id" },
        ]
      },
    ]
  });
  module.exports = kf_user;
