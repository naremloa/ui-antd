<script>
import { Checkbox } from 'ant-design-vue';

export default {
  name: 'CheckboxAll',
  components: { ACheckbox: Checkbox },
  props: {
    value: {
      type: Array,
      default: () => [],
    },
    options: {
      type: Array,
      default: () => [],
    },
    label: {
      type: String,
      default: '',
    },
  },
  computed: {
    checkedAll() {
      if (this.value.length === this.options.length) return true;
      return false;
    },
    checkedIndeterminate() {
      return this.value.length > 0
        && this.value.length !== this.options.length;
    },
  },
  render(h) {
    return h(
      'a-checkbox',
      {
        props: {
          checked: this.checkedAll,
          indeterminate: this.checkedIndeterminate,
        },
        on: {
          change: (e) => {
            const { checked = false } = e.target;
            if (checked) this.$emit('change', this.options.map(({ value }) => value));
            else this.$emit('change', []);
          },
        },
      },
      this.label || '全選',
    );
  },
};
</script>
