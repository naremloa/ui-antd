<template>
  <a-switch
    ref="switch"
    v-bind="$attrs"
    class="fe-switch"
    :disabled="disabled"
    :loading="loading"
    :default-checked="defaultChecked"
    :checked="value"
    :checked-children="checkedChildren"
    :un-checked-children="unCheckedChildren"
    @change="handleBeforeChange">
    <slot />
  </a-switch>
</template>
<script>
import { isFunction } from '@/utils/lodash';
import { Switch as ASwitch } from 'ant-design-vue';

export default {
  name: 'FeSwitch',
  components: { ASwitch },
  inheritAttrs: false,
  model: { prop: 'value', event: 'change' },
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
    value: {
      type: Boolean,
      default: false,
    },
    beforeChange: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    changeLoading(val) {
      if (this.hasLoading) this.loading = !!val;
      else if (this.loading) this.loading = false;
    },
    async handleBeforeChange(...params) {
      // 優先拿 prop 中的 change callback
      const beforeCb = this.beforeChange;
      if (isFunction(beforeCb)) {
        this.changeLoading(true);
        const res = await beforeCb(...params);
        this.changeLoading(false);
        if (!res) return;
      }
      this.$emit('change', ...params);
    },
  },
};
</script>
