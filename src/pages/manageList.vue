<template>
  <!-- <div>
    <button class="add btn-third" @click="$router.push('/index/manage/add?id='+0)">添加</button>
    <table>
      <tr>
        <th>序号</th>
        <th>账号</th>
        <th>时间</th>
        <th>属性</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in d" :key="item.id">
        <td>{{index+1}}</td>
        <td>{{item.name}}</td>
        <td>{{item.time}}</td>
        <td>{{item.prop}}</td>
        <td>
          <button @click="toAdd(item.id)">修改</button>
          <v-del :idx="item.id" @del="myDel"></v-del>
        </td>
      </tr>
      <tr v-if="d.length==0">
        <td colspan="5">暂无数据</td>
      </tr>
    </table>
  </div>-->
  <div class="list">
    <el-button class="add" @click="$router.push('/index/manage/add?id='+0)">添加</el-button>
    <el-table :data="tableData" height="250" border style="width:80%">
      <el-table-column label="序号" type="index" width="100"></el-table-column>
      <el-table-column prop="name" label="姓名" width="180"></el-table-column>
      <el-table-column prop="des" label="属性" width="180"></el-table-column>
      <el-table-column prop="date" label="时间" width="180"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">查询</el-button>
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
          name: "1",
          pass: "1",
          time: "2016-05-03",
          des: "1"
        },
        {
          name: "1",
          pass: "1",
          time: "2016-05-03",
          des: "1"
        },
        {
          name: "1",
          pass: "1",
          time: "2016-05-03",
          des: "1"
        },
        {
          name: "1",
          pass: "1",
          time: "2016-05-03",
          des: "1"
        }
      ],
      d: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    handleEdit(index, row) {
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      },

    init() {
      this.$axios({
        url: API.findMange,
        mehtod: "get"
      }).then(res => {
        this.d = res.data.data;
        console.log(res);
      });
    },
    toAdd(id) {
      this.$router.push("/index/manage/add?id=" + id);
    },
    myDel(e) {
      this.$axios({
        url: API.delManage,
        params: {
          id: e
        }
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.init();
        } else {
          alert(res.data.info);
        }
      });
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

.list >>> .el-table--border{
  margin 20px auto;
}
</style>