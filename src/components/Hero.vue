<template>
  <div class="mx-auto container">
    <div class="rounded-t mb-1 hero_image relative h-500">
      <div
        class="text-left m-6 p-6 absolute bottom-0 left-0 bg-white bg-opacity-75 rounded md:p-10 md:m-10"
      >
        <h3 class="text-hm-bluegreen text-2xl font-semibold md:text-4xl">
          Stay connected with HeartMail.
        </h3>
        <h1 class="text-hm-darkblue py-5 md:text-2xl">
          Even if you're a world away.
        </h1>
        <a href="#summary">
          <button
            class="mt-5 bg-hm-blue hover:bg-hm-green text-white font-bold py-2 px-8 border-b-4 border-hm-green hover:border-hm-blue rounded"
          >
            Why Heartbeat?
          </button>
        </a>
      </div>
    </div>
    <div class="flex justify-between mt-2">
      <a
        href="https://covid19.spaceappschallenge.org/challenges/covid-challenges/world-away/teams/2fast2curious/project"
        target="new"
      >
      <img 
        src="@/assets/images/heartmail-logo.jpg" 
        class="w-1/3 pl-2 lg:w-1/6 lg:p-0 md:w-1/3"
      />
      </a>
      <div class="lg:w-1/6 lg:m-0 mr-2 md:w-5/6 md:mr-0 md:ml-56">
        <a
          href="https://data.nasa.gov/dataset/Wireless-System-for-Continuous-Cardiopulmonary-Mon/a6wc-pscj"
          target="_blank"
        >
          <button
            class="p-4 text-xs bg-transparent hover:bg-hm-bluegreen text-hm-bluegreen font-semibold hover:text-white border border-hm-bluegreen hover:border-transparent rounded"
          >
            Powered by NASA
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Hero",
};
</script>

<style scoped>
.hero_image {
  background-image: url("../assets/images/hero-image.jpg");
  height: 500px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
