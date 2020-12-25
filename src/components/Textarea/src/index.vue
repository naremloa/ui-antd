<template>
  <a-textarea
    ref="Textarea"
    :value="value"
    class="fe-textarea"
    :max-length="maxLength"
    :disabled="disabled"
    type="textarea"
    v-bind="$attrs"
    :placeholder="placeholder"
    :auto-size="autoSize"
    @change="handleChange" />
</template>
<script>
import { Input as ATextarea } from 'ant-design-vue';

export default {
  name: 'FeTextarea',
  components: { ATextarea },
  model: { prop: 'value', event: 'change' },
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
    value: {
      type: String,
      default: '',
    },
  },
  methods: {
    handleChange(e) {
      this.$emit('change', e.target.value);
    },
  },
};
</script>
