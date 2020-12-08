<template>
  <layout-header :style="headerStyle">
    <slot />
  </layout-header>
</template>
<script>
import { Layout } from 'ant-design-vue';

const { Header } = Layout;

export default {
  name: 'FeLayoutHeader',
  components: { LayoutHeader: Header },
  data() {
    return {
      headerStyle: {
        // position: 'fixed',
        // zIndex: 1,
        // width: '100%',
      },
    };
  },
};
</script>
