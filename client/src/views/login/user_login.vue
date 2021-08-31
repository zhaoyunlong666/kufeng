<template>
  <div class="user_login">
    <img src="@/assets/w1.jpg" width="100%">
    <el-dialog
      title="咨询客服"
      fullscreen="true"
      :visible.sync="dialogTableVisible"
    >
      <iframe
        id="mobsf"
        src="http://chat.ch5i.com/?action=page.customerService.index"
        scrolling="no"
        frameborder="no"
        width="100%"
        height="100%"
      />
    </el-dialog>

    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >幼儿英语</van-button>&nbsp;&nbsp;
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >入门英语</van-button>&nbsp;&nbsp;
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >小学英语</van-button>&nbsp;&nbsp;
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >初中英语</van-button>&nbsp;&nbsp;
    <!-- <van-button plain color="#7232dd">中考英语</van-button>&nbsp;&nbsp; -->
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >高中英语</van-button>&nbsp;&nbsp;
    <!-- <van-button plain color="#7232dd">高考英语</van-button>&nbsp;&nbsp; -->
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >大学英语</van-button>&nbsp;&nbsp;
    <van-button
      round
      color="#7232dd"
      @click="drawer = true"
    >出国英语</van-button><br><br>
    <!-- <van-notice-bar color="#fff" background="#ff0000" left-icon="info-o">
      手机号用于提现,请确保正确
    </van-notice-bar>

    <van-cell-group>
      <van-field v-model="value" label="手机号" placeholder="请输入手机号" />
    </van-cell-group> -->

    <img src="@/assets/w2.jpg" width="100%">

    <el-drawer
      :visible.sync="drawer"
      :direction="direction"
      :with-header="false"
      :wrapper-closable="true"
    >
      <span style="border-radio:1px #ccc solid; padding:10%">
        <van-steps :active="active">
          <van-step>选择学段</van-step>
          <van-step>开通报名</van-step>
        </van-steps>

        <van-cell title="剩余名额" />
        <van-count-down :time="time">
          <template #default="timeData">
            <span class="block">{{ timeData.hours }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.minutes }}</span>
            <span class="colon">:</span>
            <span class="block">{{ timeData.seconds }}</span>
          </template>
        </van-count-down>

        <!--底部导航@click="onClickIcon"-->
        <van-goods-action>
          <van-goods-action-icon
            icon="chat-o"
            text="客服"
            @click="dialogTableVisible = true"
          />

          <van-goods-action-button
            type="danger"
            text="我要参加"
            @click="onClickButton"
          />
        </van-goods-action>
      </span>
    </el-drawer>

    <van-sku
      v-model="show"
      :sku="sku"
      :goods="goods"
      :goods-id="goodsId"
      :quota="quota"
      :quota-used="quotaUsed"
      :hide-stock="sku.hide_stock"
      :message-config="messageConfig"
      @buy-clicked="onBuyClicked"
      @add-cart="onAddCartClicked"
    />
  </div>
</template>

<script>
import { Toast } from 'vant'
import { ref } from 'vue'

// import {axios} from 'axios'
// import wx from 'weixin-jsapi'
export default {
  setup() {
    const time = ref(30 * 60 * 60 * 1000)
    return { time }
  },
  data() {
    return {
      active: 0,
      dialogTableVisible: false,
      dialogFormVisible: false,
      code_val: this.$route.query.code,
      drawer: false,
      direction: 'btt',
      show: false,
      sku: {
        // 数据结构见下方文档
      },
      goods: {
        // 数据结构见下方文档
      },
      messageConfig: {
        // 数据结构见下方文档
      }
    }
  },
  mounted() {
    /**
     * iframe-宽高自适应显示
     */
    function changeMobsfIframe() {
      const mobsf = document.getElementById('mobsf')
      const deviceWidth = document.body.clientWidth
      mobsf.style.width = Number(deviceWidth) - 120 + 'px' // 数字是页面布局宽度差值
    }

    changeMobsfIframe()

    window.onresize = function() {
      changeMobsfIframe()
    }
    // this.loginWechat()
    // 判断微信是否需要登录授权
    // if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
    //   alert(111)
    //   console.log(`使用微信打开`)
    //   this.loginWechat()
    // } else {
    //   console.log(`非微信打开`)
    // }
  },
  created() {
    // 判断是否微信打开

    if (navigator.userAgent.toLowerCase().indexOf('micromessenger') !== -1) {
      console.log(`微信打开`)
      this.hascode() // 申请授权
    } else {
      console.log(`不是微信打开`)
    }
  },
  methods: {
    // 获取code
    hascode() {
      if (!this.code_val) {
        // 线上地址 http%3a%2f%2fbdc.zgjaijx.com%2fuser_login
        location.href = 'http://www.zgjaijx.com/getcode.html?appid=wxfeb9376fceb54154&scope=snsapi_base&state=STATE&redirect_uri=' + encodeURIComponent(location.href)
      } else {
        this.getTokey()
        // this.$axios({
        //   method: 'get',
        //   url: '/userinfo?code='+code
        // }, { params: {}}
        // ).then(res => {
        //   if (res.result) {
        //     console.log(res.result)
        //   }
        // }).catch(err => {
        //   console.log(err)
        // })

        // this.hastwo()
        //   ,{headers:{
        //    'Content-Type': 'application/x-www-form-urlencoded',
        //    'Host':'www.zgjaijx.com',
        //    'Referer':'http://wwww.zgjaijx.com'
        //   //'Content-Type': 'application/json',//设置请求头请求格式为JSON

        // }
        // if (res.result) {
        //   localStorage.name = res.name
        //   localStorage.open = res.openid
        // } else {
        // if(localStorage.name){

        // }
        // }
      }
    },
    getTokey() {
      this.$axios.get('/userinfo/get_wx_access_token', { params: { code: this.code_val }}).then(res => {
        const json = res.data[0]
        if (json.status === 0) {
          console.log(json.message)
        }
      }).catch(err => {
        console.log(err)
      })
    },
    // getToken(code) {
    //   const requrl = 'https://api.weixin.qq.com/sns/oauth2/access_token?'
    //   const params = {
    //     appid: 'wxfeb9376fceb54154',
    //     secret: 'ea6b3bb6e92218435dc048da7ece262f',
    //     code: code,
    //     grant_type: 'authorization_code'
    //   }
    //   const options = {
    //     method: 'get',
    //     url: requrl + qs.stringify(params),
    //     headers:{'Access-Control-Allow-Origin':'*'}
    //   }
    //   console.log(options.url)
    //   return new Promise((resolve, rejects) => {
    //     request(options, function(err, res, body) {
    //       if (res) {
    //         resolve(body)
    //         console.log(body)
    //       } else {
    //         rejects(err)
    //       }
    //     })
    //   })
    // },
    // 获取access_token 和appid
    onBuyClicked() {},
    onClickIcon() {
      this.$router.push({
        path: 'http://chat.ch5i.com/?action=page.customerService.index'
      })
    },
    onClickButton() {
      Toast('对接')
    }
    /** 获取当前网页url的参数 */
    // getQueryStringArgs() {
    //   const qs = (location.search.length > 0 ? location.search.substring(1) : '')
    //   const args = {}
    //   const items = qs.length ? qs.split('&') : []
    //   const item = null
    //   const name = null
    //   const value = null
    //   const len = items.length
    //   for (const i = 0; i < len; i++) {
    //     item = items[i].split('=')
    //     name = decodeURIComponent(item[0])
    //     value = decodeURIComponent(item[1])
    //     if (name.length) {
    //       args[name] = value
    //     }
    //   }
    //   return args
    // },
    /** 微信授权 */
    // loginWechat() {
    //   const args = this.getQueryStringArgs()
    //   if (args['code']) { // 已经授权并回调成功
    //     const wechatCode = args['code']
    //     this.$axios.get('/user?code=' + wechatCode, (res) => {
    //       if (res.result) {
    //         // $('#res-name').text(res.name);
    //         localStorage.setItem('userinfo', res)
    //         localStorage.name = res.name
    //       } else {
    //         if (localStorage.name) {
    //           // $('#res-name').text(localStorage.name);
    //           console.log(localStorage.name)
    //         }
    //       }
    //     })
    //   } else {
    //     if (localStorage.name) {
    //       console.log(localStorage.name)
    //     } else {
    //       location.href = 'http://bdc.zgjaijx.com/wechat_login' // 申请微信授权
    //     }
    //   }
    // }

    // getConfig() {
    //   console.log(window.location.href)
    //   var url = window.location.href
    //   this.$http.post('**此处写后台提供获取jsapi相关配置的接口**', {
    //     encodeUrl: Encrypt(url.split('#')[0]) // 直接丢弃#及后面的字符串   注意这里Encrypt因为我的项目里使用了ase加密解密，所以这么写的
    //   })
    //     .then(function(response) {
    //       if (response.data.flag == true) {
    //         var data = JSON.parse(Decrypt(response.data.data))// 将解密后的字符串转为对象  Decrypt这里是解密，不需要的就直接过滤悼
    //         console.log(data)
    //         // 下列的data.均为后台接口返回的字段，比如我的项里里返回的是 appid,timestamp,nonceStr,signature
    //         wx.config({
    //           debug: ture, // 这里一般在测试阶段先用ture，等打包给后台的时候就改回false,
    //           appId: data.appid,
    //           timestamp: data.timestamp,
    //           nonceStr: data.noncestr,
    //           signature: data.signature,
    //           jsApiList: ['chooseWXPay']
    //         })
    //         wx.ready(function() {
    //           wx.checkJsApi({
    //             jsApiList: ['chooseWXPay'],
    //             success: function(res) {
    //               console.log('seccess')
    //               console.log(res)
    //             },
    //             fail: function(res) {
    //               console.log('fail')
    //               console.log(res)
    //             }
    //           })
    //         })
    //       } else {
    //         Toast({
    //           message: response.data.detailMsg
    //         })
    //       }
    //     }).catch(function(error) {
    //       Toast({ // 提示引用的是mint-UI里toast
    //         message: '获取config失败，请重试'
    //       })
    //     })
    // },
    // 报名缴费   ( 支付按钮绑定@click="toapply()"事件)
    // toapply(id) {
    //   var $this = this
    //   this.$http.post('/pay', {
    //     encodeStr: Encrypt(id)// 项目里的加密
    //   })
    //     .then(function(response) {
    //       if (response.data.flag == true) {
    //         var data = JSON.parse(Decrypt(response.data.data))// 将解密后的字符串转为对象
    //         console.log(data)
    //         wx.ready(function() {
    //           wx.chooseWXPay({
    //             appId: data.appId,
    //             timestamp: data.timeStamp, // 支付签名时间戳，注意微信jssdk中的所有使用timestamp字段均为小写。但最新版的支付后台生成签名使用的timeStamp字段名需大写其中的S字符
    //             nonceStr: data.nonceStr, // 支付签名随机串，不长于 32
    //             package: data.package, // 统一支付接口返回的prepay_id参数值，提交格式如：prepay_id=\*\*\*）
    //             signType: data.signType, // 签名方式，默认为'SHA1'，使用新版支付需传入'MD5'
    //             paySign: data.paySign, // 支付签名
    //             success: function(res) {
    //               // 跳转到支付成功页面有这个页面
    //               $this.$router.push({
    //                 path: '/success_page',
    //                 name: 'success_page'
    //               })
    //               console.log(res)
    //             },
    //             cancel: function(res) { // 提示引用的是mint-UI里toast
    //               Toast('已取消支付')
    //             },
    //             fail: function(res) {
    //               Toast('支付失败，请重试')
    //             }
    //           })
    //         })
    //       } else {
    //         Toast({
    //           message: '获取支付信息失败，请重试'
    //         })
    //       }
    //     }).catch(function(error) {
    //       Toast({
    //         message: '获取订单信息失败，请重试'
    //       })
    //       console.log(error)
    //     })
    // }
  }
}
</script>

<style>
.user_login {
  background: "#eee";
  height: 100%;
}

.chat_dialog_div {
  display: block;
}
.box {
  display: hidden;
}
.el-dialog__body {
  padding: 0;
  height: 100%;
}

.colon {
  display: inline-block;
  margin: 0 4px;
  color: #ee0a24;
}
.block {
  display: inline-block;
  width: 22px;
  color: #fff;
  font-size: 12px;
  text-align: center;
  background-color: #ee0a24;
}
</style>
