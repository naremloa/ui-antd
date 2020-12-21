<template>
  <div class="app">
    <router-view />
  </div>
</template>
<script>

export default {
  name: 'App',
};
</script>
<style lang="stylus" scoped>
.app
  display flex
  min-height 100vh
  .ant-layout-content {
    padding: 15px 10px;
  }
</style>
