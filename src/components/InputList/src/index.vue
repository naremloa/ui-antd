<template>
  <div
    class="fe-input-list"
    :class="$attrs.class"
    :style="$attrs.style">
    <fe-form-item
      v-for="(v, index) in items"
      :key="index"
      :rules="rules"
      :prop="`${prop}[${index}]`">
      <fe-input
        v-model="items[index]"
        :placeholder="placeholder"
        :style="{ width }" />
      <span class="fe-input-list-icon-box">
        <fe-icon
          :type="
            index === items.length - 1 && index === 0
              ? 'plus-circle-o'
              : 'minus-circle-o'
          "
          @click="
            index === items.length - 1 && index === 0
              ? addItem()
              : removeItem(index)
          " />
        <fe-icon
          v-if="index === items.length - 1 && index != 0"
          :type="
            index === items.length - 1 ? 'plus-circle-o' : 'minus-circle-o'
          "
          @click="index === items.length - 1 ? addItem() : removeItem(index)" />
      </span>
    </fe-form-item>
  </div>
</template>

<script>
export default {
  name: 'FeInputList',
  props: {
    placeholder: {
      type: String,
      default: '',
    },
    width: {
      type: String,
      default: '',
    },
    rules: {
      type: Array,
      default: () => [],
    },
    prop: {
      type: String,
      default: '',
    },
    value: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      items: [''],
    };
  },
  watch: {
    value(val) {
      this.items = val;
    },
    items(val) {
      this.$emit('input', val);
    },
  },
  methods: {
    addItem() {
      this.items.push('');
    },
    removeItem(index) {
      this.items.splice(index, 1);
    },
  },
};
</script>

<style lang="scss">
.fe-input-list {
  color: #fff;
  .ant-form-item {
    &:last-child{
      margin-bottom: 0;
    }
  }

  .ant-form-item .ant-form-item-children {
    display: flex;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;

    .fe-input-list-icon-box {
      flex: 0 0 40px;
      display: inline-flex;
      .anticon {
        margin-left: 4px;
      }
    }
  }
}
</style>
