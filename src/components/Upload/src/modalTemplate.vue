<template>
  <div>
    <img
      v-if="data.type === 'img'"
      alt="example"
      style="width: 100%"
      :src="data.url">
    <a
      v-else
      :href="data.url"
      target="_blank">preview</a>
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { url: '#', type: 'img' };
      },
      validator: (value) => value?.url && value?.type,
    },
  },
};
</script>
