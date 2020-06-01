<template>
  <div class="md:mx-16">
    <div
      class="flex flex-wrap md:justify-center border-b-2 bg-hm-darkgreen md:border-0"
    >
      <ImageCard image="milky-way-1023340_640.jpg" title="Share your vitals">
        <p class="text-hm-bluegreen px-6 py-2">
          Send your heartbeat through space.
        </p>
      </ImageCard>
      <ImageCard image="606338main_CNOFS_s.jpg" title="Stay connected">
        <p class="text-hm-bluegreen px-6 py-2">
          Always know your loved one is okay.
        </p>
      </ImageCard>
      <ImageCard
        image="international-space-station-67774_640.jpg"
        title="Withstand the distance"
      >
        <p class="text-hm-bluegreen px-6 py-2">
          Experience greater peace of mind with HeartMail.
        </p>
      </ImageCard>
    </div>
  </div>
</template>

<script>
import ImageCard from "@/components/ImageCard.vue";

export default {
  name: "FeatureImages",
  components: {
    ImageCard,
  },
};
</script>

<style scoped></style>
