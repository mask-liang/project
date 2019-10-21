<template>
  <div class="header">
      <el-button type="danger" plain>退出登录</el-button>
      <span>admin</span>
  </div>
</template>
<script>
import API from '../common/js/API'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl';
.header{
    height 100px;
    background:$first;
}
.header >>> .el-button--danger{
  float right;
  margin-right 60px;
  margin-top 30px;
}
span{
  font-size 40px;
  color $color4;
  float right;
  line-height 100px;
  margin-right 60px;
}
</style>