<script>
import { Checkbox } from 'ant-design-vue';

const { Group: ACheckboxGroup } = Checkbox;
export default {
  name: 'FeCheckboxGroup',
  components: { ACheckboxGroup },
  inheritAttrs: false,
  model: { prop: 'value', event: 'change' },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    return h(
      'a-checkbox-group',
      {
        props: {
          options: this.options,
          value: this.value,
        },
        on: {
          change: (...params) => this.$emit('change', ...params),
        },
      },
    );
  },

};
</script>
