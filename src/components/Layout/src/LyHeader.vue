<template>
  <div class="ly__header">
    <div class="ly__header__content">
      <div class="ly__header__content__left">
        <fe-icon
          type="menu"
          class="ly__hbg-icon"
          @click="handleHbg" />
        <slot name="header-left" />
      </div>
      <div class="ly__header__content__right">
        <slot name="header-right" />
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'LyHeader',
  methods: {
    handleHbg() {
      this.$emit('handle-hbg', true);
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
