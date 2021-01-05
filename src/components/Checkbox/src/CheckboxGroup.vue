<script>
import { isFunction, isArray } from '@/utils/lodash';
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
  data() {
    return {
      loading: false,
      localOptions: [],
    };
  },
  watch: {
    options: {
      async handler(val) {
        this.loading = true;
        const res = isFunction(val)
          ? await val()
          : await Promise.resolve(val);
        this.loading = false;
        if (isArray(res)) this.localOptions = res;
      },
      immediate: true,
    },
  },
  render(h) {
    return h(
      'a-checkbox-group',
      {
        props: {
          options: this.localOptions,
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
