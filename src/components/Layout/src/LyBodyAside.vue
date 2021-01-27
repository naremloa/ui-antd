<template>
  <div
    class="ly__body__aside"
    :class="hbgState && 'ly__body__aside--open'">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'LyBody',
  props: {
    hbgState: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
