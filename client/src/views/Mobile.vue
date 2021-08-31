<template>
  <div class="Mobile">
    <van-swipe :autoplay="3000">
      <van-swipe-item v-for="(image, index) in images" :key="index">
        <img v-lazy="image">
      </van-swipe-item>
    </van-swipe>

    <van-notice-bar left-icon="volume-o" text="教师通知" scrollable />
    <van-tabs v-model="active">
      <van-tab title="全职教师">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>

      <van-tab title="兼职教师">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <van-cell v-for="item in list" :key="item" :title="item" />
        </van-list>
      </van-tab>
      <!-- <van-tab title="标签 3">内容 3</van-tab>
  <van-tab title="标签 4">内容 4</van-tab> -->
    </van-tabs>

    <van-grid :clickable="true" :column-num="4" icon-size="20">
      <van-grid-item border="false" icon="home-o" text="教师列表" to="/" dot />
      <van-grid-item icon="home-o" text="教师列表" to="/" badge="99+" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
      <van-grid-item icon="home-o" text="教师列表" to="/" />
    </van-grid>

    <van-tabbar v-model="active" active-color="#ff0000" inactive-color="#444">
      <van-tabbar-item replace to="/" icon="home-o">服务中心</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/select"
        icon="search"
      >教师查询</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/yue"
        icon="friends-o"
      >雇佣教师</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/yue"
        icon="friends-o"
      >服务办理</van-tabbar-item>
      <van-tabbar-item
        replace
        to="/my"
        icon="smile-comment-o"
      >个人中心</van-tabbar-item>
    </van-tabbar>

    <!-- <div class="box1"></div>
        <div class="box2"></div>
        <div class="box3" style="width:1920px;background: skyblue;"></div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      images: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      imageList: [
        'https://img.yzcdn.cn/vant/apple-1.jpg',
        'https://img.yzcdn.cn/vant/apple-2.jpg'
      ],
      active: 0,
      list: [],
      loading: false,
      finished: false
    }
  },
  methods: {
    onLoad() {
      // 异步更新数据
      // setTimeout 仅做示例，真实场景中一般为 ajax 请求
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          // this.list.push('hello')
          this.list.push(this.list.length + 1)
        }

        // 加载状态结束
        this.loading = false

        // 数据全部加载完成
        if (this.list.length >= 10) {
          this.finished = true
        }
      }, 1000)
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.big {
  width: 100vw;
  height: 100vh;
  background: yellowgreen;
}

.big div {
  height: 100px;
}

.big img {
  width: 710px;
  height: 400px;
}

.box1 {
  width: 960px;
  background: tomato;
}

.box2 {
  width: 1920px;
  background-color: darkred;
}

.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
}
</style>
