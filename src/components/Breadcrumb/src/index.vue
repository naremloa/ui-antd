<script>
import { Breadcrumb } from 'ant-design-vue';

export default {
  name: 'FeBreadcrumb',
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
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
      this.items.map(({ title, icon, href }, idx) => (title || icon)
      && h(
        'a-breadcrumb-item',
        {
          props: { href },
          on: {
            click: () => this.$router.push(href),
          },
        },
        [
          idx >= this.items.length
            ? h('span', [
              icon && h('fe-icon', { props: { type: icon } }),
              title,
            ])
            : h(
              'router-link', { props: { to: href || '' } }, [
                icon && h('fe-icon', { props: { type: icon } }),
                title,
              ],
            ),
        ],
      )),
    );
  },
};
</script>
