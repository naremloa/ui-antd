<template>
  <div class="fe-column-text">
    <template v-if="slotComponent">
      <component
        :is="slotComponent"
        v-bind="rowData" />
    </template>
    <template v-else-if="isObject(display)">
      <div
        v-for="(d, dIdx) in display"
        :key="dIdx">
        {{ d }}
      </div>
    </template>
    <template v-else>
      {{ display }}
    </template>
  </div>
</template>
<script>
import { isFunction, isObject } from '@/utils/lodash';

export default {
  name: 'FeColumnText',
  props: {
    // any type
    /* eslint-disable vue/require-prop-types */
    data: {
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
      type: [Number, String, Array],
      default: '',
    },
    slotComponent: {
      type: Object,
      default: null,
    },
  },
  computed: {
    display() {
      const {
        text, format, data, rowData,
      } = this;
      const waitingFormat = text || data;
      const displayText = isFunction(format) ? format(waitingFormat, rowData) : waitingFormat;
      return displayText || '-';
    },
  },
  methods: {
    isObject,
  },
};
</script>
