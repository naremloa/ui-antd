<script>
import { Checkbox } from 'ant-design-vue';
import FeCheckboxAll from './CheckboxAll.vue';

const { Group: ACheckboxGroup } = Checkbox;
export default {
  name: 'FeCheckboxGroup',
  components: { ACheckboxGroup, FeCheckboxAll },
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
    hasAll: {
      type: Boolean,
      default: true,
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
