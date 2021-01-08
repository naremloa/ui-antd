<template>
  <div class="ly__header">
    <div class="ly__header__content">
      <div class="ly__header__content__left">
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
};
</script>

<style lang="scss" scoped>

</style>
