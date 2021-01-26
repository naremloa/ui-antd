<template>
  <div class="fe-column-tag">
    <fe-tag
      v-for="tag in data"
      :key="tag"
      color="blue">
      {{ tag }}
    </fe-tag>
  </div>
</template>
<script>

export default {
  name: 'FeColumnTag',
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
