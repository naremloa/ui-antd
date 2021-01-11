<template>
  <p
    class="add-button"
    @click="handleAddButton">
    <span class="add-button__icon" />
    <span class="add-button__title">{{ title }}</span>
  </p>
</template>
<script>

export default {
  name: 'FeAddButton',

  props: {
    title: {
      type: String,
      default: 'title',
    },
  },
  methods: {
    handleAddButton() {
      this.$emit('click');
    },
  },

};
</script>

<style scoped lang="scss">

.add-button {
  display: inline-flex;
  align-items: center;
  cursor: pointer;

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
