<template>
  <div class="m-16">
    <div class="container mx-auto rounded-t m-4 hero_image">      
      <div class="text-left p-16">
        <h3 class="font-sans text-white text-3xl mt-10">Stay connected.</h3>
        <h1 class="font-sans tracking-wide leading-tight hm-darkblue text-6xl mt-20">Even if you're <br />a world away.</h1>
    
          <button class="mt-5 bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-8 border-b-4 border-teal-700 hover:border-teal-500 rounded">
            View Kai's heartbeat, live.
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

</style>