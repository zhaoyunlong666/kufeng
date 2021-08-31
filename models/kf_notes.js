const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_notes', {
    n_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    n_text: {
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "备忘录内容"
    },
    n_wxuser_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      comment: "备忘录编写者"
    },
    n_del: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kf_notes',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "n_id" },
        ]
      },
    ]
  });
};
