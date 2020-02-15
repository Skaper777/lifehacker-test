import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/views/Home'
import Post from '@/views/Post'

Vue.use(VueRouter)

const routes = [
  {
    path: '',
    name: 'Home',
    component: Home
  },
  {
    path: '/:slug',
    props: true,
    name: 'Post',
    component: Post
  }  
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

export default router
