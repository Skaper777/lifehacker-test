<template>
  <div class="post">
    <header class="post__header">
      <button @click="goBack"></button>
    </header>
    <div class="post__body">
      <h1>{{getPost.title.rendered}}</h1>
      <p>
        {{getPost.content.rendered}}        
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: ['slug'],
  methods: {
    goBack() {
      this.$router.push('./')
    }
  },
  computed: {
    getPost() {          
      return this.$store.getters.getPostBySlug(this.slug)
    }
  }
}
</script>