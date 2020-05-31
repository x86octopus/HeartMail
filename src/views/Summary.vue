<template>
  <div class="bg-transparent text-left m-16 px-16">
    <div class="flex bg-transparent">
      <div class="flex-initial text-gray-700 px-4 py-2 m-2" style="min-width: 30%">
        <div class="font-bold text-3xl">Summary of Features</div>

        <SummaryFeature
          :active="feature === 'heartbeat'"
          name="heartbeat"
          title="Why heartbeat?"
          :onClick="changeFeature"
        >A summary of the hardware</SummaryFeature>

        <SummaryFeature
          :active="feature === 'NASA'"
          name="NASA"
          title="Powered by NASA"
          :onClick="changeFeature"
        >A summary of NASA tech</SummaryFeature>
      </div>

      <div class="flex-initial text-gray-100 bg-hm-darkblue p-8 m-2 rounded-lg">
        <SummaryDescription :active="feature === 'heartbeat'" title="Why heartbeat?">
          Specific information about the hardware. longer text. CLicking a heading on the left
          dynamically changes this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros ipsum, viverra in tortor in, pulvinar scelerisque augue. Maecenas in tincidunt odio. Nulla pulvinar ullamcorper metus et porttitor. Maecenas faucibus tristique neque ac fermentum. Praesent at arcu tempus, maximus dolor vel, aliquam nisl. Morbi posuere et odio vel suscipit. Quisque tellus lorem, luctus id mattis eu, mollis at eros. Duis nec nisi id quam mollis consectetur at ornare mi. Phasellus consectetur dapibus elit. Sed vel cursus nibh. Sed venenatis tellus ut fringilla hendrerit. Nullam pellentesque malesuada nunc, et luctus turpis scelerisque sit amet. Nulla venenatis non ante quis semper. Nullam metus ante, elementum sit amet porta eu, elementum ut tellus.
        </SummaryDescription>

        <SummaryDescription :active="feature === 'NASA'" title="Powered by NASA">
          Specific information about the NASA tech referenced. longer text. CLicking a heading on the left
          dynamically changes this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros ipsum, viverra in tortor in, pulvinar scelerisque augue. Maecenas in tincidunt odio. Nulla pulvinar ullamcorper metus et porttitor. Maecenas faucibus tristique neque ac fermentum. Praesent at arcu tempus, maximus dolor vel, aliquam nisl. Morbi posuere et odio vel suscipit. Quisque tellus lorem, luctus id mattis eu, mollis at eros. Duis nec nisi id quam mollis consectetur at ornare mi. Phasellus consectetur dapibus elit. Sed vel cursus nibh. Sed venenatis tellus ut fringilla hendrerit. Nullam pellentesque malesuada nunc, et luctus turpis scelerisque sit amet. Nulla venenatis non ante quis semper. Nullam metus ante, elementum sit amet porta eu, elementum ut tellus.
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
