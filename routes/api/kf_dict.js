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
const kf_dict = require("../../models/kf_dict");


router.get("/test", (req, res) => {
  res.json({ msg: "login works" });
});

//$router POST api/users/register  需要安装模块body-parser
//@desc 账号注册
//@access public
router.post("/register", (req, res) => {
  //查询用户是否存在
  kf_dict.findOne({where:{ users: req.body.users }}).then(result=> {
    if (result) {
      return res.status(400).json(`账户已被注册`);
    } else {
      // return res.status(200).json(`可以注册账户`);

      let md5 = crypto.createHash("md5");
      let password = md5.update(req.body.password).digest("hex"); //对接收的参数进行加密
      const newusers = user.build({
        users: req.body.users,
        password: password,
        name: req.body.name,
        phone: req.body.phone,
        userstype_id: 1,
        status: 1,
        jifen: 0,
        address: req.body.address,
        openid: "",
        reg_time: chinaTime("YYYY-MM-DD HH:mm:ss"),
        //365天后的时间
        //end_time: moment().add(1, "y").format("YYYY-MM-DD HH:mm:ss"),
      });

      newusers
        .save()
        .then((users) => res.json(users))
        .catch((err) => console.log(err));
    }
  })

})

//$router POST api/users/login  需要安装模块body-parser
//@desc 账号登录
//@access public
// router.post('/login',(req,res)=>{
//       let md5 = crypto.createHash("md5");
//       let password = md5.update(req.body.password).digest("hex")
//       users.findOne({where:{users:req.body.users,password:password}}).then(res=>{
//     if(res)
//     {
//       return res.status(200).json(`ok`)
//     } else {
//       return res.status(400).json(`检查您的账号密码是否正确`)
//     }
//   })
// })



//$router POST api/users/login  需要安装模块body-parser
//@desc 增加账号
//@access publi
router.post('/addusers',(req,res)=>{
    kf_dict.findOne({whrer:{users:req.body.users}}.then(res=>{
  if(res){

  } else {
    return res.status(400).json(`账号已存在`)
  }
}))
})

//$router POST api/users/login  需要安装模块body-parser
//@desc 删除账号
//@access publi
router.post('/delusers:id',(req,res)=>{
    kf_dict.destroy({where:{id:req.body.id}}).then(result =>{
    if (result){

    } else {
      return res.status(400).json(`您的账号可能不存在哦，检查您的输入`);
    }
})
})


//$router POST api/users/login  需要安装模块body-parser
//@desc 账号列表
//@access publi
// router.post('/listusers',(req,res)=>{
//   user.findAll({}).then(users=>{
//     if(users)
//     {

//     } else {
//       return res.status(400).json(`暂时没有数据`)
//     }
//   })
// })

//$router POST api/users/login  需要安装模块body-parser
//@desc修改用户
//@access publi
router.post('/updateusers:id',(req,res)=>{
    kf_dict.findOne({where:{id:req.body.id}}).then(users=>{
    if(res){

    } else {
      return res.status(400).json(`账号修改失败`)
    }
  })
})

var tokens = {
  admin: {
    token: 'admin-token'
  },
  editor: {
    token: 'editor-token'
  }
}

var users = {
  'admin-token': {
    roles: ['admin'],
    introduction: 'I am a super administrator',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Super Admin'
  },
  'editor-token': {
    roles: ['editor'],
    introduction: 'I am an editor',
    avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
    name: 'Normal Editor'
  }
}



//$router POST api/users/info 
//@desc 用户身份
//@access public
router.get('/info', (req, res, next) => {
  //let token=req.params.token
  // console.log(token)
  // console.log(users[token])
  //const token=token
  //const info = users[token]
  //{"code":20000,"data":{"roles":["admin"],"introduction":"I am a super administrator","avatar":"https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif","name":"Super Admin"}}
  //res.send({code: 200,data: users[token]})
  res.send({ "code": 200, "data": { "roles": ["admin"], "introduction": "I am a super administrator", "avatar": "https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif", "name": "Super Admin" } })
})

//$router POST api/users/logout  需要安装模块body-parser
//@desc 退出登陆
//@access public
router.post('/logout', (req, res) => {
  res.send('out')
})

//$router POST api/users/list 
//@desc  用户列表
//@access public
router.get('/list', async (req, res, next) => {
console.log('进入')
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

  await kf_dict.findAndCountAll({
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


//$router POST api/users/info 
//@desc 用户编辑信息
//@access public
// router.passport('/editusers', async (req, res, next) => {

//   res.send();
// })
router.post("/edit:id", (req, res) => {
    kf_dict.findOne({where:{id}}).then(kf_dict => {
    if(kf_dict){
      res.send({ code: 200, msg: '修改成功', data: tokens.admin })
    }else{
      res.send({ code: 400, msg: '修改出错了' })
    }
  })
})


//$router POST api/users/deluser 
//@desc 删除用户
//@access 
router.post("/del:id", (req, res) => {

})

module.exports = router;
