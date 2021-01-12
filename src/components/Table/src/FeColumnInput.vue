<script>
import { isBoolean, isFunction } from '@/utils/lodash';

export default {
  name: 'FeColumnInput',
  props: {
    data: {
      type: [Number, String],
      default: '',
    },
    idx: {
      type: Number,
      required: true,
    },
    dataIndex: {
      type: String,
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    rowData: {
      type: Object,
      default: () => ({}),
    },
    disabled: {
      type: [Boolean, Function],
      default: false,
    },
  },
  data() {
    return {
      value: this.data,
    };
  },
  computed: {
    isDisabled() {
      const { disabled, rowData } = this;
      if (isBoolean(disabled)) return disabled;
      if (isFunction(disabled)) return disabled(rowData);
      return false;
    },
  },
  watch: {
    data(newVal) {
      this.value = newVal;
    },
    // 輔助內部狀態，獲取外部資料變更後，自動更新。
    rowData(newVal) {
      this.value = newVal[this.dataIndex];
    },
  },
  methods: {
    handleChange(value) {
      this.$emit('update:date-source', value);
      this.value = value;
      // 延遲驗證時機，保證值獲得更新
      this.$nextTick(() => {
        this.$refs.FormItem.onFieldChange();
      });
    },
  },
  render(h) {
    return h(
      'fe-form-item',
      {
        style: { marginBottom: 0 },
        props: {
          prop: `data.${this.idx}.${this.dataIndex}`,
          rules: this.rules,
          wrapperCol: { span: 24 },
          // 由於更新鏈過長，需要手動延遲驗證時機，來保證值獲得更新
          autoLink: false,
        },
        ref: 'FormItem',
      },
      [h(
        'fe-input',
        {
          props: {
            ...this.$attrs,
            value: this.value,
            disabled: this.isDisabled,
          },
          attrs: {
            ...this.$attrs,
            disabled: this.isDisabled,
          },
          on: {
            change: this.handleChange,
            blur: this.handleBlur,
          },
        },
      )],
    );
  },
};
</script>
