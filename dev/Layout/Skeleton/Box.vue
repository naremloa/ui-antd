<template>
  <div
    class="sk-box"
    :style="`padding: ${pd};`">
    <slot />
  </div>
</template>

<script>

export default {
  name: 'SkeletonRow',
  props: {
    // margin-top
    mgt: {
      type: String,
      default: '0px',
    },
    // margin-bottom
    mgb: {
      type: String,
      default: '0px',
    },
    pd: {
      type: String,
      default: '15px',
      // validator: (val) => {
      //   console.log('pd val', val);
      //   if (this.pdt !== '' || this.pdb !== '' || this.pdl !== '' || this.pdr !== '') {
      //     return false;
      //   }

      //   return true;
      // },
    },
    // padding-top
    // pdt: {
    //   type: String,
    //   default: '',
    // },
    // // padding-bottom
    // pdb: {
    //   type: String,
    //   default: '',
    // },
    // // padding-right
    // pdr: {
    //   type: String,
    //   default: '',
    // },
    // // padding-left
    // pdl: {
    //   type: String,
    //   default: '',
    // },

  },
};
</script>

<style lang="scss" scoped>
.sk-box {
  box-sizing: border-box;
  border-radius: 4px;
  background-color: #fff;
  margin-bottom: 20px;
}

</style>
