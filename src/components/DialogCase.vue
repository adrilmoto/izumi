<style lang="scss" scoped>
.opened-case {
  @apply flex fixed w-screen h-screen justify-center items-center;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 10000;
  // margin-top: -37px;
  // margin-left: -150px;
}
.block {
  @apply flex relative justify-start p-2;
  background: white;
  border: 1px solid #eee;
  width: 80%;
  height: 80%;
  .close-wrapper {
    @apply flex justify-start absolute;
    border: 1px solid red;
    .close {
      width: 50px;
      height: 50px;
      background: red;
      cursor: pointer;
    }
  }
  .content {
    width: 100%;
    height: 100%;
    border: 1px solid green;
  }
}
</style>
<template lang="pug">
  .opened-case
    .block.relative
      .close-wrapper
        div(@click="closeCase()").close
      .content
</template>
<script>
export default {
  name: 'CaseDialog',
  props: {
    
  },
  methods: {
    closeCase() {
      this.$emit('close')
    }
  }
}
</script>