<template>
<div class="right">
    <h2 class="text-center text-third">{{$route.name}}</h2>
    <router-view></router-view>
</div>
</template>
<script>
import API from '../common/js/API'
export default {
}
</script>
<style lang="stylus" scoped>
@import '../common/stylus/index.styl'
.right{
    flex 1
}

h2{
    font-size 40px;
    color $second;
}
</style>