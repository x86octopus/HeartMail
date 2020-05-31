<template>
  <!-- This is an example component -->
<div>
    <div class="bg-hm-darkblue p-8">
        <div class="max-w-6xl container mx-auto sm:pt-2">
          <div class="flex flex-items-center mb-4">
              <div class="rectangle bg-hm-lightgreen rounded ml-20">
                  <div class="circle transition duration-300 ease-in-out bg-hm-bluegreen hover:bg-hm-green transform hover:-translate-y-1 hover:scale-110"></div>
            </div>
            <div class="w-1/2 text-left px-16">
              <h1
                class="font-bold text-white text-5xl leading-tight mb-4"
              >
                This is a live heartbeat.
              </h1>

              <p class="text-hm-lightgreen text-xl">
                View your heartbeat by entering your Fitbit user ID below.
              </p>

              <button class="mt-5 bg-hm-blue hover:bg-hm-green text-white font-bold py-2 px-8 border-b-4 border-hm-green hover:border-hm-blue rounded">
                See your heartbeat.
               </button>
            </div>
        </div>
    </div>
    </div>
    </div>

</template>

<script>
export default {
  name: "FeatureHeartbeat",
  components: {
  }
};
</script>

<style scoped>
.rectangle {
    width: 300px;
    height: 300px;
    position: relative;
}

.rectangle .circle {
  border-radius: 100%;
  height: 300px;
  width: 300px;
  position: absolute;
  top: 0px;
  left: 0px;
}
</style>
