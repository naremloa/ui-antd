<template>
  <fe-switch
    class="fe-column-switch"
    :has-loading="hasLoading"
    v-bind="$attrs"
    :disabled="disabled"
    :checked-children="checkedChildren"
    :un-checked-children="unCheckedChildren"
    @change="handleChange(data, rowData)" />
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { FeSwitch } from '@/components/Switch';

export default {
  name: 'FeColumnSwitch',
  components: { FeSwitch },
  props: {
    data: {
      type: [String, Number],
      default: '',
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    hasLoading: {
      type: Boolean,
      default: false,
    },
    change: {
      type: Function,
      default: null,
    },
    checkedChildren: {
      type: String,
      default: '',
    },
    unCheckedChildren: {
      type: String,
      default: '',
    },
  },
  methods: {
    async handleChange(...params) {
      if (isFunction(this.change)) await this.change(...params);
    },
  },
};
</script>
