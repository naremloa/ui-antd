<template>
  <fe-textarea
    v-model="value"
    :placeholder="placeholder"
    :auto-size="autoSize"
    :max-length="maxLength"
    class="fe-column-textarea"
    v-bind="$attrs"
    @change="handleChange" />
</template>
<script>

export default {
  name: 'FeColumnTextarea',
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
      default: () => {},
    },
    maxLength: {
      type: Number,
      default: 1000,
    },
  },
  data() {
    return {
      value: this.data,
    };
  },
  watch: {
    data(newVal) { if (this.value !== newVal) this.value = !!newVal; },
  },
  methods: {
    handleChange(value) {
      const { change, rowData } = this;
      change(value, rowData);
    },
  },
};
</script>
