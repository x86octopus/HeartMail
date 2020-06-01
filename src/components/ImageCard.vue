<template>
  <div class="text-left mb-6 md:m-4 md:px-1 md:w-1/4">
    <div
      class="md:rounded overflow-hidden md:border-b-2 md:border-l-2 md:border-r-2 md:border-hm-darkgreen md:pb-10"
    >
      <SquareImage class="rounded-t" :image="image" />
      <div class="font-bold text-2xl mt-8 text-hm-bluegreen px-4 md:px-6">
        {{ title }}
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
      default: "space.jpg",
    },
    title: {
      type: String,
      required: true,
    },
  },
  components: {
    SquareImage,
  },
};
</script>

<style scoped></style>
