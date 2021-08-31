<template>
  <div class="base">
    <el-row :gutter="10" style="margin:50px">
      <el-alert title="说明：平台收费设置" type="info" />
      <el-col :span="14" :offset="4">
        <div class="grid-content bg-purple">

          <el-form ref="ruleForm" :label-position="labelPosition" label-width="200px" :model="formLabelAlign">
            <el-form-item label="薪资管服务费">
              <el-input v-model="formLabelAlign.name" />
            </el-form-item>
            <el-form-item label="教师兼职服务费率%/单">
              <el-input v-model="formLabelAlign.region" />
            </el-form-item>
            <el-form-item label="教师认证服务费">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item label="保证金">
              <el-input v-model="formLabelAlign.type" />
            </el-form-item>
            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">保存设置</el-button>
            </el-form-item>
          </el-form>

        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      labelPosition: 'top',
      formLabelAlign: {
        name: '',
        region: '',
        type: ''
      }, ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      }
    }
  }, methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
        // alert('submit!')

          this.$notify({
            title: 'Info',
            message: '收费设置保存成功',
            type: 'success',
            center: true,
            position: 'bottom-left',
            showClose: false
          })
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    }
  }
}
</script>

<style lang="scss"  scoped>
.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  /* .bg-purple {
    background: #d3dce6;
  } */
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
