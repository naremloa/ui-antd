<template>
  <fe-ly>
    <!-- 頭 -->
    <fe-ly-header @handle-hbg="handleHbg">
      <template #header-left>
        管理後台
      </template>
      <template #header-right />
    </fe-ly-header>

    <!-- 身 -->
    <fe-ly-body>
      <!-- 身-側欄 -->
      <fe-ly-body-aside :hbg-state="hbgState">
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
      hbgState: true,
    };
  },
  computed: {
    breadcrumb() {
      return this.$route.matched
        .map(({ path: href, meta: { title, icon } = {} }) => ({ title, icon, href }));
    },
  },
  methods: {
    handleHbg() {
      console.log('state', this.hbgState);
      this.hbgState = !this.hbgState;
    },
  },

};
</script>
