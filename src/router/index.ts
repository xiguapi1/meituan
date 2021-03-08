import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'
import index from "@/views/view/index"
import userinfo from "@/views/view/userinfo"
import content from "@/views/view/content"

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'index',
    component: index,
  },
  {
    path: '/user/:name',
    name: 'userinfo',
    component: userinfo,
  },
  {
    path:'/topic/:id&auther=:name',
    name:'content',
    component:content
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
