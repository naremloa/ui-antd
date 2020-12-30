<template>
  <fe-button
    class="fe-column-button"
    :has-loading="hasLoading"
    :disabled="isDisabled"
    v-bind="$attrs"
    @click="handleClick(data, rowData, text)">
    {{ handleDisplay(data, rowData) }}
  </fe-button>
</template>
<script>
import { isBoolean, isFunction } from '@/utils/lodash';
import { FeButton } from '@/components/Button';

export default {
  name: 'FeColumnButton',
  components: { FeButton },
  inheritAttrs: false,
  props: {
    data: {
      type: [String, Number],
      default: '',
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    hasLoading: {
      type: Boolean,
      default: false,
    },
    click: {
      type: Function,
      default: null,
    },
    format: {
      type: Function,
      default: null,
    },
    text: {
      type: String,
      default: '',
    },
    disabled: {
      type: [Boolean, Function],
      default: false,
    },
  },
  computed: {
    isDisabled() {
      const { disabled, rowData } = this;
      if (isBoolean(disabled)) return disabled;
      if (isFunction(disabled)) return disabled(rowData);
      return false;
    },
  },
  methods: {
    handleDisplay(data, rowData) {
      const { text, format } = this;
      const waitingFormat = text || data;
      const displayText = isFunction(format) ? format(waitingFormat, rowData) : waitingFormat;
      return displayText;
    },
    async handleClick(...params) {
      if (isFunction(this.click)) await this.click(...params);
    },
  },
};
</script>
