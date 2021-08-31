const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('kf_data_bank', {
    db_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    db_file: {
      type: DataTypes.STRING(255),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'kf_data_bank',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "db_id" },
        ]
      },
    ]
  });
};
