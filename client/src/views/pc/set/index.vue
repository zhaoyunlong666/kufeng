<template>
  <div class="zengshu-container">
    <div class="dashboard-text">微信设置
    </div>
    <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign">
      <el-form-item label="名称">
        <el-input v-model="formLabelAlign.name" />
      </el-form-item>
      <el-form-item label="活动区域">
        <el-input v-model="formLabelAlign.region" />
      </el-form-item>
      <el-form-item label="活动形式">
        <el-input v-model="formLabelAlign.type" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Zengshu',
  computed: {
    ...mapGetters([
      'name'
    ])
  }
}
</script>

<style lang="scss" scoped>
.wechat {
  &-container {
    margin: 30px;
  }
  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
