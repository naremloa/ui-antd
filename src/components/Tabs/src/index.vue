<template>
  <a-tabs @change="handleChange">
    <a-tab-pane
      v-for="(tab,i) in tabsArray"
      :key="i"
      :tab="tab.label">
      <slot :name="tab.content" />
    </a-tab-pane>
  </a-tabs>
</template>
<script>
import { Tabs as ATabs } from 'ant-design-vue';
import { isFunction } from '@/utils/lodash';

const ATabPane = ATabs.TabPane;
export default {
  name: 'FeTabs',
  components: { ATabs, ATabPane },
  props: {
    tabsArray: {
      type: Array,
      default: () => [],
    },
    change: {
      type: Function,
      default: null,
    },
  },
  data() {
    return {

    };
  },
  methods: {
    async handleChange(...params) {
      if (isFunction(this.change)) await this.change(...params);
    },
  },
};
</script>
