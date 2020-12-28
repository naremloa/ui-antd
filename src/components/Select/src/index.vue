<script>
import { Select } from 'ant-design-vue';

const { Option } = Select;

export default {
  name: 'FeSelect',
  components: { Select, Option },
  model: { prop: 'value', event: 'change' },
  props: {
    options: {
      type: Array,
      default: () => [],
    },
    value: {
      type: [Array, String, Number, undefined],
      default: undefined,
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
      this.options.map(({
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
