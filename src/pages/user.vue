<template>
  <div>
    <!-- name (用户名) pass(密码) tel(电话) email(邮箱) sex(性别) idx(身份证号) des(备注) time(时间) -->
    <div>
      <input type="text" placeholder="username" v-model="user.name" />
    </div>
    <div>
      <input type="text" placeholder="userpass" v-model="user.pass" />
    </div>
    <div>
      <input type="text" placeholder="usertel" v-model="user.tel" />
    </div>
    <div>
      <input type="text" placeholder="useremail" v-model="user.email" />
    </div>
    <div>
      <input type="radio" name="sex" class="sex" value="男" v-model="user.sex" />男
      <input type="radio" name="sex" class="sex" value="女" v-model="user.sex" />女
    </div>
    <div>
      <input type="text" placeholder="user-idx" v-model="user.idx" />
    </div>
    <div>
      <input type="text" placeholder="user-des" v-model="user.des" />
    </div>
    <div>
      <input type="date" placeholder="user-time" v-model="user.time" />
    </div>
    <div>
      <button @click="add">添加</button>
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
        tel: "",
        email: "",
        sex: "",
        idx: "",
        des: "",
        time: ""
      }
    };
  },
  methods: {
    add() {
      this.$axios({
        url: API.addUser,
        params: this.user
      }).then(res => {
        if (res.data.isok) {
          alert(res.data.info);
          this.user = {
            name: "",
            pass: "",
            tel: "",
            email: "",
            sex: "",
            idx: "",
            des: "",
            time: ""
          };
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

.sex {
  font-size: 20px;
  display: inline;
  width: 50px;
  line-height: 20px;
  height: auto;
}
</style>