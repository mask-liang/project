<template>
  <div class="mask">
      <div class="box">
          <h3 class="text-center text-third">登录</h3>
          <select v-model="user.type">
              <option value="" disabled>--请选择--</option>
              <option value="0">超级管理员</option>
              <option value="1">普通管理员</option>
          </select>
          <input type="text" placeholder="username" v-model="user.name">
          <input type="text" placeholder="userpass" v-model="user.pass">
          <div class="text-center">
              <button class="btn-third" @click="login">登录</button>
          </div>
      </div>
  </div>
</template>
<script>
import API from '../common/js/API'
export default {
    data(){
        return {
            user:{
                name:"",
                pass:"",
                type:""
            }
        }
    },
    methods:{
        login(){
            console.log(this.user)
            this.$axios({
                url:API.login,
                method:"post",
                data:this.user
            }).then(res=>{
                if(res.data.isok){
                    sessionStorage.setItem("isAdmin",res.data.isAdmin)
                    this.$router.push("/index")
                }else{
                    alert(res.data.info)
                }
            })
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';

</style>