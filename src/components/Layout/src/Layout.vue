<template>
  <layout>
    <slot />
  </layout>
</template>
<script>
import { Layout } from 'ant-design-vue';

export default {
  name: 'FeLayout',
  components: { Layout },
};
</script>
