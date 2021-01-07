<template>
  <p
    class="cus-title"
    :class="type && `cus-title-${type}`">
    {{ title }}
  </p>
</template>

<script>

export default {
  name: 'ModalBodyTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      type: String,
      default: '',
    },
  },

};
</script>

<style scoped >

.cus-title {
  margin-bottom: 10px;
}

.cus-title-modal {
  font-size: 18px;
  font-weight: 500;
  color: #333333;

}
</style>
