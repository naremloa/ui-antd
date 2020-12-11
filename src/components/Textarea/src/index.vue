<template>
  <a-textarea
    ref="Textarea"
    v-model="value"
    class="fe-textarea"
    :max-length="maxLength"
    :disabled="disabled"
    type="textarea"
    v-bind="$attrs"
    :placeholder="placeholder"
    :auto-size="autoSize"
    @change="handleChange(data, rowData)" />
</template>
<script>
import { Input as ATextarea } from 'ant-design-vue';
import { isFunction } from '@/utils/lodash';

export default {
  name: 'FeTextarea',
  components: { ATextarea },
  props: {
    data: {
      type: [String, Number],
      default: '',
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    placeholder: {
      type: String,
      default: '',
    },
    autoSize: {
      type: Object,
      default: () => ({ minRows: 1, maxRows: 5 }),
    },
    maxLength: {
      type: Number,
      default: 1000,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    defaultValue: {
      type: String,
      default: '',
    },
    change: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {
      value: '',
    };
  },
  created() {
    this.value = this.defaultValue;
  },
  methods: {
    async handleChange(...params) {
      if (!isFunction(this.$listeners.change)) return;
      await Promise.resolve(this.$listeners.change(...params));
    },
  },
};
</script>
