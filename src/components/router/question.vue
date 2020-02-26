<template>
<div class='course'>
  <h1>我是question</h1>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  },
  beforeRouteEnter (to, from, next) {
    console.log('这是放在组件内部的路由钩子函数', to)
    next()
  },
  beforeRouteLeave (to, from, next) {
    alert('这是内部路由钩子函数，离开页面')
    next()
  }
}
</script>
<style scoped>
h1{
  color: chocolate;
}
</style>
