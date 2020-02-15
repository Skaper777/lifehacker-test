<template>
  <div class="post-small">
    <img :src="img" />
    <h2 v-html="text"></h2>
  </div>
</template>

<script>
export default {
  props: ["img", "text"]
};
</script>

<style lang="scss" scoped>
.post-small {
  display: flex;
  align-items: center;

  &:hover {
    h2 {
      color: black;
    }
  }

  img {
    min-width: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-right: 10px;
  }

  h2 {
    color: gray; 
    font-size: 16px;
    transition: 0.2s;
  }
}
</style>