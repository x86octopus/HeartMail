<template>
  <div id="app">
    <Hero>Hero Box</Hero>
    <FeatureHeartbeat />
    <FeatureImages />
    <Summary />
    <TeamFooter />
  </div>
</template>

<script>
import FeatureImages from "./views/FeatureImages.vue";
import Hero from "@/components/Hero.vue";
import FeatureHeartbeat from "./views/FeatureHeartbeat.vue";
import Summary from "./views/Summary.vue";
import TeamFooter from "./views/TeamFooter.vue";

export default {
  name: "App",
  components: {
    Hero,
    FeatureImages,
    FeatureHeartbeat,
    Summary,
    TeamFooter,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
</style>
