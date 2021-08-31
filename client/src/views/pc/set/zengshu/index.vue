<template>
  <el-table
    :data="tableData"
    style="width: 100%"
  >
    <el-table-column type="expand">
      <template slot-scope="props">
        <el-form label-position="left" inline class="demo-table-expand">
          <el-form-item label="接口名称">
            <span>{{ props.row.name }}</span>
          </el-form-item>
          <el-form-item label="接口地址">
            <span>{{ props.row.shop }}</span>
          </el-form-item>
          <el-form-item label="接口 ID">
            <span>{{ props.row.id }}</span>
          </el-form-item>
          <!-- <el-form-item label="店铺 ID">
            <span>{{ props.row.shopId }}</span>
          </el-form-item> -->
          <!-- <el-form-item label="商品分类">
            <span>{{ props.row.category }}</span>
          </el-form-item> -->
          <!-- <el-form-item label="店铺地址">
            <span>{{ props.row.address }}</span>
          </el-form-item> -->
          <el-form-item label="接口说明">
            <span>{{ props.row.desc }}</span>
          </el-form-item>
        </el-form>
      </template>
    </el-table-column>
    <el-table-column
      label="接口 ID"
      prop="id"
    />
    <el-table-column
      label="接口名称"
      prop="name"
    />
    <el-table-column
      label="接口描述"
      prop="desc"
    />
  </el-table>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
</style>

<script>
export default {
  data() {
    return {
      tableData: [{
        id: '1',
        name: '全国教师执业资格证',
        category: '-',
        desc: '全国职业查询',
        address: '上海市普陀区真北路',
        shop: 'http://www.baidu.com/select?=',
        shopId: '10333'
      }, {
        id: '2',
        name: '全省教育资格证',
        category: '-',
        desc: '全国优质教师查询数据接口',
        address: '上海市普陀区真北路',
        shop: 'http://www.sinama.com/select?=',
        shopId: '10333'
      }]
    }
  }
}
</script>
