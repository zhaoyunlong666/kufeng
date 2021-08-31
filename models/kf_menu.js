const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_menu', {
    m_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    m_name: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    m_state: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    },
    m_del: {
      type: DataTypes.INTEGER,
      allowNull: true,
      defaultValue: 1
    }
  }, {
    sequelize,
    tableName: 'kf_menu',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "m_id" },
        ]
      },
    ]
  });
};
