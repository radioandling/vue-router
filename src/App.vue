<template>
  <div id="app">
    <my-nav></my-nav>
    <!-- <button class="btn" @click="onPush">push方法</button>
    <button class="btn" @click="onReplace">replace方法</button> -->
  </div>
</template>

<script>
import MyNav from './components/webpage/nav'

export default {
  name: 'App',
  components: {
    MyNav: MyNav
  },
  methods: {
    onPush: function () {
      console.log(this)
      this.$router.push('/question', function () {
        console.log('push跳转成功')
      })
    },
    onReplace: function () {
      this.$router.replace('/question', function () {
        console.log('replace 成功')
      })
    }
  }
}
</script>

<style scoped="scoped">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0;
}
.btn {
  padding: 1rem 4rem;
  background-color: chocolate;
}
</style>
