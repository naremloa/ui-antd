<template>
  <p
    class="fe-title"
    :class="className">
    {{ title }}
  </p>
</template>

<script>

export default {
  name: 'FeTitle',
  props: {
    title: {
      type: String,
      default: '',
    },
    type: {
      required: true,
      type: String,
      validator: (value) => ['login', 'modal', 'form', 'table'].includes(value),
    },
    display: {
      type: String,
      default: 'block',
    },
  },
  data() {
    return {
      className: '',
    };
  },
  created() {
    this.setClass();
  },
  methods: {
    setClass() {
      if (this.type) {
        this.className = `fe-title__${this.type}`;
      }

      if (this.display === 'inline') {
        this.className += ' fe-title--inline';
      }
    },
  },

};
</script>
