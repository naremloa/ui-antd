<script>
import { Breadcrumb } from 'ant-design-vue';
import { FeIcon } from '@/components/Icon';

export default {
  name: 'FeBreadcrumb',
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    FeIcon,
  },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
  render(h) {
    return h(
      'a-breadcrumb',
      this.items.map(({ title, icon }) => h(
        'a-breadcrumb-item',
        [
          icon && h('fe-icon', { props: { type: icon } }),
          title,
        ],
      )),
    );
  },
};
</script>
