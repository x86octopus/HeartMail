<template>
  <div id="app">
    <Hero>Hero Box</Hero>
    <FeatureImages />
    <FeatureHeartbeat />
  </div>
</template>

<script>
import FeatureImages from "./views/FeatureImages.vue";
import Hero from "@/components/Hero.vue";
import FeatureHeartbeat from "./views/FeatureHeartbeat.vue";

export default {
  name: "App",
  components: {
    Hero,
    FeatureImages,
    FeatureHeartbeat,
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
