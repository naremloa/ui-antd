<script>
import { Select } from 'ant-design-vue';
import { isFunction, isArray } from '@/utils/lodash';

const { Option } = Select;

export default {
  name: 'FeSelect',
  components: { Select, Option },
  model: { prop: 'value', event: 'change' },
  props: {
    options: {
      type: [Array, Promise, Function],
      default: () => [],
    },
    value: {
      type: [Array, String, Number, undefined],
      default: undefined,
    },
  },
  data() {
    return {
      localOptions: [],
    };
  },
  watch: {
    options: {
      async handler(val) {
        const res = isFunction(val)
          ? await val()
          : await Promise.resolve(val);
        if (isArray(res)) this.localOptions = res;
      },
      immediate: true,
    },
  },
  render(h) {
    return h(
      'Select',
      {
        class: 'fe-select',
        props: {
          ...this.$attrs,
          value: this.value,
        },
        on: {
          ...this.$listeners,
          change: (value, option) => {
            this.$emit('change', value, option);
          },
        },
      },
      this.localOptions.map(({
        value,
        label,
        disabled,
        class: className,
      }) => h(
        'Option',
        {
          props: {
            key: value,
            value,
            disabled,
            title: label,
            class: className,
          },
        },
        label,
      )),
    );
  },
};
</script>
<style lang="scss" scoped>
.fe-select {
  width: 171px
}
</style>
