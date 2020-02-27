1.vuex的实际用途
    是为了建立一个“全局系统”，用来存储数据及状态，方便Vue组件中的兄弟组件之间的传值
      以前兄弟组件之间传值是： A传给父组件，父组件再传给B

2.Vuex主要包含几个部分
    state： 存储数据和状态
    mutation： 接收并处理组件传过来的数据，并且能拿到state里面的值和传过来的值结合
        注意：mutation里面不能有异步代码
    actions： 解决mutation里面不能处理异步的缺陷，可以用异步代码，并再次触发
              mutation就能实现异步处理数据的功能


3.代码使用过程：
    组件内：this.$store.dispatch('addAction', this.num)  addAction是自定义的
    store内：  1.是接收组件内传过来的事件和参数，并设置异步代码触发mutation里面的事件
               2. 处理action里面的传过来的事件
        1. addAction: function (context, payload) {
                console.log(context) // store的上下文环境
                console.log(payload) // 传过来的参数
                setTimeout(function () {
                context.commit('addCar', payload) // 需要再次触发mutation里面的函数
            }, 1000)
        }
        2. addCar: function (state, payload) {
                state.goods_num = state.goods_num + payload
            }

4.getter: 相当于一个“全局的计算属性”