<template>
  <fe-menu
    :children="children"
    :open-keys.sync="openKeys"
    :default-selected-keys="defaultSelectedKeys"
    @click="handleItemClick" />
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      children: [],
      openKeys: [],
      defaultSelectedKeys: [],
    };
  },
  mounted() {
    const handleRoutes = (acc, { name, meta: { title = '', display = [] } = {}, children = [] } = {}) => [
      ...acc,
      ...(display.includes('none') ? [] : [{
        label: title,
        key: name,
        eventKey: name,
        children: children.length > 0 ? children.reduce(handleRoutes, []) : children,
      }]),
    ];
    const { options: { routes = [] } = {} } = this.$router || {};
    const { matched: path = [] } = this.$route;
    this.children = ((routes.find(({ name } = {}) => name === 'Root'))?.children || []).reduce(handleRoutes, []);
    this.openKeys = path.slice(1, path.length - 1).map(({ name }) => name);
    this.defaultSelectedKeys.push(this.$route.name);
  },
  methods: {
    handleItemClick({ key }) {
      const { name = '' } = this.$route;
      if (key && name !== key) this.$router.push({ name: key });
    },
  },
};
</script>
