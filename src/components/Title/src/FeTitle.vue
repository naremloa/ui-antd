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
      type: String,
      default: '',
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

<style scoped lang="scss">

.fe-title {
  margin-bottom: 10px;

  &--inline {
    display: inline-block;
  }

  &__modal {
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }

  &__table {
    font-size: 18px;
    font-weight: 500;
    color: #333333;
  }

  &__login {
    display: inline-block;
    margin: 0px auto 80px;
    border: 0;
    border-bottom: 3px solid;
    border-image-source: linea r-gradient(to right, #003956, #003956);
    border-image-slice: 1;
    font-weight: 500;
    font-size: 32px;
  }
}

</style>
