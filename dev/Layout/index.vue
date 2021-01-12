<template>
  <fe-ly>
    <!-- 頭 -->
    <fe-ly-header>
      <template #header-left>
        管理後台
      </template>
      <template #header-right />
    </fe-ly-header>

    <!-- 身 -->
    <fe-ly-body>
      <!-- 身-側欄 -->
      <fe-ly-body-aside>
        <layout-menu />
      </fe-ly-body-aside>
      <!-- 身-內容 -->
      <fe-ly-body-main>
        <fe-breadcrumb :items="breadcrumb" />
        <router-view />
      </fe-ly-body-main>
    </fe-ly-body>
  </fe-ly>
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
        .map(({ path: href, meta: { title, icon } = {} }) => ({ title, icon, href }));
    },
  },
};
</script>

<style lang="scss" >

</style>
