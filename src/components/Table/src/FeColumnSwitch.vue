<template>
  <fe-switch
    class="fe-column-switch"
    v-bind="$attrs"
    :value="value"
    :disabled="isDisabled"
    :before-change="handleBeforeChange"
    @change="handleValue" />
</template>
<script>
import { isFunction, isBoolean } from '@/utils/lodash';

export default {
  name: 'FeColumnSwitch',
  inheritAttrs: false,
  props: {
    data: {
      type: [Number, Boolean],
      default: false,
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: [Boolean, Function],
      default: false,
    },
    beforeChange: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      value: !!this.data,
    };
  },
  computed: {
    isDisabled() {
      const { disabled, rowData } = this;
      if (isBoolean(disabled)) return disabled;
      if (isFunction(disabled)) return disabled(rowData);
      return false;
    },
  },
  watch: {
    data(newVal) { if (this.value !== newVal) this.value = !!newVal; },
  },
  methods: {
    handleValue(value) {
      this.$emit('update:data-source', value);
      this.value = value;
    },
    async handleBeforeChange(value) {
      const { data, rowData, beforeChange } = this;
      if (isFunction(beforeChange)) {
        try {
          const res = await beforeChange(value, { data, rowData });
          return !!res;
        } catch (err) {
          console.error(err.message || err);
          return false;
        }
      }
      return true;
    },
  },
};
</script>
