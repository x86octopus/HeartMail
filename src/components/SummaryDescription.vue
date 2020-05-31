<template>
  <div v-if="active">
    <div class="text-hm-bluegreen text-3xl font-semibold">{{title}}</div>
    <div class="pt-6 leading-relaxed">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryDescription",
  props: {
    active: { required: true },
    title: { required: true }
  }
};
</script>

<style scoped>
</style>