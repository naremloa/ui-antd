<template>
  <a-button
    ref="Button"
    v-bind="$attrs"
    :loading="loading"
    class="fe-button"
    @click="handleClick">
    <slot />
  </a-button>
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { Button as AButton } from 'ant-design-vue';

export default {
  name: 'FeButton',
  components: { AButton },
  inheritAttrs: false,
  props: {
    hasLoading: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async handleClick(...params) {
      const { hasLoading } = this;
      if (!isFunction(this.$listeners.click)) return;
      if (hasLoading) this.loading = true;
      await Promise.resolve(this.$listeners.click(...params));
      this.loading = false;
      this.$refs.Button?.$el.blur();
    },
  },
};
</script>
