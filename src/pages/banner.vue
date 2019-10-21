<template>
  <div class="banner">
    <el-button class="add" @click="$router.push('/index/manage/add?id='+0)">添加</el-button>
    <el-table :data="tableData" height="250" style="width: 80%">
      <el-table-column label="序号" type="index" width="250"></el-table-column>
      <el-table-column prop="img" label="图片"></el-table-column>
      <el-table-column prop="des" label="描述" width="250"></el-table-column>
      <el-table-column label="操作" width="250">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    handleDelete(index, row) {
      console.log(index, row);
    }
  }
};
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.add {
  margin-left: 30px;
  margin-bottom: 30px;
}

.banner >>> .el-table--fit{
  margin 20px auto;
}
</style>