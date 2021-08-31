const { sequelize, DataTypes } = require("../config/db");
const kf_duty_report = sequelize.define("kf_duty_report", {
    dr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    dr_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "值班日期"
    },
    dr_create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    dr_u_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "值班人员"
    },
    dr_remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "值班描述"
    },
    dr_change_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "申请换班时间"
    },
    dr_change_uid: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 0,
      comment: "申请换班人id"
    }
  }, {
    sequelize,
    tableName: 'kf_duty_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "dr_id" },
        ]
      },
    ]
  });
  module.exports = kf_duty_report;