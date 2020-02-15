<template>
  <div class="posts">
    <div v-for="post in getPosts" :key="post.id">
      <router-link :to="{name: 'Post', params: {slug: post.slug}}">
        <Post :img="post.cat_cover.sizes.mobile" :text="post.title.rendered"></Post>
      </router-link>
    </div>
  </div>
</template>

<script>
import Post from "@/components/Post-small";
export default {
  computed: {
    getPosts() {
      return this.$store.getters.getPosts;
    }
  },

  components: {
    Post
  }
};
</script>

<style lang="scss">
.posts {
  padding: 15px 10px;

  a {
    text-decoration: none;
  }
}
</style>