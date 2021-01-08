<template>
  <div class="fe-title">
    <div class="fe-title__title">
      <p
        class="title-text"
        :class="type && `title-text__${type}`">
        {{ title }}
      </p>
      <div
        class="left-extra">
        <slot name="left-extra" />
      </div>
    </div>
    <div
      class="right-extra">
      <slot name="right-extra" />
    </div>
  </div>
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
  },

};
</script>

<style scoped lang="scss">

.fe-title {
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &__title {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }
}

.title-text {
  display: inline-block;
  vertical-align: middle;
  margin: 0;

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
}

.left-extra {
  display: inline-block;
  margin-left: 10px;

}

</style>
