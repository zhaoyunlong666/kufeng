const { sequelize, DataTypes } = require("../config/db");
const kf_work_report = sequelize.define("kf_work_report", {
    wr_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    wr_content: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "工作内容"
    },
    wr_u_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "关联用户"
    },
    wr_allot: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "任务分配来源"
    },
    wr_ws_id: {
      type: DataTypes.STRING(11),
      allowNull: true,
      defaultValue: "1",
      comment: "完成状态1未办2在办3完成"
    },
    wr_date: {
      type: DataTypes.DATEONLY,
      allowNull: true,
      comment: "日报时间"
    },
    wr_create_date: {
      type: DataTypes.DATE,
      allowNull: true,
      comment: "创建时间"
    },
    wr_remark: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "备注"
    },
    wr_read_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1,
      comment: "阅读状态1未读2已读"
    }
  }, {
    sequelize,
    tableName: 'kf_work_report',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "wr_id" },
        ]
      },
    ]
  });
module.exports = kf_work_report;
