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
import { FeTag } from '@/components/Tag';

export default {
  name: 'FeColumnTag',
  components: { FeTag },
  props: {
    data: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
