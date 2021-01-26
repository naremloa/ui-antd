<script>
import { FormModel } from 'ant-design-vue';
import { isFunction, isObject } from '@/utils/lodash';

const { Item } = FormModel;
export default {
  name: 'FeFormItemSetting',
  components: { FeFormItem: Item },
  inheritAttrs: false,
  model: { prop: 'value', event: 'input' },
  props: {
    value: {
      type: [Array, String, Number, Boolean],
      default: undefined,
    },
    prop: {
      type: String,
      default: '',
      required: true,
    },
    rules: {
      type: Array,
      default: () => [],
    },
    asyncRuleStatus: {
      type: Boolean,
      default: true,
    },
    asyncRuleErrMsg: {
      type: String,
      default: '',
    },
    formType: {
      type: [Function, Object, String],
      default: '',
    },
    formTypeProp: {
      type: String,
      default: 'value',
    },
    formTypeProps: {
      type: Object,
      default: () => {},
    },
    formTypeEvent: {
      type: String,
      default: 'input',
    },
    nested: {
      type: [String, Object],
      default: '',
    },
  },
  watch: {
    asyncRuleStatus(newVal) {
      if (newVal === false) this.$refs.FormItem.onFieldBlur();
      this.$nextTick(() => this.$emit('update:asyncRuleStatus', true));
    },
  },
  render(h) {
    const renderInner = () => h(
      this.formType,
      {
        props: {
          ...this.formTypeProps,
          [this.formTypeProp]: this.value,
        },
        attrs: this.formTypeProps,
        on: {
          [this.formTypeEvent]: (value) => this.$emit('input', value),
        },
      },
    );
    const renderFormItem = () => h(
      'fe-form-item',
      {
        // NOTE: 為了 inputNumber 在 formItem 下高度丟失，新增 class 以修復
        class: { 'form-item-input-number': this.formType === 'fe-input' && this.formTypeProps?.type === 'inputNumber' },
        props: {
          ...this.$attrs,
          prop: this.prop,
          rules: [
            {
              validator: (_, val, cb) => {
                if (!this.asyncRuleStatus) {
                  return cb(this.asyncRuleErrMsg);
                }
                return cb();
              },
              trigger: 'blur',
            },
            ...this.rules,
          ],
        },
        on: this.$listeners,
        ref: 'FormItem',
      },
      [isFunction(this.formType)
        ? this.formType(h, { value: this.value })
        : renderInner()],
    );
    if (!this.nested) return renderFormItem();
    const handleNested = (val) => {
      if (isObject(val)) return val;
      return { label: val };
    };
    return h(
      'fe-form-item',
      { props: handleNested(this.nested) },
      [renderFormItem()],
    );
  },
};
</script>
