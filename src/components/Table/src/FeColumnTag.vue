<template>
  <div class="fe-column-tag">
    <fe-tag
      v-for="(tag, tIdx) in data"
      :key="`tag-${tIdx}`"
      :color="handleColor(tag)">
      {{ handleText(tag) }}
    </fe-tag>
  </div>
</template>
<script>

import { isArray, isFunction } from '@/utils/lodash';

export default {
  name: 'FeColumnTag',
  props: {
    data: {
      type: [String, Array, Number, Object],
      default: () => [],
    },
    color: {
      type: [Function, String],
      default: 'blue',
    },
    text: {
      type: [Function, String, Number],
      default: '',
    },
  },
  computed: {
    displayData() {
      if (isArray(this.data)) return this.data;
      return [this.data];
    },
  },
  methods: {
    handleColor(data) {
      if (isFunction(this.color)) return this.color(data);
      return this.color;
    },
    handleText(data) {
      if (isFunction(this.text)) return this.text(data);
      if (this.text) return this.text;
      return data;
    },
  },
};
</script>
