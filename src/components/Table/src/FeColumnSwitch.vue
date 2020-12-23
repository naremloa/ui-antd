<template>
  <fe-switch
    class="fe-column-switch"
    v-bind="$attrs"
    :value="value"
    :disabled="disabled"
    :before-change="handleBeforeChange"
    @change="handleValue" />
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { FeSwitch } from '@/components/Switch';

export default {
  name: 'FeColumnSwitch',
  components: { FeSwitch },
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
      type: Boolean,
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
  watch: {
    data(newVal) { if (this.value !== newVal) this.value = !!newVal; },
  },
  methods: {
    handleValue(value) { this.value = value; },
    async handleBeforeChange(value) {
      const { data, rowData, beforeChange } = this;
      if (isFunction(beforeChange)) {
        try {
          const res = await beforeChange(value, { data, rowData });
          return !!res;
        } catch (err) {
          console.err(err.message || err);
          return false;
        }
      }
      return true;
    },
  },
};
</script>
