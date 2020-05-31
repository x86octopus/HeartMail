<template>
  <div class="mx-auto container m-16">
    <div class="rounded-t mt-4 mb-1 hero_image relative h-500">      
      <div class="text-left m-10 p-10 absolute bottom-0 left-0 bg-white bg-opacity-25 rounded">
        <h3 class="text-hm-bluegreen text-4xl font-semibold">Stay connected with HeartMail.</h3>
        <h1 class="text-hm-darkblue text-xl pb-5">Even if you're a world away.</h1>
        <button class="mt-5 bg-hm-blue hover:bg-hm-green text-white font-bold py-2 px-8 border-b-4 border-hm-green hover:border-hm-blue rounded">
          Live heartbeat >
        </button>
      </div>
    </div>    
          <div class="flex justify-between">
        <div class="bg-cover w-56 logo_image border border-hm-bluegreen rounded"></div>
        <div>
          <button class="bg-transparent hover:bg-hm-bluegreen text-hm-bluegreen font-semibold hover:text-white py-2 px-4 border border-hm-bluegreen hover:border-transparent rounded">
            Powered by NASA
          </button>
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