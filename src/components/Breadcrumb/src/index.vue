<template>
  <a-breadcrumb>
    <a-breadcrumb-item><fe-icon type="home" /></a-breadcrumb-item>
    <a-breadcrumb-item>報表管理</a-breadcrumb-item>
    <a-breadcrumb-item>日報表管理</a-breadcrumb-item>
  </a-breadcrumb>
</template>
<script>
import { Breadcrumb } from 'ant-design-vue';
import { FeIcon } from '@/components/Icon';

export default {
  name: 'FeBreadcrumb',
  components: {
    ABreadcrumb: Breadcrumb,
    ABreadcrumbItem: Breadcrumb.Item,
    FeIcon,
  },
  props: {
    items: {
      default: () => [],
      type: Array,
    },
  },
};
</script>
