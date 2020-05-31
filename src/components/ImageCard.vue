<template>
  <div class="text-left m-4 px-2">
    <div class="max-w-sm rounded overflow-hidden border-b-2 border-l-2 border-r-2 border-hm-darkgreen pb-10">
      <SquareImage :image="image" />
      <div class="font-bold text-2xl mt-8 text-hm-bluegreen px-6">
        {{title}}
      </div>
      <div>
        <slot></slot>
      </div>
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
