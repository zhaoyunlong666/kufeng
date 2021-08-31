// 服务器
"use script";
// const history = require('connect-history-api-fallback');

const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path =require("path")
// const pgprotocol = require("pg-protocol");

const app = express();


//设置跨域访问
app.all("*",function(req,res,next){
  //设置允许跨域的域名，*代表允许任意域名跨域
  res.header("Access-Control-Allow-Origin","*");
  //允许的header类型
  res.header("Access-Control-Allow-Headers","content-type");
  //跨域允许的请求方式 
  res.header("Access-Control-Allow-Methods","DELETE,PUT,POST,GET,OPTIONS");
  if (req.method.toLowerCase() == 'options')
      res.send(200);  //让options尝试请求快速结束
  else
      next();
})


//配置中间件history模式
// app.use(history({
//   //这部分自定义配置是根据项目需要，请根据各自项目需要配置
//     rewrites: [
//       {
//         from: /^\/home\/*$/,
//         to: function(context) {
//           return context.parsedUrl.pathname;
//         }
//       },
//       {
//         from: /^\/view\/*$/,
//         to: function(context) {
//           return context.parsedUrl.pathname;
//         }
//       }
//     ]
//   }));
//注意要配置在静态文件目录之前，如下是配置静态文件目录
// app.use(express.static(path.join(__dirname/client, 'dist')));

const passport = require("passport");
const logger = require("morgan");
//app.use(logger("dev"));

var request = require('request');
var xmlreader = require("xmlreader");
var fs = require("fs");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ //解析post请求数据
  extended:false
}))
// app.use(express.static('public'))
// app.get('/',(req,res)=>{
//   res.sendFile(path.json(__dirname,'views','index.html'))
// })

//var wxpay = require('./config/wxutil');
//var user = require('./models/user');

// var appid     = 'wxfeb9376fceb54154';　　
// var appsecret = 'ea6b3bb6e92218435dc048da7ece262f';
// var mchid     = '1564504241'
// var mchkey    = '25agoxpnpbmo2uco0rm2cumhurtnksie';
// var wxurl     = 'http://bdc.zgjaijx.com/pay/notify_url/';
// var redirect_url = 'http://bdc.zgjaijx.com/user_login';
// var scope = 'snsapi_userinfo';

// app.get('/userinfo', function (req, res, next) {
//   // 第二步：通过code换取网页授权access_token和用户openid
//   var code = req.query.code; 
//   request.get({
//     url: 'https://api.weixin.qq.com/sns/oauth2/access_token?appid='+appid+'&secret='+appsecret+'&code='+code+'&grant_type=authorization_code',
//   }, function (error, response, body) {
//     console.log('2---'+response.statusCode)
//     if (response.statusCode == 200) {
//       var data = JSON.parse(body);
//       var access_token = data.access_token;
//       var openid = data.openid;
      
//       console.log(data)
//       console.log(access_token)
//       console.log(openid)
//       // 第三步：用access_token和openid获取用户信息
//       request.get({  
//         url: 'https://api.weixin.qq.com/sns/userinfo?access_token='+access_token+'&openid='+openid+'&lang=zh_CN',
//       }, function (error, response, body) {
//         console.log('3---'+response.statusCode)
//         if (response.statusCode == 200) {
          
//           // 第四步：根据获取的用户信息进行对应操作
//           var userinfo = JSON.parse(body); 
//           console.log('获取微信信息成功！');
//           res.send({
//             name: userinfo.nickname, // 用户微信昵称
//             result: true
//           });
//         } else {
//           console.log('获取微信信息失败！', response.statusCode);
//           res.send({
//             name: '',
//             result: false
//           })
//         }
//       });
//     } else {
//       console.log('获取微信信息失败！', response.statusCode);
//       res.send({
//         name: '',
//         result: false
//       })
//     }
//   })
// });


// var oauth = require('./routes/api/oauth');
// app.use('/api/userinfo',oauth)

// app.get('/pay',(req,res)=>{
    
//   //首先拿到前端传过来的参数
//   let orderCode = 20150806125346;
//   let money     = 100;
//   let orderID   = 1;

//   // console.log('APP传过来的参数是',orderCode+'----'+money+'------'+orderID+'----'+appid+'-----'+appsecret+'-----'+mchid+'-----'+mchkey);

//   //首先生成签名sign
//   appid
//   let mch_id = mchid;
//   let nonce_str = wxpay.createNonceStr();
//   let timestamp = wxpay.createTimeStamp();
//   let body = '测试微信支付';
//   let out_trade_no = orderCode;
//   let total_fee = wxpay.getmoney(money);
//   let spbill_create_ip = req.connection.remoteAddress;
//   let notify_url = wxurl;
//   let trade_type = 'JSAPI';

//   let sign = wxpay.paysignjsapi(appid,body,mch_id,nonce_str,notify_url,out_trade_no,spbill_create_ip,total_fee,trade_type,mchkey);

//   console.log('sign==',sign);

//   //组装xml数据
//   var formData  = "<xml>";
//   formData  += "<appid>"+appid+"</appid>";  //appid
//   formData  += "<body><![CDATA["+"测试微信支付"+"]]></body>";
//   formData  += "<mch_id>"+mch_id+"</mch_id>";  //商户号
//   formData  += "<nonce_str>"+nonce_str+"</nonce_str>"; //随机字符串，不长于32位。
//   formData  += "<notify_url>"+notify_url+"</notify_url>";
//   formData  += "<out_trade_no>"+out_trade_no+"</out_trade_no>";
//   formData  += "<spbill_create_ip>"+spbill_create_ip+"</spbill_create_ip>";
//   formData  += "<total_fee>"+total_fee+"</total_fee>";
//   formData  += "<trade_type>"+trade_type+"</trade_type>";
//   formData  += "<sign>"+sign+"</sign>";
//   formData  += "</xml>";

//   // console.log('formData===',formData);

//   var url = 'https://api.mch.weixin.qq.com/pay/unifiedorder';

//   request({url:url,method:'POST',body: formData},function(err,response,body){
//       if(!err && response.statusCode == 200){
//           // console.log(body);

//           xmlreader.read(body.toString("utf-8"), function (errors, response) {
//               if (null !== errors) {
//                   // console.log(errors)
//                   return;
//               }
//               // console.log('长度===', response.xml.prepay_id.text().length);
//               var prepay_id = response.xml.return_code.text();
//               // console.log('解析后的prepay_id==',response.xml.return_code.text());


//               //将预支付订单和其他信息一起签名后返回给前端
//               let finalsign = wxpay.paysignjsapifinal(appid,mch_id,prepay_id,nonce_str,timestamp,mchkey);

//               res.json({'appId':appid,'partnerId':mchid,'prepayId':prepay_id,'nonceStr':nonce_str,'timeStamp':timestamp,'package':'Sign=WXPay','sign':finalsign});

//           });


//       }
//   });

// })


// const sequelize = require("sequelize");
//数据库连接对象
//const {sequelize,DataType} =require('./config/postgres')
// const { Sequelize, DataTypes } = require("sequelize");
//const keys = require("./config/keys");
//const sequelize = new Sequelize(keys.postgresURI);
//const db = require("./config/keys").postgresURI;

//使用body-parser中间件
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


const { sequelize } = require("./config/db");
// const { sequelize, Sequelize } = require("./config/postgres");
// const fs = require("fs");
// const path = require("path");
// const User = require("./models/User");
// fs.readdirSync("./models").forEach((file) => {
//   //const model = sequelize.import(path.join('./models', file));
//   const model = require(path.join(__dirname, "models/", file))(
//     sequelize,
//     Sequelize
//   );
//   sequelize[model.name] = model;
//   console.log(sequelize[model.name]);
// });

// const { UserType } = require("./model/UserType");
// const { Withdrawal } = require("./model/Withdrawal");
// const { Word } = require("./model/Word");
// const { City } = require("./model/City");
// const { Finance } = require("./model/Finance");
// const { LearnLog } = require("./model/LearnLog");
// const { LearnSetting } = require("./model/LearnSetting");
// const { Order } = require("./model/Order");
// const { ShareLink } = require("./model/ShareLink");
// const { Signin } = require("./model/Signin");
// const { Subscribe } = require("./model/Subscribe");
// const { Test } = require("./model/Test");
// const { Type } = require("./model/Type");

//加载后端API接口
// const Users = require("./routes/api/users");
// app.use("/api/users", Users);

// //导入model
// const User = require("./models/User");
// const UserType = require("./models/UserType");
// const Word = require("./models/Word");
// const Order = require("./models/Order");
// const Type = require("./models/Type");
// const Withdrawal = require("./models/Withdrawal");

app.get("/", (req, res) => {
  res.send("hello word!");
});

sequelize.authenticate().then(() => {
    console.log("数据连接成功");
  }).catch((err) => {
    console.log("数据连接报错", err);
  });

// Log requests to the console.

// (async () => {
//   await sequelize.sync({ force: true });
//   // 这里是代码
// })();

// Code here
// User.create({
//   name: "jane",
//   user: "jane",
//   phone: "123",
//   password: "111",
//   money: "23.12",
//   Usertype_id: "1",
//   status: "1",
//   jifen: "100",
//   address: "china",
//   openid: "aabc123",
//   reg_time: new Date(),
//   end_time: new Date(),
// }).then(
//   (res) => {
//     // 返回创建对象的实例
//     console.log(res);
//   },
//   (err) => {
//     console.log(err);
//   }
// );

//同步数据库
// sequelize.sync({ force: true }).then(() => {
//   console.log("数据库表已经同步生成");
// });

// (async () => {
//     await sequelize.sync({ force: true });
//   })().then(console.log('数据库表已经同步生成')).catch(err=>{
//       console.log(`sync error: ${err}`)
//   });

//get test api
// app.get("/", (req, res) => {
//   res.send("测试");
// });

//注册user-api
const kf_user = require("./routes/api/kf_user");
app.use("/api/users", kf_user);

//工作日志
const kf_work_report =require("./routes/api/kf_work_report");
app.use("/api/work_report",kf_work_report);

//值班日志
const kf_duty_report= require("./routes/api/kf_duty_report");
app.use("/api/duty_report",kf_duty_report);

//
const kf_work_state= require("./routes/api/kf_work_state");
app.use("/api/work_state",kf_work_state);

//字典大表
const kf_dict= require("./routes/api/kf_dict");
app.use("/api/dict",kf_dict);

//字典小表
const kf_param = require("./routes/api/kf_param");
app.use("/api/param",kf_param);





// const bumen = require("./routes/api/bumen");
// app.use("/api/bumen", bumen);

// app.set('view >>enigne<<','jade')

//注册type
// const types = require("./routes/api/types");
// app.use("/api/types", types);

//注册word-api
// const words = require("./routes/api/words");
// const { urlencoded } = require("body-parser");
// const { sync } = require("./models/User");
// app.use("/api/words", words);


// 加载ueditor编辑器
var ueditor = require('ueditor')
// var ueditor = require("ueditor");
// module.exports = ueditor;

// var ueditor = require("ueditor");

// var ueditor = require("../ueditor");

// app.use(express.static(path.join(__dirname,'../lib')));
// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'html');

//使用模块
// var cookieParser=require('cookie-parser');
// //引用express-session用来控制session
// var session=require('express-session');
// //设置session中间件
// app.use(session({
//     secret:'drhn ued',   //与cookieParser中一致
//     resave:true,        //(是否允许)当客户端并行发送多个请求时，其中一个请求在另一个请求结束时对session进行修改覆盖并保存。默认为true。但是(后续版本)有可能默认失效，所以最好手动添加。
//     saveUninitialized:true  //初始化session时是否保存到存储。默认为true， 但是(后续版本)有可能默认失效，所以最好手动添加。
// }));

// app.use(express.static(path.join(__dirname, 'public')));
// app.set('views', path.join(__dirname, 'views'));
// app.engine('.html', ejs._express);
// app.set('view engine', 'vue');

app.use("/api/ueditor/ue", ueditor(path.join(__dirname, 'static'), function (req, res, next) {
    //客户端上传文件设置
    var imgDir = '/img/ueditor/'
     var ActionType = req.query.action;
    if (ActionType === 'uploadimage' || ActionType === 'uploadfile' || ActionType === 'uploadvideo') {
        var file_url = imgDir;//默认图片上传地址
        /*其他上传格式的地址*/
        if (ActionType === 'uploadfile') {
            file_url = '/file/ueditor/'; //附件
        }
        if (ActionType === 'uploadvideo') {
            file_url = '/video/ueditor/'; //视频
        }
        res.ue_up(file_url); //你只要输入要保存的地址 。保存操作交给ueditor来做
        res.setHeader('Content-Type', 'text/html');
    }
    //  客户端发起图片列表请求
    else if (req.query.action === 'listimage') {
        var dir_url = imgDir;
        res.ue_list(dir_url); // 客户端会列出 dir_url 目录下的所有图片
    }
    // 客户端发起其它请求
    else {
        // console.log('config.json')
        res.setHeader('Content-Type', 'application/json');
        res.redirect('/ueditor/nodejs/config.json');
    }
}));




//服务器端口
const port = process.env.PORT || 1001;



//监听端口
app.listen(port, () => {
  console.log(`服务器运行在${port}端口`);
});
