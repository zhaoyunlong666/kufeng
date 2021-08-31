var express = require('express')
var router = express.Router()
var wechat = require('wechat')

var config = {
  token: 'jiaoyu',
  appid: 'wxf16f792a6316e8f2',
  appsecret: 'c62388b6fc2ed439f43cca7bd05d1934',
  encodingAESKey: ''
}

router.use(express.query())

router.use('/wxapi', wechat(config, function(req, res, next) {
  console.log(req.weixin)
  var message = req.weixin
  // 文本registry = http://registry.cnpmjs.org
  if (message.Content === '1') {
    res.reply('hehe')
  }
}))

module.exports = router
