<template>
  <div class="product" >
 

 <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="全部" name="first">
      
      <el-row>
          <el-button icon="el-icon-plus">新建分类</el-button>
      </el-row>

<el-tabs :tab-position="tabPosition" style="height: 500px;">
    <el-tab-pane label="套餐">套餐</el-tab-pane>
    <el-tab-pane label="私房">私房</el-tab-pane>
    <el-tab-pane label="招牌">招牌</el-tab-pane>
    <el-tab-pane label="时蔬">时蔬</el-tab-pane>
</el-tabs>

    </el-tab-pane>
    <el-tab-pane label="售卖中" name="second">售卖中</el-tab-pane>
    <el-tab-pane label="已下架" name="third">已下架</el-tab-pane>
    <el-tab-pane label="已售完" name="fourth">已售完</el-tab-pane>
    <el-tab-pane label="无图片" name="nopic">无图片</el-tab-pane>
    <el-tab-pane label="无标签" name="notip">无标签</el-tab-pane>
  </el-tabs>







  </div>
</template>

<script>
export default {
  data(){
    return {
       activeName: 'first',
       tabPosition: 'left'
    }
  },
  methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
}
</script>

<style>

</style>