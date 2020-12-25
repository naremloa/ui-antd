<template>
  <div class="modal-template">
    modal-template
    {{ data }}
  </div>
</template>
<script>
export default {
  name: 'ModalTemplate',
  props: {
    data: {
      type: [String, Array, Object],
      default: '',
    },
  },
};
</script>
