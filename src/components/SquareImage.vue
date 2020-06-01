<template>
  <div>
    <img :src="imagePath()" />
  </div>
</template>

<script>
export default {
  name: "SquareImage",
  props: {
    image: {
      type: String,
      default: "space.jpg",
    },
  },
  methods: {
    imagePath: function() {
      return require("@/assets/images/" + this.image);
    },
  },
};
</script>

<style scoped></style>
