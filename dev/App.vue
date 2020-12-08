<template>
  <div class="app">
    <fe-layout>
      <fe-layout-header>
        管理後台
        <fe-button>按鈕<fe-icon type="down" /></fe-button>
      </fe-layout-header>
      <fe-layout>
        <fe-layout-sider>
          <fe-menu
            :child="[
              { label: 'sub路由1', child:
                [{label: '路由1'}, { label: '路由2', child: [{ label: 'sub路由3' }] }] },
              { label: '路由2' },
              { label: '路由3' },
            ]" />
        </fe-layout-sider>
        <fe-layout-content style="max-width: calc(100vw - 200px)">
          <fe-breadcrumb />
          <Page />
        </fe-layout-content>
      </fe-layout>
    </fe-layout>
  </div>
</template>
<script>
import Page from './Page.vue';

export default {
  name: 'App',
  components: {
    Page,
  },
  data() {
    return {
      input: 'test',
      title: '標題',
    };
  },
  methods: {
    handleClick() {
      this.title = '標題2';
      console.log('click');
    },
  },
};
</script>
<style lang="stylus" scoped>
.app
  display flex
  min-height 100vh
  .ant-layout-content {
    padding: 15px 10px;
  }
  .page
    min-height 2000px

</style>
