<template>
  <div>
    <img
      :alt="data.alt"
      style="max-width: 100%"
      :src="data.url">
  </div>
</template>
<script>
export default {
  props: {
    data: {
      type: Object,
      default() {
        return { url: '', alt: '' };
      },
    },
  },
};
</script>
