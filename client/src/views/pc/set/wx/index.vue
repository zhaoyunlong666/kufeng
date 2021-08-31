<template>

  <div class="weixin-container">
    <el-card class="box-card">
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

    </el-card>
  </div>

</template>

<script>
export default {
  data() {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }
    }
  }
}
</script>
