import Vue from 'vue'
import VueX from 'vuex'

Vue.use(VueX)

let store = new VueX.Store({
  state: {
    goods_num: 5
  },
  getters: {
    get_num: function (state) {
      return state.goods_num > 25 ? 25 : state.goods_num
    }
  },
  mutations: {
    addCar: function (state, payload) {
      state.goods_num = state.goods_num + payload
    }
  }
  // actions: {
  //   addAction: function (context, payload) {
  //     console.log(context) // store的上下文环境
  //     console.log(payload) // 传过来的参数
  //     setTimeout(function () {
  //       context.commit('addCar', payload) // 需要再次触发mutation里面的函数
  //     }, 1000)
  //   }
  // }
})

export default store
