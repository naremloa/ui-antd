<template>
  <div>
    <fe-add-button
      :disabled="isDisabled"
      title="增加按鈕" />
    <fe-add-button
      title="增加按鈕 disabled" />
  </div>
</template>

<script>

export default {
  name: 'Button',
  data() {
    return {
      isDisabled: false,
    };
  },
  created() {
    setTimeout(() => {
      this.isDisabled = true;
    }, 1500);
  },
};
</script>
