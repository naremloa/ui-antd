<template>
  <fe-layout>
    <fe-layout-header>
      管理後台
    </fe-layout-header>
    <fe-layout>
      <fe-layout-sider>
        <layout-menu />
      </fe-layout-sider>
      <fe-layout-content style="max-width: calc(100vw - 200px)">
        <fe-breadcrumb :items="breadcrumb" />
        <router-view />
      </fe-layout-content>
    </fe-layout>
  </fe-layout>
</template>
<script>
import LayoutMenu from './Menu.vue';

export default {
  name: 'Layout',
  components: {
    LayoutMenu,
  },
  data() {
    return {
    };
  },
  computed: {
    breadcrumb() {
      return this.$route.matched
        .map(({ meta: { title, icon } = {} }) => ({ title, icon }));
    },
  },
};
</script>
