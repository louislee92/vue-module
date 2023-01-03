import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'

Vue.use(Router)

// 解决重复跳转路由控制台抛异常问题
const originPush = Router.prototype.push
Router.prototype.push = function (location) {
  return originPush.call(this, location).catch(err => err)
}

const router = new Router({
  // mode: 'history',
  base: '/',
  routes: [
    {
      path: '/',
      name: "Home",
      component: Home
    },
  ]
});

export default router
