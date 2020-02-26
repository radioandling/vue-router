import Vue from 'vue'
import Router from 'vue-router'
import MyHome from '../components/router/home.vue'
import MyCourse from '../components/router/course.vue'
import MyVip from '../components/router/vip.vue'
import MyQuestion from '../components/router/question.vue'
import VipOne from '../components/vip_router/one.vue'
import VipTwo from '../components/vip_router/two.vue'
import VipThree from '../components/vip_router/three.vue'
import HomeLeft from '../components/home_router/home_left.vue'
import HomeRight from '../components/home_router/home_right.vue'
import MyUser from '../components/router/user.vue'
import MyAxios from '../components/router/axios.vue'

Vue.use(Router)

var router = new Router({
  routes: [
    {
      path: '/home',
      components: {
        default: MyHome,
        left: HomeLeft,
        right: HomeRight
      }
    },
    {
      path: '/course',
      component: MyCourse
    },
    {
      path: '/vip',
      component: MyVip,
      meta: {
        require: true // 设置meta字段可以用来做进一步判断，如是否已经登录
      },
      children: [
        {
          path: 'one',
          components: VipOne
        },
        {
          path: 'two',
          component: VipTwo
        },
        {
          path: 'three',
          component: VipThree
        }
      ]
    },
    {
      path: '/question',
      name: 'wenda',
      component: MyQuestion
      // beforeEnter: function (to, from, next) {
      //   console.log('这是单个路由的钩子函数')
      // }
    },
    {
      path: '/hello',
      alias: '/hi',
      redirect: '/course'
    },
    {
      path: '/user/:id?',
      component: MyUser,
      props: true
    },
    {
      path: '/axios',
      component: MyAxios
    }

  ]
})
// 全局路由钩子函数
router.beforeEach((to, from, next) => {
  next()
})
export default router
