<template>
  <div v-if="active">
    <div class="font-bold text-2xl">{{title}}</div>
    <div class="pt-6">
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