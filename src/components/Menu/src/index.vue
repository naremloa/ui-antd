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
    child: {
      type: Array,
      default: () => [],
    },
  },
  render(h) {
    const handleNode = (nodes = []) => nodes.map((node) => {
      const { child: childNode = [], label } = node;
      if (isArray(childNode) && childNode.length) {
        return h(
          'a-sub-menu',
          { props: { title: label } },
          handleNode(childNode),
        );
      }
      return h('a-menu-item', label);
    });
    return h(
      'a-menu',
      {
        class: 'fe-menu',
        props: { mode: 'inline' },
      },
      handleNode(this.child),
    );
  },
};
</script>
