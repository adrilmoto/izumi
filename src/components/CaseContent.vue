<style lang="scss" scoped>
::-webkit-scrollbar-thumb {
  background-color: #191919;
  border-radius: 100px;
  border-top: none;
  //  box-shadow: inset 0 59px 0px #efefef;
  border-right: none;
  //  outline: 1px solid #efefef;
    @apply relative;
}
.info {
  @apply w-full h-full;
  position: absolute;
  left: 50%;
  overflow: hidden;
  padding-right: 10px;
  top: 50%;
  background: #efefef;
  box-shadow: 11px 13px 16px 10px rgba(22, 22, 22, 0.15);
  border-radius: 20px;
  border: 1px solid #eee;
  width: 0;
  height: 0;
  max-width: 90vw;
  max-height: 90vh;
  transform: translate(-50%, -50%);
  z-index: 100000;
  // padding: 10px;
  .header {
    @apply flex flex-row justify-between items-center;
    // padding: 10px 10px;
    padding: 0px 20px;
    // border: 1px solid red;
    .close {
      width: 40px;
      height: 40px;
      z-index: 9999;
      opacity: 0.6;
      right: 0;
      background-color: lime;
      outline: none;
      border: none;
      background: url('/images/close.svg');
      @apply relative cursor-pointer bg-contain bg-center bg-no-repeat;
      &:hover {
        opacity: 1;
      }
    }
    h1 {
      font-size: 62px;
      line-height: 120%;
      margin: 0;
      margin-top: 10px;
      padding: 0;
    }
  }
  &-content {
    overflow-y: scroll !important;
    max-height: 700px;
    height: 100%;
    border: 1px solid red;
    opacity: 0;
    padding: 0px 25px;
    // padding-bottom: 50px;
    @apply flex flex-row;
    .left {
      @apply flex flex-col relative w-full;
      // padding-top: 30px;
      // height: 100%;
      border: 1px solid red;
      // padding-bottom: 100px;
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
      a {
        text-decoration: underline;
        font-size: 22px;
        @apply self-start;
        color: #191919;
      }
    }
    .right {
      @apply flex w-full;
      max-width: 600px;
      // padding-top: 80px;
      // padding: 40px 0px;
      .img-container {
        @apply w-full flex justify-center items-center;
        border: 1px solid rgb(78, 78, 78);
        background: rgba(0,0,0,0.4);
        border-radius: 10px;
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .info {
    border-radius: 0;
    max-width: 100vw;
    max-height: 100vh;
    overflow-y: scroll;
    overflow-x: hidden;
    -webkit-overflow-scrolling: touch;
    .info-content {
      @apply flex-col;
      padding: 10px;
      padding-right: 40px !important;
      
      .left {
        h1 {
          margin-top: -35px;
          font-size: 34px;
        }
        h2 {
          font-size: 28px;
        }
        p {
          font-size: 18px;
        }
      }
    }
  }
}
</style>

<template lang="pug">
div(ref="el").info
  .header
    h1 {{caseInfo.name}}
    button(@click="close()").close
  div(ref="content" v-if="opened").info-content
    .content-block
      .left 
        h2(:style="{color: page.color}") Бриф
        p {{caseInfo.brif}}
        h2(:style="{color: page.color}") Креативная идея
        p {{caseInfo.creative}}
      .right
        div(style="background: url('')").img-container
    .content-block
      h2(:style="{color: page.color}") Реализация
      p {{caseInfo.release}}
      h2(:style="{color: page.color}") Итоги
      p {{caseInfo.results}}
      h2(:style="{color: page.color}") Ссылки
      a(v-for="link in caseInfo.links" :href="link.url" target="_blanck") {{link.name}}
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
  data() {
    return {
      opened: false,
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    },
  },
  methods: {
    async open() {
      this.opened = true
      gsap.to(this.$refs.el, { duration: 0.3, position: 'fixed', top: '50%', left: '50%', width: '100%', height: '100%'})
      await this.$wait(300)
      gsap.to(this.$refs.content, { duration: 0.2, opacity: 1,})
    },
    async close() {
      this.opened = false
      gsap.to(this.$refs.el, { duration: 0, opacity: 0, width: '200%', height: '200%'})
      await this.$wait(300)
      this.$emit('close')
    }
  },
  mounted() {
    this.open()
  }
}
</script>
