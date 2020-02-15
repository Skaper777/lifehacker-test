import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
import Axios from 'axios';

export default new Vuex.Store({
  state: {
    posts: []
  },

  mutations: {
    loadPosts(state, payload) {
      state.posts = payload
    }
  },

  actions: {
    async fetchPosts({commit}) {
      await Axios.get('https://lifehacker.ru/api/wp/v2/posts')
      .then(res => {
        commit('loadPosts', res.data)
      })    
    }
  },

  getters: {
    getPosts(state) {
      return state.posts
    },

    getPostBySlug(state) {
      return postSlug => {
        return state.posts.find(post => post.slug === postSlug)
      }
    }
  }
})
