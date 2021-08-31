<template>
  <div>
      <!--面包屑导航-->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <!-- <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>活动管理</el-breadcrumb-item>
      <el-breadcrumb-item>活动列表</el-breadcrumb-item>
      <el-breadcrumb-item>活动详情</el-breadcrumb-item> -->
    </el-breadcrumb>
    <!--卡片视图区域-->
    <el-card>
      <!--搜索与添加区域-->
      <el-row :gutter="30">

        <el-col :span="3">
            <el-select v-model="value" clearable placeholder="请选择部门">
            <el-option
            v-for="item in bumen_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        </el-col>

        <el-col :span="3">
            <el-select v-model="value" clearable placeholder="请选择承担人">
            <el-option
            v-for="item in people_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        </el-col>

        <el-col :span="3">
            <el-select v-model="value" clearable placeholder="请选择来源">
            <el-option
            v-for="item in task_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        </el-col>

        <!-- <el-col :span="3">

          <el-input ref="phone" v-model="phone" type="text" placeholder="请输入手机号" autocomplate="off" @input="changeInput" @change="getuserlist" @keyup.enter.native="getuserlist">
            <el-button slot="append" icon="el-icon-search" @click="getuserlist" />
          </el-input>

        </el-col> -->

        <!-- <el-col :span="3">
            <el-select v-model="value" clearable placeholder="请选择状态">
            <el-option
            v-for="item in state_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        </el-col> -->

        
        <el-col :span="7">

            <div class="block">
            <el-date-picker
            v-model="value2"
            type="datetimerange"
            align="right"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            :default-time="['12:00:00', '08:00:00']">
            </el-date-picker>
            </div>

        </el-col>

         <!-- <el-col :span="3">
            <el-select v-model="value" clearable placeholder="阅读状态">
            <el-option
            v-for="item in read_options"
            :key="item.value"
            :label="item.label"
            :value="item.value">
            </el-option>
            </el-select>
        </el-col> -->


        <el-col :span="4">
          <el-button type="primary">筛查数据</el-button>
        </el-col>
      </el-row>
      <br>
      <!--工作日志 列表区域-->
      <el-table key="userlist" :data="userlist" border stripe>
        <!-- <el-table-column type="index" label="ID" /> -->

        <!-- <el-table-column prop="Usertype_id" :formatter="UsertypeFormat" label="账号类型">
          <template slot-scope="scope">
            <div :style="{'color':scope.row.Usertype_id==2? 'red':'black'}">
              {{ UsertypeFormat(scope.row,scope.row.Usertype_id) }}
            </div>
          </template>
        </el-table-column> -->
    <el-table-column prop="" label="部门" />
    <el-table-column prop="" label="承担人" />
     <el-table-column prop="" label="来源" />
    <el-table-column prop="wr_content" label="日报内容" />
    <el-table-column prop="wr_ws_id" label="状态" />
    <el-table-column prop="wr_date" label="上报日期" />
    <!-- <el-table-column prop="wr_create_date" label="创建日期" /> -->
    <el-table-column prop="wr_remark" label="备注" />
    <!-- <el-table-column prop="wr_read_state" label="阅读状态" /> -->
        <!-- <el-table-column prop="kecheng_type" label="所学学段" />
        <el-table-column prop="money" label="账户余额" /> -->
        <!-- <el-table-column prop="reg_time" label="注册时间" /> -->

        <!-- <el-table-column prop="address" label="地址" /> -->
        <!-- <el-table-column label="封号/启用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" />
          </template>
        </el-table-column> -->
        <!--通过作用于插槽渲染操作列-->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--修改按钮-->
            <el-tooltip effect="dark" content="详情查看" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-search" size="mini" @click="handleEdit(scope.$index,scope.row)" >详情查看</el-button>
            </el-tooltip>

            <!-- 编辑时候的弹出层 -->
            <el-dialog
              title="日报详情"
              :visible.sync="dialogFormVisible"
              width="1200px"
              top="80px"
            >
<el-form ref="forms" :model="form" label-width="80px">
 <el-descriptions direction="vertical" :column="4" border>
 <!-- <template slot="extra">
      <el-button type="primary" size="small">知道了</el-button>
</template> -->
 
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-user"></i>
        上报时间
      </template>
      {{form.wr_date}} 
      </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-mobile-phone"></i>
        来源
      </template>
      副总安排
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-location-outline"></i>
        承担人
      </template>
      姓名
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-tickets"></i>
        状态
      </template>
      <el-tag size="small">{{form.wr_ws_id}} </el-tag>
    </el-descriptions-item>
    <el-descriptions-item>
      <template slot="label">
        <i class="el-icon-office-building"></i>
        日报详情
      </template>
      {{form.wr_content}} 
    </el-descriptions-item>
  </el-descriptions>
  </el-form>
              <div
                slot="footer"
                class="dialog-footer"
              >
                <el-button  type="primary" @click="dialogFormVisible = false">知道了</el-button>
                <!-- <el-button
                  type="primary"
                  @click="handleSet(scope.$index, scope.row)"
                >确 定</el-button> -->
              </div>
            </el-dialog>
            <!--删除按钮-->
            <!-- <el-tooltip effect="dark" content="删除数据" placement="top" :enterable="false">
            <el-button type="danger" icon="el-icon-delete" size="mini" />
             </el-tooltip> -->
            <!--设置按钮-->
            <!-- <el-tooltip effect="dark" content="分配角色" placement="top" :enterable="false">
              <el-button type="warning" icon="el-icon-setting" size="mini" />
            </el-tooltip> -->

          </template>
        </el-table-column>
      </el-table>

      <!--分页区域  layout="total, sizes, prev, pager, next, jumper"-->
      <el-pagination
        :current-page="queryInfo.pagenum"
        :page-sizes="[1, 2, 5, 10]"
        :page-size="queryInfo.pagesize"
        layout="prev, pager, next, jumper"
        :total="total"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </el-card>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dialogFormVisible: false, // 弹出层默认为关闭
      userlist: [],
      phone:'',
      pagesize:'',
      pagenum:'',
      form: {
        wr_content:'',
        wr_ws_id:'',
        wr_date:'',
        wr_remark:'',
        wr_read_state:'',
        id:'',
      },
        value1: '',
        value2: '',
      formLabelWidth: '50px',
      // 当前用户列表对象
      queryInfo: {
        phone: this.phone,
        pagenum: 1, // 当前页数
        pagesize: 10// 当前页有多少条数据
      },
      total: 100,// 总页数
      //部门绑定
      bumen_options: [{
          value: '选项1',
          label: '科信部'
        }, {
          value: '选项2',
          label: '综合部'
        }, {
          value: '选项3',
          label: '销售一部'
        }, {
          value: '选项4',
          label: '销售二部'
        }],
        value: '',
        people_options:[{
        value: '选项1',
          label: '姓名'
        }, {
          value: '选项2',
          label: '康辉'
        }, {
          value: '选项3',
          label: '...'
        }],
        value: '',
        task_options:[{
          value: '选项1',
          label: '总经理'
        }, {
          value: '选项2',
          label: '副总'
        }, {
          value: '选项3',
          label: '相关部门'
        }],value:'',
        state_options:[{
           value: '1',
          label: '未完成'
        }, {
          value: '2',
          label: '完成'
        }, {
          value: '3',
          label: '在办'
        }],value:'',
        read_options:[{
          value: '1',
          label: '未读'
        }, {
          value: '2',
          label: '已读'
        }],value:'',
    }
  },
  created() { this.getuserlist() },
  // activated() { this.getuserlist() },
  methods: {
    // 编辑
    handleEdit(index, row) {
      this.dialogFormVisible = true // 开启弹出层
      // 对弹出层中的表单赋值
      this.form.wr_content = row.wr_content
      this.form.wr_ws_id = row.wr_ws_id
      this.form.wr_date= row.wr_date
      this.form.wr_remark= row.wr_remark
      this.form.wr_read_state= row.wr_read_state
      this.form.id = row.id
    },
    handleSet(index, row) {
      var params = {
      wr_content : this.form.wr_content,
      wr_ws_id : this.form.wr_ws_id,
      wr_date: this.form.wr_date,
      wr_remark: this.form.wr_remark,
      wr_read_state: this.form.wr_read_state,
      id: row.id
      }
      this.$http.get('/api/users/editUser', params).then(
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
      const { data: ress } = await this.$http.get('/api/work_report/list', {
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
      const { data: res } = await this.$http.get('/api/work_report/list', {
        params: this.queryInfo
      })

      console.log(res.status)

      if (res.status !== 200) {
        return this.$message.error('获取用户信息失败')
      }

      this.userlist = res.list
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

<style lang="less" scoped>
</style>
