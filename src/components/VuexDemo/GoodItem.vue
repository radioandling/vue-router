<template>
  <div class="page">
    <li>
      <p class="title">html+css快速入门</p>
      <p><button @click="decrease">-</button><input type="text" v-model="num"><button @click="increase">+</button></p>
      <button class="btn" @click="addStore">加入购物车</button>
    </li>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  data () {
    return {
      num: 6
    }
  },
  components: {

  },
  methods: {
    addStore (num) {
      // 下边是同步代码，将事件和参数传给mutation
      this.$store.commit('addCar', this.num)
      // 下边是异步代码，将事件和参数传给actions
      // this.$store.dispatch('addAction', this.num)
    },
    increase () {
      this.num++
    },
    decrease () {
      this.num--
    }
  }
}
</script>

<style scoped>
li{
  list-style: none;
}
li img{
  width: 280px;
}
li p{
  text-align: center;
}
.btn{
    background-color: red;
    width: 150px;
    color: white;
    padding: 8px;
    border-radius: 8px;
    display: block;
    margin: 8px auto;
}
li input{
  color: black;
}
</style>
