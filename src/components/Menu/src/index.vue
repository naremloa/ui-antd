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
        disabled = false,
        key = '',
      } = node;
      if (isArray(childNode) && childNode.length) {
        return h(
          'a-sub-menu',
          { props: { title: label, disabled }, key },
          handleNode(childNode),
        );
      }
      return h('a-menu-item', { props: { disabled }, key }, label);
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
