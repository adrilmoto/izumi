<style lang="scss" scoped>
::-webkit-scrollbar {
 width: 5px;
 height: 5px;
}
::-webkit-scrollbar-thumb {
 background: #ffffff;
 border-radius: 10px;
}
::-webkit-scrollbar-thumb:hover{
 background: #EABE44;
}
::-webkit-scrollbar-track{
 background: #000;
 border-radius: 10px;
//  box-shadow: inset 7px 10px 12px #f0f0f0;
}
.drawer {
  @apply h-screen bg-black z-40;
  width: 180px;
  // border: 1px solid red;
  &-content {
    @apply flex flex-col justify-between items-start py-4 pl-4;
    .top {
      @apply flex flex-row w-full justify-start items-start;
      height: 400px;
      padding-top: 70px;
      .brifing {
        width: 100%;
        height: 800px;
        padding-left: 80px;
        // border: 1px solid red;
        overflow-y: scroll;
      }
      &-logo {
        @apply flex justify-end items-start;
        // background: url('/images/izumi-logo.svg');
        min-width: 100px;
        // padding-right: 20px;
        // border: 1px solid red;
      }
      &-menu {
        @apply flex flex-col w-full h-full overflow-hidden items-start justify-start text-white;
        // border: 1px solid red;
        // margin-left: 20px;
        &-link {
          @apply cursor-pointer text-5xl;
          white-space: nowrap;
          &:hover {
            text-decoration: none ;
            color: rgba(255, 255, 255, 1) !important;
          }
        }
      }
      &-chevron {
        background: url('/images/chevron.svg');
        @apply bg-no-repeat bg-center bg-contain cursor-pointer right-0;
        min-width: 80px;
        height: 70px;
      }
    }
    .bottom {
      @apply absolute;
      bottom: 20px;
      // border: 1px solid red;
      .brif {
        cursor: pointer;
        h1 {
          font-size: 56px;
          margin: 0;
          color: #fff;
        }
      }
      .twinkle-btn {
        margin-bottom: 10px;
        border-radius: 10px;
        width: calc(100% - 10px);
        height: 60px;
        @apply flex flex-row relative;
        border: 5px solid white;
        cursor: pointer;
        &-dot {
          position: absolute;
          width: 50px;
          height: 50px;
          background: white;
          margin-top: 5px;
          left: 10px;
          border-radius: 50%;
        }
      }
    }
  }
}
.links:hover {
  // text-decoration: none !important;
  color: rgba(255, 255, 255, 1) !important;
}
</style>
<template lang="pug">
  div(
    ref="drawer"
  ).drawer
    .drawer-content
      .top
        .top-logo
          Logo(:color="logoColor")
        div(style="width: 40px;")
        div(v-if="brif").brifing
          Brif
        div(v-else).top-menu
          div(v-for="link in links" @click="menuLink(link.path)").top-menu-link
            p(:style="{ textDecoration: link.path === $route.path ? 'none' : 'line-through', color: link.path === $route.path ? 'rgba(255, 255, 255, 1)' : 'rgba(255, 255, 255, 0.6)' }").links {{link.name}}
        div(:style="{ transform: showMenu || showBrif ? 'rotate(180deg)' : 'rotate(0deg)'}" @click="handlerDrawer()").top-chevron
      .bottom
        div(@click="changeTwinkle()").twinkle-btn
          div(ref="twinkle").twinkle-btn-dot
        div(@click="openBrif()").brif
          h1 БРИФ
</template>

<script>
import Logo from '@/components/Logo.vue'
import Brif from '@/components/Brif.vue'
export default {
  name: 'LeftDrawer',
  components: {
    Logo,
    Brif
  },
  data() {
    return {
      showMenu: false,
      showBrif: false,
      brif: false,
      drawerMax: 500,
      drawerMini: 180,
      twinkle: false,
      links: [
        {name: 'О нас', path: '/about'},
        {name: 'Кейсы', path: '/cases'},
        {name: 'Услуги', path: '/services'},
        {name: 'Комьюнити', path: '/faces'},
      ]
    }
  },
  computed: {
    logoColor () {
      if (this.$route.path === '/services') {
        return '#EABE44'
      }
      if (this.$route.path === '/cases') {
        return '#52427a'
      }
      return '#fff'
    }
  },
  watch: {
    twinkle: {
      // immediate: true,
      async handler(to) {
        await this.$nextTick()
        if (to) {
          this.$tween.to(this.$refs.twinkle, 0.5, { left: 'calc(100% - 60px)' })
        } else {
          this.$tween.to(this.$refs.twinkle, 0.5, { left: '10px' })
        }
      }
    },
    showBrif: {
      async handler(to) {
        await this.$nextTick()
        const tl = new this.$timeline()
        if (to === true) {
          // tl.set(this.$refs.drawer, { position: 'fixed'})
          this.brif = !this.brif
          tl.to(this.$refs.drawer, 1, { width: window.innerWidth + 'px' })
          this.$emit('brif')
        } else {
          tl.to(this.$refs.drawer, 2, { width: this.drawerMini + 'px' })
          this.$emit('brif')
          await this.$wait(1800)
          this.brif = !this.brif
          // tl.set(this.$refs.drawer, { position: 'relative'})
        }
      }
    },
    showMenu: {
      // immediate: true,
      async handler(to) {
        await this.$nextTick()
        if (to === true) {
          this.$tween.to(this.$refs.drawer, 0.5, { width: this.drawerMax })
        }
        if (!to && !this.showBrif) {
          this.$tween.to(this.$refs.drawer, 0.5, { width: this.drawerMini })
        }
      }
    }
  },
  mounted() {
    console.log(this.$route)
  },
  methods: {
    async menuLink(link) {
      if (this.showMenu) this.handlerDrawer()
      await this.$wait(500)
      if (this.$route.path !== link) this.$router.push(link)
    },
    handlerDrawer() {
      if (this.showBrif) return this.showBrif = !this.showBrif
      this.showMenu = !this.showMenu
    },
    changeTwinkle() {
      this.twinkle = !this.twinkle
    },
    openBrif() {
      console.log('BRIF')
      if (!this.showBrif) return this.showBrif = !this.showBrif
    }
  }
}
</script>