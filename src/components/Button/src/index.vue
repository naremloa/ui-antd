<template>
  <a-button
    ref="Button"
    v-bind="$attrs"
    :loading="localLoading"
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
import { isFunction, isBoolean } from '@/utils/lodash';
import { Button as AButton } from 'ant-design-vue';

export default {
  name: 'FeButton',
  components: { AButton },
  inheritAttrs: false,
  props: {
    loading: {
      type: Boolean,
      default: null,
    },
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
      localLoading: false,
    };
  },
  watch: {
    loading: {
      handler(newVal) { if (isBoolean(newVal)) this.localLoading = newVal; },
      immediate: true,
    },
  },
  methods: {
    async handleClick(...params) {
      const { hasLoading } = this;
      const clickHandle = this.click || this.$listeners.click;
      if (!isFunction(clickHandle)) return;
      if (hasLoading) this.setLoading(true);
      await Promise.resolve(clickHandle(...params));
      this.setLoading(false);
      this.$refs.Button?.$el.blur();
    },
    setLoading(status) {
      if (!isBoolean(this.loading)) this.localLoading = status;
    },
  },
};
</script>
