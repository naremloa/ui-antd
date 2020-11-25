<template>
  <div class="app">
    <div>{{ title }}</div>
    <fe-button @click="handleClick">
      測試
    </fe-button>
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
  div
    color red
  button
    color yellow
</style>
