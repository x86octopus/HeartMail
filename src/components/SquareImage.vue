<template>
  <div>
    <img class="h-32" :src="imagePath()" />
  </div>
</template>

<script>
export default {
  name: "SquareImage",
  props: {
    image: {
      type: String,
      default: "space.jpg"
    }
  },
  methods: {
    imagePath: function() {
      return require("@/assets/images/" + this.image);
    }
  }
};
</script>

<style scoped>
</style>
