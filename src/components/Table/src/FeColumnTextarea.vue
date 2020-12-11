<template>
  <fe-textarea
    :default-value="defaultValue"
    :placeholder="placeholder"
    :auto-size="autoSize"
    :change="change"
    :max-length="maxLength"
    class="fe-column-textarea"
    v-bind="$attrs" />
</template>
<script>
import { FeTextarea } from '@/components/Textarea';

export default {
  name: 'FeColumnTextarea',
  components: { FeTextarea },
  props: {
    data: {
      type: [String, Number],
      default: '',
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    defaultValue: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: '',
    },
    autoSize: {
      type: Object,
      default: () => ({ minRows: 1, maxRows: 5 }),
    },
    change: {
      type: Function,
      default: null,
    },
    maxLength: {
      type: Number,
      default: 1000,
    },
  },
};
</script>
