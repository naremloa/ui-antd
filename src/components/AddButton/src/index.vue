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
