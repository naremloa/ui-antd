<template>
  <fe-layout class="ly">
    <fe-layout-header class="ly__header">
      管理後台
    </fe-layout-header>

    <fe-layout class="ly__content">
      <!-- aside -->
      <fe-layout-sider class="ly__content__sider">
        <!-- style="border-right: 1px solid #ccc" -->
        <layout-menu />
      </fe-layout-sider>
      <!-- main-content -->
      <fe-layout class="ly__content__main">
        <!-- <fe-layout-content style="max-width: calc(100vw - 200px)"> -->
        <!-- <sk-box pd="15px"> -->
        <fe-breadcrumb :items="breadcrumb" />
        <router-view />
        <!-- </sk-box> -->
      <!-- </fe-layout-content> -->
      </fe-layout>
    </fe-layout>
  </fe-layout>
</template>
<script>
import LayoutMenu from './Menu.vue';
import { Box as SkBox } from './Skeleton';

export default {
  name: 'Layout',
  components: {
    LayoutMenu,
    SkBox,
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

<style lang="scss">

.ly {

  &__header {
    color: #fff;
    background-color: #212946;
    font-size: 16px;
  }

  &__content {

    background-color: #fff;

    &__sider {

      border-right: 1px solid rgba(#000000, 0.05);

      // 覆寫antd
      .ant-layout-sider-children {
        background-color: #fff;
      }

    }

    &__main {
      padding: 20px;
      margin: 0;
      background-color: #fff;
    }
  }

}

// 覆寫antd
.ant-menu-submenu-title {
  border-bottom: 1px solid rgba(black, 0.05);
}

.ant-menu-inline .ant-menu-submenu-title,
.ant-menu-inline .ant-menu-item,
.ant-menu-inline .ant-menu-item:not(:last-child) {
  margin-bottom: 0px;
  margin-top: 0px;
}

.ant-menu-inline .ant-menu-item::after {
  border-right: 0px;
}

.ant-menu-item-selected {
  color: #fff;

  &:hover {
    color: #fff;
  }
}

.ant-menu:not(.ant-menu-horizontal) .ant-menu-item-selected {
  background-color: #fa6400;
}

// 覆寫antd
.ant-menu-item {
  border-bottom: 1px solid rgba(black, 0.05);
  margin-bottom: 0px;
  margin-top: 0px;
}
</style>
