<template>
  <div class="border-solid border-4 bg-gray-400 text-left m-16 px-16">
    <div class="flex bg-transparent">
      <div class="flex-initial text-gray-700 bg-gray-400 px-4 py-2 m-2" style="min-width: 30%">
        <div class="font-bold text-3xl">Summary of Features</div>
        <div :class="feature === 'heartbeat' ? 'bg-gray-500 rounded' : ''">
          <div class="cursor-pointer mt-6 pl-6" id="heartbeat" @click="changeFeature">
            <div class="font-bold text-lg">Why heartbeat?</div>
            <div>A summary of the hardware</div>
          </div>
        </div>
        <div :class="feature === 'NASA' ? 'bg-gray-500 rounded' : ''">
          <div class="cursor-pointer mt-4 pl-6" id="NASA" @click="changeFeature">
            <div class="font-bold text-lg">Powered by NASA</div>
            <div>A summary of NASA tech</div>
          </div>
        </div>
      </div>
      <div class="flex-initial text-gray-700 bg-gray-400 px-4 py-2 m-2">
        <div v-if="feature === 'heartbeat'">
          <div class="font-bold text-2xl">Why Heartbeat?</div>
          <div class="pt-6">
            Specific information about the hardware. longer text. CLicking a heading on the left
            dynamically changes this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros ipsum, viverra in tortor in, pulvinar scelerisque augue. Maecenas in tincidunt odio. Nulla pulvinar ullamcorper metus et porttitor. Maecenas faucibus tristique neque ac fermentum. Praesent at arcu tempus, maximus dolor vel, aliquam nisl. Morbi posuere et odio vel suscipit. Quisque tellus lorem, luctus id mattis eu, mollis at eros. Duis nec nisi id quam mollis consectetur at ornare mi. Phasellus consectetur dapibus elit. Sed vel cursus nibh. Sed venenatis tellus ut fringilla hendrerit. Nullam pellentesque malesuada nunc, et luctus turpis scelerisque sit amet. Nulla venenatis non ante quis semper. Nullam metus ante, elementum sit amet porta eu, elementum ut tellus.
          </div>
        </div>
        <div v-if="feature === 'NASA'">
          <div class="font-bold text-2xl">Powered by NASA</div>
          <div class="pt-6">
            Specific information about the NASA tech referenced. longer text. CLicking a heading on the left
            dynamically changes this. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eros ipsum, viverra in tortor in, pulvinar scelerisque augue. Maecenas in tincidunt odio. Nulla pulvinar ullamcorper metus et porttitor. Maecenas faucibus tristique neque ac fermentum. Praesent at arcu tempus, maximus dolor vel, aliquam nisl. Morbi posuere et odio vel suscipit. Quisque tellus lorem, luctus id mattis eu, mollis at eros. Duis nec nisi id quam mollis consectetur at ornare mi. Phasellus consectetur dapibus elit. Sed vel cursus nibh. Sed venenatis tellus ut fringilla hendrerit. Nullam pellentesque malesuada nunc, et luctus turpis scelerisque sit amet. Nulla venenatis non ante quis semper. Nullam metus ante, elementum sit amet porta eu, elementum ut tellus.
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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

  components: {}
};
</script>

<style scoped>
</style>
