<template>
  <fe-menu
    v-model="selectedKeys"
    :children="children"
    :open-keys.sync="openKeys"
    @click="handleItemClick" />
</template>
<script>
export default {
  name: 'Menu',
  data() {
    return {
      children: [],
      openKeys: [],
      selectedKeys: [],
    };
  },
  watch: {
    $route(newVal) {
      const { name } = newVal;
      this.selectedKeys = [name];
    },
  },
  mounted() {
    const handleRoutes = (acc, { name, meta: { title = '', display = [], icon } = {}, children = [] } = {}) => [
      ...acc,
      ...(display.includes('none') ? [] : [{
        label: title,
        icon,
        key: name,
        eventKey: name,
        children: children.length > 0 ? children.reduce(handleRoutes, []) : children,
      }]),
    ];
    const { options: { routes = [] } = {} } = this.$router || {};
    const { matched: path = [] } = this.$route;
    this.children = ((routes.find(({ name } = {}) => name === 'Root'))?.children || []).reduce(handleRoutes, []);
    this.openKeys = path.slice(1, path.length - 1).map(({ name }) => name);
    this.selectedKeys.push(this.$route.name);
  },
  methods: {
    handleItemClick({ key }) {
      const { name = '' } = this.$route;
      if (key && name !== key) this.$router.push({ name: key });
    },
  },
};
</script>

<style>
.ant-menu-inline {
  border-right: 0px;
}
</style>
