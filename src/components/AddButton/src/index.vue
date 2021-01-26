<template>
  <button
    class="add-button"
    :class="disabled && 'add-button--disabled'"
    :disabled="disabled"
    @click="handleAddButton">
    <span class="add-button__icon" />
    <span class="add-button__title">{{ title }}</span>
  </button>
</template>
<script>

export default {
  name: 'FeAddButton',
  props: {
    title: {
      type: String,
      default: 'title',
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
    handleAddButton() {
      !this.disabled && this.$emit('click');
    },
  },

};
</script>

<style scoped lang="scss">

.add-button {
  display: inline-flex;
  align-items: center;
  cursor: pointer;
  background-color: transparent;
  border: 0px transparent;
  outline: 0px transparent;

  &--disabled {
    cursor: not-allowed;
    opacity: .5;
  }

  &__icon {
    display: inline-block;
    width: 16px;
    height: 16px;
    border-radius: 8px;
    background-color: #000;
    margin-right: 3px;
    position: relative;

    &::before {
      content: '';
      width: 10px;
      height: 1.2px;
      background-color: #fff;
      position: absolute;
      top:50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }

    &::after {
      content: '';
      width: 1.2px;
      height: 10px;
      background-color: #fff;
      position: absolute;
      top:50%;
      left: 50%;
      transform:  translate(-50%, -50%);
    }
  }
}

</style>
