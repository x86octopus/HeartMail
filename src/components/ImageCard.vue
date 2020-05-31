<template>
  <div class="text-left m-2 px-6">
      <SquareImage :image="image" />
      <div class="font-bold text-2xl mt-4">
        {{title}}
      </div>
      <div>
        <slot></slot>
      </div>
  </div>
</template>

<script>
import SquareImage from "@/components/SquareImage.vue";

export default {
  name: "ImageCard",
  props: {
    image: {
      type: String,
      required: true,
      default: "space.jpg"
    },
    title: {
      type: String,
      required: true
    }
  },
  components: {
    SquareImage
  }
};
</script>

<style scoped>
</style>
