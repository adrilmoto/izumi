<style lang="scss" scoped>
.header {
  @apply flex fixed w-full top-0;
  background: #191919;
  // height: 50px;
  z-index: 10000;
  display: none;
  &-content {
    @apply flex flex-row items-center justify-between;
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
    padding-top: 50px;
    &-link {
      padding: 10px 0px;
      @apply flex justify-center;
      a {
        text-decoration: none;
        font-size: 44px;
        font-family: "TT Commons ExtraBold";
        cursor: pointer;
        &:hover {
          opacity: 0.6;
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
      div(v-for="(route, idx) in $router.options.routes[0].children").menu-link
        router-link(:to="route.path" :style="{color: '#191919'}")  {{route.name}}
</template>

<script>
import LogoMobile from '@/components/LogoMobile.vue'

export default {
  name: 'Header',
  components: {
    LogoMobile
  },
  data() {
    return {
      showMenu: false,
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
    }
  }
}
</script>