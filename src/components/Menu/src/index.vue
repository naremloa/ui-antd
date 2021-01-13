<script>
import { Menu } from 'ant-design-vue';
import { isArray } from '@/utils/lodash';

export default {
  name: 'FeMenu',
  components: {
    AMenu: Menu,
    ASubMenu: Menu.SubMenu,
    AMenuItem: Menu.Item,
  },
  inheritAttrs: false,
  props: {
    children: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    const handleNode = (nodes = []) => nodes.map((node) => {
      const {
        children: childNode = [],
        label = '',
        icon,
        disabled = false,
        key = '',
      } = node;
      if (isArray(childNode) && childNode.length) {
        return h(
          'a-sub-menu',
          { props: { disabled }, key },
          [
            h(
              'span',
              { slot: 'title' },
              [icon && h('fe-icon', { props: { type: icon } }), label],
            ),
            ...handleNode(childNode),
          ],
        );
      }
      return h(
        'a-menu-item',
        { props: { disabled }, key },
        [icon && h('fe-icon', { props: { type: icon } }), label],
      );
    });
    return h(
      'a-menu',
      {
        class: 'fe-menu',
        props: { ...this.$attrs, mode: 'inline' },
        on: this.$listeners,
      },
      handleNode(this.children),
    );
  },
};
</script>
