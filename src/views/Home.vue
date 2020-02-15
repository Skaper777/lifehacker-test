<template>
  <div class="posts">
    <div v-for="post in getPosts" :key="post.id">
      <router-link :to="{name: 'Post', params: {slug: post.slug}}">
        <img :src="post.cat_cover.sizes.mobile">
        <h2>{{post.title.rendered}}</h2>
      </router-link>      
    </div>
  </div>
</template>

<script>
export default {  
  computed: {
    getPosts() {
      return this.$store.getters.getPosts
    }   
  }
}
</script>