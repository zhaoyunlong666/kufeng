<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title" />
  </div>
</template>

<script>
// export default {
//   data() {
//     return {
//       screenWidth: document.body.clientWidth // 屏幕尺寸
//     };
//   },
//   mounted() {
//     const goUrl = this.isMobile();
//     alert(goUrl);
//     if (goUrl === 0) {
//       // 移动端地址
//       //location = 'http://localhost:9528/#/wap'
//       // this.$router.push("/wap");
//       // this.$router.push({ name: "wap" });
//       // this.$router.push({ path: "/wap" });
//     } else {
//       // home
//       this.$router.push("/login");
//       this.$router.push({ name: "login" });
//       this.$router.push({ path: "/login" });
//     }
//   },
//   methods: {
//     isMobile() {
//       const flag = navigator.userAgent.match(
//         /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
//       );

//       // localStorage.setItem("isiphone", flag);
//       //console.log(flag);
//       localStorage.setItem("ismobile", flag ? 1 : 0);
//       const goUrl = flag ? 1 : 0;
//       //alert(goUrl);
//       return goUrl;
//     }
//   }
// };
</script>

<style scoped>
html,
body,
#app {
  width: 100%;
  height: 100%;
}
</style>
