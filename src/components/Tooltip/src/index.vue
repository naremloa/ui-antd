<template>
  <a-tooltip
    ref="tooltip"
    v-bind="$attrs"
    :placement="placement"
    class="fe-tooltip">
    <template #title>
      {{ content }}
    </template>
    {{ title || '' }}
    <div v-if="!title">
      <slot name="tooltipSlot" />
    </div>
  </a-tooltip>
</template>
<script>
import { Tooltip as ATooltip } from 'ant-design-vue';

export default {
  name: 'FeTooltip',
  components: { ATooltip },
  props: {
    title: {
      type: String,
      default: '',
    },
    content: {
      type: String,
      default: '',
    },
    placement: {
      type: String,
      default: 'top',
      validator: (val) => [
        'top', 'topRight', 'topLeft',
        'bottom', 'bottomRight', 'bottomLeft',
        'left', 'leftBottom', 'leftTop',
        'right', 'rightBottom', 'rightTop',
      ].includes(val),
    },
  },
};
</script>
