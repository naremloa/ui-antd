<template>
  <fe-select
    v-model="value"
    class="fe-column-select"
    :disabled="disabled"
    :show-arrow="showArrow"
    :options="options"
    v-bind="$attrs"
    @change="handleChange($event, rowData)" />
</template>
<script>
import { isFunction } from '@/utils/lodash';

export default {
  name: 'FeColumnSelect',
  props: {
    rowData: {
      type: Object,
      default: () => ({}),
    },
    options: {
      type: Array,
      default: () => [],
    },
    defaultValue: {
      type: [Array, String, Number],
      default: '',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    showArrow: {
      type: Boolean,
      default: true,
    },
    change: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      value: {},
    };
  },
  created() {
    this.value = this.defaultValue;
  },
  methods: {
    async handleChange(value, rowData = {}) {
      this.$emit('update:date-source', value);
      if (isFunction(this.change)) {
        await this.change(rowData);
      }
    },
  },
};
</script>
