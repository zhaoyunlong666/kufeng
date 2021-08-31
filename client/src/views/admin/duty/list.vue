<template>
<div class="custom-tree-container">
  <el-card class="box-card" style="float:left;margin-left:2rem;margin-top:2rem">
  <div slot="header" class="clearfix">
    <span><el-tag> 当前值班人信息 </el-tag></span>
    <el-button style="float: right; padding: 3px 0" type="text">查看更多</el-button>
  </div>
 
  <div class="block text item" >
         <div class="demo-type">
        <!-- <div>
          <el-avatar icon="el-icon-user-solid"></el-avatar>
        </div> -->
        <div >
          <el-avatar  src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
        </div>
        <!-- <div>
          <el-avatar> user </el-avatar>
        </div> -->
        </div>
  </div>

  </el-card>


  <el-card class="box-card" style="float:left;margin-left:2rem;margin-top:2rem;width:50rem">
  <div slot="header" class="clearfix">
    <span><el-tag type="success"> 值班人员当日情况表 </el-tag></span>
    <el-button style="float: right; padding: 3px 0" type="text">汇总</el-button>
  </div>

  <div class="block text item" >
      <el-table
    :data="paramlist"
    :align="center"
    border
    >
      <el-table-column
      fixed
      prop=""
      label="日期"
      width="100">
    </el-table-column>
    <el-table-column
      fixed
      prop=""
      label="值班情况"
      width="300">
    </el-table-column>
    <el-table-column
      prop=""
      label="值班时间"
      width="200">
    </el-table-column>
    
    <el-table-column
      fixed="right"
      label="操作"
      width="200">
      <template slot-scope="scope">
        <!-- <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button> -->
        <el-button type="primary" icon="el-icon-edit">查看详情</el-button>
        <!-- <el-button type="text" size="small">编辑</el-button> -->
      </template>
    </el-table-column>
  </el-table>
  </div>

</el-card>

</div>

</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false, // 弹出层默认为关闭
      userlist: [],
      paramlist: [],
      phone:'',
      pagesize:'',
      pagenum:'',
      form: {
        address: '',
        nickname: '',
        id: ''
      },
      formLabelWidth: '50px',
      // 当前用户列表对象
      queryInfo: {
        phone: this.phone,
        pagenum: 1, // 当前页数
        pagesize: 10// 当前页有多少条数据
      },
      total: 100,// 总页数
      // 日期组件
      value1: '',
      value2: '',
      value3: '',
       pickerOptions: {
          shortcuts: [{
            text: '今天',
            onClick(picker) {
              picker.$emit('pick', new Date());
            }
          }, {
            text: '昨天',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit('pick', date);
            }
          }, {
            text: '一周前',
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit('pick', date);
            }
          }]
        },
    }
  },
  created() { this.getuserlist();this.getparamlist()},
  // activated() { this.getuserlist() },
  methods: {
    // 编辑
    handleEdit(index, row) {
      this.dialogFormVisible = true // 开启弹出层
      // 对弹出层中的表单赋值
      this.form.address = row.address
      this.form.nickname = row.nickname
      this.form.id = row.id
    },
    handleSet(index, row) {
      var params = {
        address: this.form.address,
        nickname: this.form.nickname,
        id: row.id
      }
      this.$http.get('/api/dict/editUser', params).then(
        res => {
          if (res.code === 200) {
            this.$message('修改成功！')
          } else {
            this.$message(res.data)
          }
        }
      )
    },
    UsertypeFormat(row, column) {
      // console.log(row)
      // console.log(column)
      // if (row.Usertype_id === 1) {
      //   return '试用'
      // } else if (row.Usertype_id === 2) {
      //   return '会员'
      // } else if (row.Usertype_id === 3) {
      //   return '管理员'
      // } else { return '?' }
    },
    changeInput() {
      this.$forceUpdate()
      this.queryInfo.phone = this.phone
    },
    async search() {
      // 搜索事件
      const { data: ress } = await this.$http.get('/api/dict/list', {
        params: this.queryInfo
      })

      if (ress.status !== 200) {
        return this.$message.error('获取学员信息失败')
      }

      this.userlist = ress.list
      this.total = ress.total

      this.$set(this.userlist, this.total)
    },
    // 动态获取用户数据
    async getuserlist() {
      const { data: res } = await this.$http.get('/api/dict/list', {
        params: this.queryInfo
      })

      console.log(res.status)

      if (res.status !== 200) {
        return this.$message.error('获取用户信息失败')
      }

      this.userlist = res.list
      this.total = res.total
    },

    async getparamlist(){
      const { data: res } = await this.$http.get('/api/param/list', {
        params: this.queryInfo
      })

      console.log(res.status)

      if (res.status !== 200) {
        return this.$message.error('获取用户信息失败')
      }

      this.paramlist = res.list
      this.total = res.total
    },

    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      //				console.log(newSize);
      this.queryInfo.pagesize = newSize
      // 重新发送数据请求
      this.getuserlist()
    },
    handleCurrentChange(newPage) {
      // console.log(newPage);
      this.queryInfo.pagenum = newPage
      // 重新发送数据请求
      this.getuserlist()
    }
  }
}
</script>
<style>
.text {
    font-size: 14px;
  }

  .item {
    margin-bottom: 18px;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }
  .clearfix:after {
    clear: both
  }

  .box-card {
    width: 480px;
  }
</style>