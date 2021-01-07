<template>
  <div
    class="sk-row"
    :class="`sk-row--${direction}`"
    :style="`margin-top: ${mgt}; margin-bottom: ${mgb}`">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'SkeletonRow',
  props: {
    direction: {
      type: String,
      default: 'left',
    },
    // margin-top
    mgt: {
      type: String,
      default: '0px',
    },
    // margin-bottom
    mgb: {
      type: String,
      default: '0px',
    },

  },
};
</script>

<style lang="scss" scoped>
.sk-row {
  display: flex;
  align-items: center;

  &--left{
    justify-content: flex-start;

  }

  &--right{
    justify-content: flex-end;

  }
}

</style>
