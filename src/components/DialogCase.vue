<style lang="scss" scoped>
.opened-case {
  @apply flex fixed w-screen h-screen justify-center items-center;
  top: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 100000;
}
.block {
  @apply flex relative justify-start p-2;
  background: white;
  border: 1px solid #eee;
  width: 80%;
  height: 80%;
  .close-wrapper {
    @apply flex justify-start absolute;
    .close {
      width: 40px;
      height: 40px;
      background: url('/images/close.svg');
      @apply bg-center bg-no-repeat bg-contain;
      // border: 1px solid red;
      cursor: pointer;
      &:hover {
        transform: scale(1.05)
      }
    }
  }
  .content {
    width: 100%;
    height: 100%;
    @apply p-2;
    // border: 1px solid green;
    padding-top: 50px;
  }
}
</style>
<template lang="pug">
  div(ref="dialog").opened-case
    div(ref="block").block.relative
      .close-wrapper
        div(@click="closeCase()").close
      .content
        h3 Бриф
        p {{dialogInfo.brif}}
        h3 Креативная идея
        p {{dialogInfo.creative}}
        h3 Реализация
        p {{dialogInfo.release}}
        h3 Итоги
        p {{dialogInfo.results}}
</template>
<script>
export default {
  name: 'CaseDialog',
  props: {
    dialogInfo: {
      type: Object,
    }
  },
  methods: {
    async closeCase() {
      this.$tween.to(this.$refs.dialog, {opacity: 0})
      this.$tween.to(this.$refs.block, 1, { y: 2000 })
      await this.$wait(500)
      this.$emit('close')
    }
  },
  async mounted() {
    this.$tween.set(this.$refs.block, { y: 5000 })
    this.$tween.from(this.$refs.dialog, 0.5, {opacity: 0})
    // await this.$wait(300)
    this.$tween.to(this.$refs.block, 0.5, { y: 0 })
  }
}
</script>