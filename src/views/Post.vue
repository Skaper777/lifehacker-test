<template>
  <div class="post">
    <header class="post__header">
      <div @click="goBack">
        <button></button>
      </div>      
    </header>
    <div class="post__body">
      <h1 v-html="getPost.title.rendered"></h1>
      <p class="post__body-text" v-html="getPost.content.rendered"></p>
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

<style lang="scss">
  .post {
    &__header {
      padding: 15px 10px;
      background: gray;

      div {
        position: relative;    
        display: flex;
        align-items: center;     
        width: 20px;
        height: 20px;
        cursor: pointer;
        
        &::after,
        &::before {
          position: absolute;
          width: 50%;
          left: 0;
          content: "";
          height: 2px;
          background: black;
        }

        &::before {
          top: 65%;
          transform: rotate(45deg);
        }

        &::after {
          top: 25%;
          transform: rotate(-45deg);
        }

        button {
          background: black;
          border: none;
          width: 100%;
          height: 1px;
          cursor: pointer;
        }
      }
    }

    &__body {
      padding: 10px;

      h1 {
        font-size: 22px;        
      }

      &-text {
        h2 {
          font-size: 18px;
        }

        figure {
          max-width: 100%;
          margin: 0;
        }       

        img, 
        iframe {         
          max-width: 100%;    
          height: auto;     
        }
      }
    }
  }
</style>