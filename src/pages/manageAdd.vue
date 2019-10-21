<template>
  <div>
    <div>
         <input type="text" placeholder="user name" v-model="user.name" :disabled="id!=0">
     </div>
     <div>
         <input type="text" placeholder="user pass" v-model="user.pass" :disabled="id!=0">
     </div>
     <div>
         <input type="text" placeholder="确认密码" v-model="confirm" v-if="id==0">
     </div>
     <div>
         <input type="text" placeholder="user props" v-model="user.prop">
     </div>
     <div>
         <input type="date" placeholder="user time" v-model="user.time">
    </div>

    <div class="text-center">
      <button @click="add" v-if="id==0">添加</button>
      <button @click="update" v-else>修改</button>
    </div>
  </div>
</template>
<script>
import API from "../common/js/API";
export default {
  data() {
    return {
      user: {
        name: "",
        pass: "",
        prop: "",
        time: ""
      },
      confirm: "",
      id: "",
    };
  },
  methods: {
    add() {
      console.log(this.user);
      this.$axios({
        url: API.addManage,
        method: "get",
        params: this.user
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.$router.replace("/index/manage");
        } else {
          alert(res.data.info);
        }
      });
    },
    update() {
      this.$axios({
        url: API.updateManage,
        params: this.user
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.$router.push("/index/manage");
        } else {
          alert(res.data.info);
        }
      });
    }
  },
  mounted() {
    this.id = this.$route.query.id;
    if (this.id == 0) {
      //添加
    } else {
      //修改
      //取数据
      this.$axios({
        url: API.findMange,
        params: {
          id: this.id
        }
      }).then(res => {
        console.log(res);
        if (res.data.isok) {
          this.user = res.data.data[0];
          delete this.user._id;
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
</style>