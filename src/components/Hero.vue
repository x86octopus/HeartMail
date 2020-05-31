<template>
  <div class="m-16">
    <div class="container mx-auto rounded-t mt-4 mb-1 hero_image">      
      <div class="text-left p-16">
        <h3 class="font-sans text-white text-3xl mt-10">Stay connected.</h3>
        <h1 class="font-sans tracking-wide leading-tight hm-darkblue text-6xl mt-20">Even if you're <br />a world away.</h1>
        <button class="mt-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded">
          View Kai's heartbeat, live.
        </button>
      </div>
      <div class="flex justify-between">
        <div class="bg-cover w-56 logo_image border border-teal-500 rounded"></div>
        <div>
          <button class="bg-transparent hover:bg-teal-500 text-teal-700 font-semibold hover:text-white py-2 px-4 border border-teal-500 hover:border-transparent rounded">
            Powered by NASA
          </button>
        </div>
      </div>
    </div>    
</div>
</template>

<script>
export default {
  name: "Hero"
};
</script>

<style scoped>
  .hero_image {
    background-image: url('../assets/images/hero-image.jpg');
    height: 500px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }
  .logo_image {
    background-image: url('../assets/images/heartmail-logo.jpg');
    background-repeat: no-repeat;
  }

</style>