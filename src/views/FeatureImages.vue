<template>
  <div class="text-weigh">
    <div>
      <SquareImage image="space.jpg" />Space
    </div>
    <div>
      <SquareImage />Something
    </div>
    <div>
      <SquareImage />Something Else
    </div>
  </div>
</template>

<script>
import SquareImage from "@/components/SquareImage.vue";

export default {
  name: "FeatureImages",
  components: {
    SquareImage
  }
};
</script>

<style scoped>
</style>
