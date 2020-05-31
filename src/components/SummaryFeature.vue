<template>
  <div :class="active ? 'bg-hm-darkblue text-gray-100 rounded' : ''">
    <div class="cursor-pointer mt-2 pl-6 py-4" :id="name" @click="onClick">
      <div class="font-bold text-lg">{{title}}</div>
      <div>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SummaryFeature",
  props: {
    active: { required: true },
    name: { required: true },
    title: { required: true },
    onClick: { required: false }
  }
};
</script>

<style scoped>
</style>
