<style lang="scss" scoped>
.info {
  @apply w-full h-full;
  position: absolute;
  left: 50%;
  top: 50%;
  background: #efefef;
  box-shadow: 11px 13px 16px 1px rgba(22, 22, 22, 0.15);
  border-radius: 20px;
  width: 0;
  height: 0;
  z-index: 100000;
  // padding: 10px;
  &-content {
    opacity: 0;
    padding: 25px;
    @apply relative flex flex-row;
    .close {
      width: 40px;
      height: 40px;
      top: 10px;
      right: 10px;
      // background: lime;
      outline: none;
      border: none;
      background: url('/images/close.svg');
      @apply absolute cursor-pointer bg-contain bg-center bg-no-repeat;
    }
    .left {
      @apply flex flex-col w-full;
      h1 {
        font-size: 62px;
        margin: 0;
        margin-bottom: 10px;
      }
      h2 {
        font-family: 'TT Commons ExtraBold';
        font-style: normal;
        font-weight: bold;
        font-size: 38px;
        line-height: 42px;
        margin: 0;
        padding: 0;
      }
      p {
        font-family: 'TT Commons Medium';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 22px;
      }
    }
    .right {
      @apply flex w-full;
      padding-top: 80px;
      // padding: 40px 0px;
      .img-container {
        @apply w-full h-full flex justify-center items-center;
        border: 1px solid rgb(78, 78, 78);
      }
    }
  }
}
</style>

<template lang="pug">
  div(ref="el").info
    div(ref="content").info-content
      .left
        h1 {{caseInfo.name}}
        h2(:style="{color: page.color}") Бриф
        p {{caseInfo.brif}}
        h2(:style="{color: page.color}") Креативная идея
        p {{caseInfo.release}}
        h2(:style="{color: page.color}") Реализация
        p {{caseInfo.release}}
        h2(:style="{color: page.color}") Итоги
        p {{caseInfo.release}}
        button(@click="close()").close
      .right
        .img-container
          h1 картинки
</template>

<script>
import gsap from 'gsap'

export default {
  name: 'CaseContent',
  props: {
    caseInfo: {
      type: Object,
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    },
  },
  methods: {
    async open() {
      gsap.to(this.$refs.el, { duration: 0.3, position: 'fixed', top: 'calc(50% - 45vh)', left: 'calc(50% - 45vw)', width: '90vw', height: '90vh'})
      await this.$wait(300)
      gsap.to(this.$refs.content, { duration: 1, opacity: 1,})
    },
    async close() {
      gsap.to(this.$refs.content, { duration: 0.1, opacity: 0,})
      gsap.to(this.$refs.el, { duration: 0.3, top: '50%', left: '50%', width: '0', height: '0'})
      await this.$wait(300)
      this.$emit('close')
    }
  },
  mounted() {
    this.open()
  }
}
</script>
