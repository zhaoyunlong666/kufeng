<template>
  
  <div style="text-align: center;margin:0.2rem 0 0 0">
 
    
    <!--卡片视图区域-->
    <el-card>
      <!--搜索与添加区域-->
      <el-row :gutter="20">
        <el-col :span="20">
               <el-transfer
      style="text-align: left;margin-top:1rem; display: inline-block"
      v-model="value"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :render-content="renderFunc"
      :titles="['需值班人员', '排班列表']"
      :button-texts="['撤销排班', '进行排班']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>

        </el-col>

      </el-row>
     
     <el-tag type="success" style="float:left">2021年08月排班表</el-tag>
      <!--用户 列表区域-->
      <el-table key="userlist" :data="userlist" border stripe style="magrin-top:2rem">
        <!-- <el-table-column type="index" label="ID" /> -->

        <!-- <el-table-column prop="Usertype_id" :formatter="UsertypeFormat" label="账号类型">
          <template slot-scope="scope">
            <div :style="{'color':scope.row.Usertype_id==2? 'red':'black'}">
              {{ UsertypeFormat(scope.row,scope.row.Usertype_id) }}
            </div>
          </template>
        </el-table-column> -->
        <el-table-column prop="dr_u_id" label="值班人员" />
        <el-table-column prop="dr_remark" label="值班情况" />
        <el-table-column prop="dr_date" label="值班时间" />
        <!-- <el-table-column label="封号/启用">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.state" />
          </template>
        </el-table-column> -->
        <!--通过作用于插槽渲染操作列-->
        <el-table-column label="操作">
          <template slot-scope="scope">
            <!--修改按钮-->
            <el-tooltip effect="dark" content="修改信息" placement="top" :enterable="false">
              <el-button type="primary" icon="el-icon-edit" size="mini" @click="handleEdit(scope.$index,scope.row)" />
            </el-tooltip>

            <!-- 编辑时候的弹出层 -->
            <el-dialog
              title="编辑"
              :visible.sync="dialogFormVisible"
              width="500px"
              top="200px"
            >
              <el-form :model="form">
                <el-form-item
                  label="编号"
                  :label-width="formLabelWidth"
                >
                  <el-input
                    v-model="form.id"
                    auto-complete="off"
                  />
                </el-form-item>
                <el-form-item
                  label="姓名"
                  :label-width="formLabelWidth"
                >
                  <el-input
                    v-model="form.nickname"
                    auto-complete="off"
                  />
                </el-form-item>
                <el-form-item
                  label="地址"
                  :label-width="formLabelWidth"
                >
                  <el-input
                    v-model="form.address"
                    auto-complete="off"
                  />
                </el-form-item>

              </el-form>
              <div
                slot="footer"
                class="dialog-footer"
              >
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="handleSet(scope.$index, scope.row)"
                >确 定</el-button>
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
  <!-- <p style="text-align: center; margin: 50px 0 20px">使用 scoped-slot 自定义数据项</p>
  <div style="text-align: center">
    <el-transfer
      style="text-align: left; display: inline-block"
      v-model="value4"
      filterable
      :left-default-checked="[2, 3]"
      :right-default-checked="[1]"
      :titles="['Source', 'Target']"
      :button-texts="['到左边', '到右边']"
      :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
      @change="handleChange"
      :data="data">
      <span slot-scope="{ option }">{{ option.key }} - {{ option.label }}</span>
      <el-button class="transfer-footer" slot="left-footer" size="small">操作</el-button>
      <el-button class="transfer-footer" slot="right-footer" size="small">操作</el-button>
    </el-transfer>
  </div> -->
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
  export default {
    data() {
      const generateData = _ => {
        const data = [];
        for (let i = 1; i <= 15; i++) {
          data.push({
            key: i,
            label: `姓名 ${ i }`,
            disabled: i % 4 === 0
          });
        }
        return data;
      };
      return {
        data: generateData(),
        value: [1],
        value4: [1],
        renderFunc(h, option) {
          return <span>{ option.key } - { option.label }</span>;
        },
      dialogFormVisible: false, // 弹出层默认为关闭
      userlist: [],
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
      total: 100// 总页数

      };
    },
  methods: {
    handleChange(value, direction, movedKeys) {
        console.log(value, direction, movedKeys);
      },
      created() { this.getuserlist() },
  // activated() { this.getuserlist() },
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
      const { data: ress } = await this.$http.get('/api/duty_report/list', {
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
      const { data: res } = await this.$http.get('/api/duty_report/list', {
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