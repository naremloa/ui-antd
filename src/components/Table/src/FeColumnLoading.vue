<template>
  <fe-row
    class="fe-column-loading"
    type="flex"
    justify="center">
    <a-skeleton
      active
      :title="false"
      :paragraph="{
        rows: 1,
        width: '100%'
      }" />
  </fe-row>
</template>
<script>
import { Skeleton as ASkeleton } from 'ant-design-vue';

export default {
  name: 'FeColumnLoading',
  components: { ASkeleton },
};
</script>
<style lang="less" scoped>
.fe-column-loading {
  height: 35px;
  margin: -10px -10px -13px -10px;
  .ant-skeleton {
    /deep/ .ant-skeleton-paragraph li {
      height: 35px
    }
  }
}
</style>
