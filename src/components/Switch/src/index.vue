<template>
  <a-switch
    ref="switch"
    v-bind="$attrs"
    class="fe-switch"
    :disabled="disabled"
    :loading="loading"
    :default-checked="defaultChecked"
    :checked-children="checkedChildren"
    :un-checked-children="unCheckedChildren"
    @change="handleChange">
    <slot />
  </a-switch>
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { Switch as ASwitch } from 'ant-design-vue';

export default {
  name: 'FeSwitch',
  components: { ASwitch },
  props: {
    disabled: {
      type: Boolean,
      default: false,
    },
    hasLoading: {
      type: Boolean,
      default: false,
    },
    checkedChildren: {
      type: String,
      default: '',
    },
    unCheckedChildren: {
      type: String,
      default: '',
    },
    defaultChecked: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    async handleChange(...params) {
      const { hasLoading } = this;
      if (!isFunction(this.$listeners.change)) return;
      if (hasLoading) this.loading = true;
      await Promise.resolve(this.$listeners.change(...params));
      this.loading = false;
    },
  },
};
</script>
