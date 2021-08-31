var DataTypes = require("sequelize").DataTypes;
var _kf_advice = require("./kf_advice");
var _kf_data_bank = require("./kf_data_bank");
var _kf_day = require("./kf_day");
var _kf_dict = require("./kf_dict");
var _kf_duty_report = require("./kf_duty_report");
var _kf_group = require("./kf_group");
var _kf_menu = require("./kf_menu");
var _kf_notes = require("./kf_notes");
var _kf_on_business = require("./kf_on_business");
var _kf_order_food = require("./kf_order_food");
var _kf_param = require("./kf_param");
var _kf_phone_list = require("./kf_phone_list");
var _kf_role = require("./kf_role");
var _kf_sanitation = require("./kf_sanitation");
var _kf_user = require("./kf_user");
var _kf_work_report = require("./kf_work_report");
var _kf_work_state = require("./kf_work_state");

function initModels(sequelize) {
  var kf_advice = _kf_advice(sequelize, DataTypes);
  var kf_data_bank = _kf_data_bank(sequelize, DataTypes);
  var kf_day = _kf_day(sequelize, DataTypes);
  var kf_dict = _kf_dict(sequelize, DataTypes);
  var kf_duty_report = _kf_duty_report(sequelize, DataTypes);
  var kf_group = _kf_group(sequelize, DataTypes);
  var kf_menu = _kf_menu(sequelize, DataTypes);
  var kf_notes = _kf_notes(sequelize, DataTypes);
  var kf_on_business = _kf_on_business(sequelize, DataTypes);
  var kf_order_food = _kf_order_food(sequelize, DataTypes);
  var kf_param = _kf_param(sequelize, DataTypes);
  var kf_phone_list = _kf_phone_list(sequelize, DataTypes);
  var kf_role = _kf_role(sequelize, DataTypes);
  var kf_sanitation = _kf_sanitation(sequelize, DataTypes);
  var kf_user = _kf_user(sequelize, DataTypes);
  var kf_work_report = _kf_work_report(sequelize, DataTypes);
  var kf_work_state = _kf_work_state(sequelize, DataTypes);


  return {
    kf_advice,
    kf_data_bank,
    kf_day,
    kf_dict,
    kf_duty_report,
    kf_group,
    kf_menu,
    kf_notes,
    kf_on_business,
    kf_order_food,
    kf_param,
    kf_phone_list,
    kf_role,
    kf_sanitation,
    kf_user,
    kf_work_report,
    kf_work_state,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
