<template>
  <div class="mx-16">
    <div class="flex justify-center">
      <ImageCard image="milky-way-1023340_640.jpg" title="Share your vitals">
        Send your heartbeat through space
      </ImageCard>
      <ImageCard image="606338main_CNOFS_s.jpg" title="Stay connected">
        Always know your loved one is okay
      </ImageCard>
      <ImageCard image="international-space-station-67774_640.jpg" title="Withstand the distance">
        Experience greater peace of mind with HeartMail
      </ImageCard>
    </div>
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: "FeatureImages",
  components: {
    ImageCard
  }
};
</script>

<style scoped>
</style>
