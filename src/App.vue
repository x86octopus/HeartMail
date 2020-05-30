<template>
  <div id="app">
    <Hero>Hero Box</Hero>
    <FeatureImages />
  </div>
</template>

<script>
import FeatureImages from "./views/FeatureImages.vue";
import Hero from "@/components/Hero.vue";

export default {
  name: "App",
  components: {
    Hero,
    FeatureImages
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
