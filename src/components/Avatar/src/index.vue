<template>
  <a-avatar
    ref="avatar"
    v-bind="$attrs"
    :src="src"
    :size="size"
    :shape="shape"
    class="fe-avatar">
    <slot />
  </a-avatar>
</template>
<script>
import { Avatar as AAvatar } from 'ant-design-vue';
import { isNumber } from '@/utils/lodash';

export default {
  name: 'FeAvatar',
  components: { AAvatar },
  props: {
    src: {
      type: String,
      default: '',
    },
    shape: {
      type: String,
      default: 'circle',
      validator(value) {
        return ['circle', 'square'].indexOf(value) !== -1;
      },
    },
    size: {
      type: [String, Number],
      default: 'default',
      validator(value) {
        if (isNumber(value)) return true;
        return ['large', 'default', 'small'].indexOf(value) !== -1;
      },
    },
  },
  data() {
    return {

    };
  },
  methods: {

  },
};
</script>
