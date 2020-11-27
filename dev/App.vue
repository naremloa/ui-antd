<template>
  <div class="app">
    <fe-layout>
      <fe-layout-header>
        Header
        <fe-button>按鈕</fe-button>
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
        <fe-layout-content>
          <div class="page">
            Page
          </div>
        </fe-layout-content>
      </fe-layout>
    </fe-layout>
  </div>
</template>
<script>
export default {
  name: 'App',
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
  .fe-menu
    color red
  .page
    color black
    background-color  yellow
    min-height 2000px
</style>
