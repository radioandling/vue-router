<template>
<div class='user'>
  <div>
    <router-link
      v-for="(item, index) in user_list"
      :key="index"
      :to="'/user/'+ item.id"
    >
    {{item.username}}
    </router-link>
    <div v-if="userInfo">
      用户名：{{userInfo.username}} <br>
      用户等级： {{userInfo.level}}
    </div>
  </div>
</div>
</template>

<script>
let userData = [
  {
    id: '1',
    username: 'nodeing1',
    level: 'vip1'
  },
  {
    id: '2',
    username: 'nodeing2',
    level: 'vip1'
  },
  {
    id: '3',
    username: 'nodeing3',
    level: 'vip2'
  },
  {
    id: '4',
    username: 'nodeing4',
    level: 'vip3'
  }]
export default {
  components: {},
  data () {
    return {
      user_list: userData
    }
  },
  props: ['id'],
  computed: {
    userInfo () {
      console.log(this.id)
      return this.user_list[this.id - 1]
    }
  }
  // beforeRouteUpdate: function (to, from, next) {
  //   this.userInfo = userData[to.params.id - 1]
  //   next()
  // }
}
</script>
<style scoped>
</style>
