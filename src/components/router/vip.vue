<template>
<div class='vip'>
  <h1>我是vip</h1>
  <ul>
    <router-link tag='li' to='/vip/one'><a href="http://">1</a></router-link>
    <router-link tag='li' to='/vip/two'><a href="http://">2</a></router-link>
    <router-link tag='li' to='/vip/three'><a href="http://">3</a></router-link>
  </ul>
  <!-- 渲染子组件 -->
  <router-view></router-view>
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {}
  }
}
</script>
<style scoped>
h1{
  color: chocolate;
}
ul li {
  margin: 0;
  padding: 0;
}
li{
  height: 10rem;
  width: 10rem;
  background-color: burlywood;
  float: left;
  text-align: center;
  line-height: 10rem;
  list-style: none;
}
</style>
