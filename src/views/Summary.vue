<template>
  <div class="bg-transparent text-left mx-20 my-8 px-20">
    <a id="summary" />
    <div class="flex bg-transparent mx-6">
      <div class="flex-initial text-hm-bluegreen mt-8" style="min-width: 30%">
        <SummaryFeature
          :active="feature === 'heartbeat'"
          name="heartbeat"
          title="Why heartbeat?"
          :onClick="changeFeature"
        >Small signal, big impact.</SummaryFeature>

        <SummaryFeature
          :active="feature === 'NASA'"
          name="NASA"
          title="Powered by NASA"
          :onClick="changeFeature"
        >Cutting edge tech</SummaryFeature>
      </div>

      <div class="flex-initial text-hm-bluegreen bg-hm-trueblue p-8 m-2 pb-12 rounded-lg">
        <SummaryDescription :active="feature === 'heartbeat'" title="Why heartbeat?">
          Whether you’re at the ends of the world or the ends of the galaxy, HeartMail wants to bring your home to you. Being away from home doesn’t have to mean being
          disconnected. The quick reassurance that someone back home is doing can make all the difference. Wearing a HeartMail bracelet allows you to
          send and receive an instantaneous live heartbeat at the press of a button. So when scheduled chats and quick texts aren’t cutting it,
          let us help.
        </SummaryDescription>

        <SummaryDescription :active="feature === 'NASA'" title="Powered by NASA">
          At NASA, groundbreaking tech called the Sense-It system allows users to apply a small bandage-like device to monitor and record cardiovascular data.
          Wearing this tech helps keep astronauts safe when transmitted back to doctors and scientists on the ground. At HeartMail, we thought about who else
          was waiting for the astronauts on the ground – their families and loved ones. Thanks to this technology, something as small and simple as the beat of your
          heart can be broadcast live, no ground control needed, back to those who need to hear it. With the addition of the HeartMail wearable, this data travels
          through space and time and can be felt by another user in the form of gentle vibrations. Thanks to the scientists at NASA, and to
          HeartMail, you can bring your astronaut back to you.
        </SummaryDescription>
      </div>
    </div>
  </div>
</template>

<script>
import SummaryFeature from "@/components/SummaryFeature.vue";
import SummaryDescription from "@/components/SummaryDescription.vue";

export default {
  name: "Summary",
  data: function() {
    return { feature: "heartbeat" };
  },
  methods: {
    changeFeature: function(event) {
      this.feature = event.currentTarget.id;
    }
  },

  components: { SummaryFeature, SummaryDescription }
};
</script>

<style scoped>
</style>
