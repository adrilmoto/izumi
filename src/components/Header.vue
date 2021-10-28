<style lang="scss" scoped>
.header {
  @apply flex fixed w-full top-0;
  background: #191919;
  // height: 50px;
  z-index: 10000;
  display: none;
  &-content {
    @apply flex flex-row w-full items-center justify-between;
    padding: 10px;
    .btn-menu {
      background: url('/images/menu.svg');
      width: 30px;
      height: 30px;
      outline: none;
      border: none;
      @apply bg-center bg-contain bg-no-repeat cursor-pointer;
    }
  }
  .menu {
    @apply w-screen h-screen absolute;
    background: #efefef;
    padding-top: 70px;
    .close {
      width: 40px;
      height: 40px;
      background: url('/images/close.svg');
      @apply absolute right-2 top-2 bg-center bg-no-repeat bg-contain;
      // border: 1px solid red;
      cursor: pointer;
      outline: none;
      border: none;
      &:focus {
        outline: none;
      }
      &:hover {
        transform: scale(1.05)
      }
    }
    &-link {
      padding: 10px 0px;
      @apply flex justify-center;
      text-decoration: none;
      font-size: 44px;
      font-family: "TT Commons ExtraBold";
      cursor: pointer;
      color: #191919;
      &:hover {
        opacity: 0.6;
      }
    }
    .socials-btns {
      @apply flex flex-row justify-center space-x-5;
      margin-top: 30px;
      z-index: 10000;
      // padding-left: 40px;
      // border: 1px solid red;
      .telegram {
        width: 30px;
        height: 30px;
        background: url('/images/icons/telegram_black.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
      .mail {
        width: 30px;
        height: 30px;
        background: url('/images/icons/mail_black.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
      .instagram {
        min-width: 30px;
        min-height: 30px;
        background-image: url('/images/icons/instagram_black.svg');
        // border: 1px solid red;
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
    }
  }
}
</style>
<template lang="pug">
.header
  .header-content
    LogoMobile
    button(@click="toggleMenu()").btn-menu
  div(v-if="showMenu").menu
    button(@click="toggleMenu()").close
    div(v-for="(route, idx) in $router.options.routes[0].children" @click="link(route.path)").menu-link {{route.name}}
    div(@click="brifopen()").menu-link БРИФ
    .socials-btns
      a(href="https://instagram.com/voice.tag?utm_medium=copy_link" target="_blank").instagram
      a(href="https://t.me/VOiCETAG" target="_blank").telegram
      a(href="mailto:izumi.branding@gmail.com").mail
  Brif(v-if="openedBrif" @close="brifopen(), toggleMenu()")
</template>

<script>
import LogoMobile from '@/components/LogoMobile.vue'
import Brif from '@/components/Brif.vue'

export default {
  name: 'Header',
  components: {
    LogoMobile,
    Brif,
  },
  data() {
    return {
      showMenu: false,
      openedBrif: false,
    }
  },
  watch: {
    '$route.path': {
      handler(to) {
        if (to)
          this.showMenu = !this.showMenu
      }
    }
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu
    },
    link(path) {
      if (this.$route.path === path) {
        this.toggleMenu()
        return
      }
      this.$router.push(path)
    },
    brifopen() {
      this.openedBrif = !this.openedBrif
    }
  }
}
</script>