<template>
  <!-- This is an example component -->
<div>
    <div class="bg-teal-900 p-16"></div>
    <div class="bg-teal-900">
        <div class="max-w-6xl mx-auto">
          <div class="flex items-center">
              <div class="w-1/2 relative">
              <div class="block">
                <div
                  class="ml-24 mb-16 w-2/3 bg-teal-200 rounded-lg shadow-lg p-16"
                >
                <div class="object-center h-64 w-64 transition duration-300 ease-in-out bg-green-700 hover:bg-green-500 transform hover:-translate-y-1 hover:scale-110 rounded-full"></div>
                </div>
              </div>
            </div>
            <div class="w-1/2 text-left">
              <h1
                class="font-bold text-white text-5xl leading-tight mb-4"
              >
                This is a live heartbeat.
              </h1>

              <p class="text-teal-200 text-xl">
                View your heartbeat by entering your Fitbit user ID below.
              </p>

              <button class="mt-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded">
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
</style>
