// @login & register
const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const passport = require("passport");

const crypto = require("crypto");
const chinaTime = require("china-time");
var moment = require("moment");
moment.locale("zh-cn");

const Cookies = require('js-cookie');

const kf_work_state = require("../../models/kf_work_state");


router.get("/test", (req, res) => {
  res.json({ msg: "login works" });
});



//$router POST api/work_state/list 
//@desc  值班列表
//@access public
router.get('/list', async (req, res, next) => {

    let { pagenum, pagesize, phone } = req.query
    let start = (pagenum - 1) * pagesize
    let criteria = {}
    let total = 0
    let list = null
  
    let Sequelize = require('sequelize')
    let Op = Sequelize.Op
  
    //if (nickname) {
    // criteria['nickname'] = nickname;
    if (phone) {
      // 这里用的就是纯粹的=符号，代表精确查找，下面例举了like符号，更多符号自己探索
      criteria['phone'] = { [Op.like]: `%${phone}%` };
    }
    // } else if (nickname) {
    //   // 这里后面赋值的是like操作符，代表模糊查询，后面account用``反引号字符串替换模板将account代入进去
    //   criteria['nickname'] = { $like: `%${nickname}%` };
    // }
  
    await kf_work_state.findAndCountAll({
      where: criteria, // 将前面构造的对象传入
      offset: start,
      limit: Number(pagesize)
    }).then( // 由于前端使用了element-ui，传过来的pageSize是string型，要转一下
      result => {
        total = result.count
        list = result.rows
        res.json({ 'status': 200, total, list });
      })
  })


  module.exports = router;
