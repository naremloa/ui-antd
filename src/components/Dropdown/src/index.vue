<template>
  <a-dropdown
    ref="dropdown"
    v-bind="$attrs"
    class="fe-dropdown">
    <a
      class="ant-dropdown-link"
      @click="e => e.preventDefault()"> {{ dropdownTitle }}
      <fe-icon type="down" />
    </a>
    <template #overlay>
      <a-menu>
        <a-menu-item
          v-for="(item,i) in dropdownList"
          :key="i"
          @click="item.clickFunc">
          {{ item.label }}
        </a-menu-item>
      </a-menu>
    </template>
  </a-dropdown>
</template>
<script>
import { Dropdown as ADropdown, Menu as AMenu } from 'ant-design-vue';

const AMenuItem = AMenu.Item;
export default {
  name: 'FeDropdown',
  components: {
    ADropdown, AMenuItem, AMenu,
  },
  props: {
    dropdownTitle: {
      type: String,
      default: '',
    },
    dropdownList: {
      type: Array,
      default: () => [],
    },
  },
};
</script>
