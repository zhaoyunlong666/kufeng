<template>
  <!-- <el-button @click="resetDateFilter">清除日期过滤器</el-button>
  <el-button @click="clearFilter">清除所有过滤器</el-button> -->
  <el-table ref="filterTable" :data="tableData" style="width: 98%;margin:0 auto">
    <el-table-column
      prop="tag"
      label="所属类型"
      width="100"
      :filters="[{ text: '学校机构', value: '学校机构' }, { text: '教师', value: '教师' }]"
      :filter-method="filterTag"
      filter-placement="bottom-end"
    >
      <template slot-scope="scope">
        <el-tag
          :type="scope.row.tag === '学校' ? 'primary' : 'success'"
          disable-transitions
        >{{ scope.row.tag }}</el-tag>
      </template>
    </el-table-column>

    <i class="el-icon-time" />
    <el-table-column
      prop="date"
      label="注册日期"
      sortable
      width="180"
      column-key="date"
      :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
      :filter-method="filterHandler"
    />
    <el-table-column
      prop="name"
      label="姓名"
      width="180"
    />
    <el-table-column
      prop="address"
      label="家庭住址"
      :formatter="formatter"
    />
    <el-table-column
      prop="phone"
      label="联系方式"
      width="180"
    />

    <el-table-column label="操作">
      <template slot-scope="scope">
        <el-button
          size="mini"
          @click="handleEdit(scope.$index, scope.row)"
        >编辑</el-button>
        <el-button
          size="mini"
          type="danger"
          @click="handleDelete(scope.$index, scope.row)"
        >删除</el-button>
      </template>
    </el-table-column>

  </el-table>
</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        phone: '13734222922',
        address: '上海市普陀区金沙江路 1518 弄',
        tag: '教师'
      }, {
        date: '2016-05-04',
        name: '赵云龙',
        phone: '13734222922',
        address: '北京海淀金沙江路 1517 弄',
        tag: '学校机构'
      }]
    }
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter('date')
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter()
    },
    formatter(row, column) {
      return row.address
    },
    filterTag(value, row) {
      return row.tag === value
    },
    filterHandler(value, row, column) {
      const property = column['property']
      return row[property] === value
    }
  }
}
</script>
