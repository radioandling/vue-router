<template>
<div>
  <div class='nav'>
  <!-- * :to="home"动态绑定，默认渲染成<a>，也可以自己设置使用tag属性
       * active-class="active"设置被选中的状态
       * event=“eventname”, 默认是点击事件再跳转，用这个属性可以更改切换事件
       * 默认是模糊匹配，需要加上exact,寓意精准匹配
  -->
  <router-link :to="home" active-class="active" exact>首页</router-link>
  <router-link to="/course" active-class="active" exact>课程</router-link>
  <router-link to="/vip" active-class="active" exact>vip</router-link>
  <router-link :to="{name: 'wenda'}" active-class="active" exact>问答</router-link>
  <router-link to="/user" active-class="active" exact>用户</router-link>
  <router-link to="/axios" active-class="active" exact>axios</router-link>
</div>
<transition mode="out-in">
  <router-view></router-view>
</transition>
<!-- <router-view name="left"></router-view>
<router-view name="right"></router-view> -->
</div>
</template>

<script>

export default {
  components: {},
  data () {
    return {
      home: '/home'
    }
  }
}
</script>
<style scoped>
.nav{
  margin-top: 0rem;
  height: 4rem;
  background-color:lightgreen;
  line-height: 4rem;
}
a{
  padding: 0 20px;
  box-sizing: border-box;
  text-decoration: none;
}
.active{
  color: darkgoldenrod;
}
.v-enter{
  transform: scale(0.5)
}
.v-enter-active{
  transition: 2s
}
.v-enter-to{
    transform: scale(1)
}
.v-leave{
  transform: translateX(0px)
}
.v-leave-active{
  transition: 1s
}
.v-leave-to{
  transform: translateX(100%)
}
</style>
