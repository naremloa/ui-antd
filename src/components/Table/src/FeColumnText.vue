<template>
  <div class="fe-column-text">
    <template v-if="slotComponent">
      <component
        :is="slotComponent"
        v-bind="rowData" />
    </template>
    <template v-else>
      {{ handleDisplay(data, rowData) }}
    </template>
  </div>
</template>
<script>
import { isFunction } from '@/plugins/lodash';

export default {
  name: 'FeColumnText',
  props: {
    data: {
      type: [String, Number],
      default: '',
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    format: {
      type: Function,
      default: null,
    },
    text: {
      type: [Number, String],
      default: '',
    },
    slotComponent: {
      type: Object,
      default: null,
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
