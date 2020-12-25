<template>
  <img
    alt="example"
    style="width: 100%"
    :src="data">
</template>
<script>
export default {
  props: {
    data: {
      type: [String],
      default: '#',
    },
  },
};
</script>
