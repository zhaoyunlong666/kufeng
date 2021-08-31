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

const Cookies = require("js-cookie");
const bumen = require("../../model/bumen");

router.get("/test", (req, res) => {
  res.json({ msg: "is works" });
});

//@desc 部门列表
//@access public
router.get('/list', async (req, res, next) => {

    let { pagenum, pagesize,name } = req.query
    let start = (pagenum - 1) * pagesize
    let criteria = {}
    let total = 0
    let list = null
  
    let Sequelize = require('sequelize')
    let Op = Sequelize.Op
  
    //if (nickname) {
    // criteria['nickname'] = nickname;
    if (name) {
      // 这里用的就是纯粹的=符号，代表精确查找，下面例举了like符号，更多符号自己探索
      criteria['name'] = { [Op.like]: `%${name}%` };
    }
    // } else if (nickname) {
    //   // 这里后面赋值的是like操作符，代表模糊查询，后面account用``反引号字符串替换模板将account代入进去
    //   criteria['nickname'] = { $like: `%${nickname}%` };
    // }
  
    await bumen.findAndCountAll({
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

//@desc 某一个部门
//@access public
router.post("/one", (req, res) => {
  bumen.findOne({ where: { name: req.body.name } }).then((result) => {
    if (result) {
      res.send({ code: 200, status: 0, data: result });
    } else {
      return res.status(400).json(`不存在`);
    }
  });
});

//@desc 增加部门
//@access public
router.post("/add", (req, res) => {
  res.send("bumen");
});

//@desc 修改部门
//@access public
router.post("/update", (req, res) => {
  bumen.findOne({ where: { id: req.body.id } }).then((result) => {
    if (result) {
      res.send({ code: 200, msg: "修改成功", status: 0 });
    } else {
      return res.status(400).json(`不存在`);
    }
  });
});

//@desc 删除部门
//@access public
router.post("/del:id", (req, res) => {
  bumen.destroy({ where: { id: req.body.id } }).then((result) => {
    if (result) {
      res.send({ code: 200, msg: "删除成功", status: 0 });
    } else {
      return res.status(400).json(`不存在`);
    }
  });
});

module.exports = router;
