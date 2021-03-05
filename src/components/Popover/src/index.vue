<template>
  <a-popover
    v-bind="compProps"
    @visibleChange="$emit('change', $event)">
    <template #content>
      <template v-if="content">
        <component
          :is="content"
          v-bind="$attrs" />
      </template>
      <slot name="content" />
    </template>
    <slot name="default" />
  </a-popover>
</template>
<script>
import { Popover } from 'ant-design-vue';

export default {
  name: 'FePopover',
  components: { APopover: Popover },
  inheritAttrs: false,
  model: { prop: 'visible', event: 'change' },
  props: {
    visible: {
      type: Boolean,
      default: undefined,
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
  },
  computed: {
    compProps() {
      return {
        ...(this.visible === undefined ? {} : { visible: this.visible }),
        trigger: this.trigger,
      };
    },
  },
};
</script>
