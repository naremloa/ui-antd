<template>
  <a-button v-on="$listeners">
    <slot />
  </a-button>
</template>
<script>
import { Button as AButton } from 'ant-design-vue';

export default {
  name: 'Button',
  components: { AButton },
};
</script>
