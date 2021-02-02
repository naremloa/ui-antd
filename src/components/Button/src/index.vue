<template>
  <a-button
    ref="Button"
    v-bind="$attrs"
    :loading="loading"
    class="fe-button"
    @click="handleClick">
    <template v-if="text">
      {{ text }}
    </template>
    <template v-else>
      <slot />
    </template>
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
    click: {
      type: Function,
      default: null,
    },
    text: {
      type: String,
      default: '',
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
      const clickHandle = this.click || this.$listeners.click;
      if (!isFunction(clickHandle)) return;
      if (hasLoading) this.loading = true;
      await Promise.resolve(clickHandle(...params));
      this.loading = false;
      this.$refs.Button?.$el.blur();
    },
  },
};
</script>
