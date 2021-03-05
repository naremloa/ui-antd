<template>
  <fe-popover
    class="fe-column-popover"
    :trigger="trigger"
    v-bind="$attrs">
    <template #content>
      <component
        :is="content"
        :data="data"
        :row-data="rowData" />
    </template>
    <fe-button :type="btnType">
      {{ handleDisplay(data, rowData) }}
    </fe-button>
  </fe-popover>
</template>
<script>
import { isFunction } from '@/utils/lodash';

export default {
  name: 'FeColumnPopover',
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
    trigger: {
      type: String,
      default: 'hover',
      validator: (v) => ['hover', 'focus', 'click'].includes(v),
    },
    content: {
      type: Object,
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
    btnType: {
      type: String,
      default: 'default',
    },
  },
  methods: {
    handleDisplay(data, rowData) {
      const { text, format } = this;
      const waitingFormat = text || data;
      const displayText = isFunction(format) ? format(waitingFormat, rowData) : waitingFormat;
      return displayText;
    },
  },
};
</script>
