<style lang="scss" scoped>
.drawer {
  @apply h-screen flex flex-col relative;
  background: #191919;
  min-width: 340px;
  max-width: 340px;
  // height: 100vh;
  overflow: hidden;
  &-content {
    @apply flex flex-row h-screen;
    &-left {
      @apply flex flex-col relative justify-start items-start;
      // max-height: 100vh;
      max-height: 100vh;
      height: 100%;
      max-width: 140px;
      // border: 1px solid red;
      .logos {
        height: 26%;
        aspect-ratio: 1/3.3;
        // width: 100%;
        // border: 1px solid red;
        margin-top: -10%;
        // padding-bottom: 1vh;
        // margin-left: -10px;
        position: relative;
        // background: url('/images/logo-izumi.svg');
        // overflow: hidden;
        // max-width: 80px;
        // border: 1px solid red;
      }
    }
    &-right {
      @apply flex flex-col justify-between items-start;
      .menu {
        @apply flex flex-col items-start;
        padding-top: 50px;
        // background: #191919;
        // z-index: 100;
        white-space: nowrap;
        &-link {
          padding: 10px 50px 10px 40px;
          margin-left: 0px;
          margin-right: 0px;
          cursor: pointer;
          text-decoration: none;
          a {
            text-decoration: none;
            font-size: 34px;
            font-family: "TT Commons ExtraBold";
            font-weight: 700;
            color: #efefef;
          }
          &:hover {
            opacity: 0.8;
          }
        }
        .socials {
          @apply flex flex-row justify-start space-x-5;
          margin-top: 30px;
          padding-left: 40px;
          .telegram {
            width: 30px;
            height: 30px;
            background: url('/images/icons/telegram.svg');
            @apply bg-center bg-contain bg-no-repeat cursor-pointer;
            &:hover {
              transform: scale(0.9);
            }
          }
          .mail {
            width: 30px;
            height: 30px;
            background: url('/images/icons/mail.svg');
            @apply bg-center bg-contain bg-no-repeat cursor-pointer;
            &:hover {
              transform: scale(0.9);
            }
          }
          .instagram {
            width: 30px;
            height: 30px;
            background: url('/images/icons/instagram.svg');
            @apply bg-center bg-contain bg-no-repeat cursor-pointer;
            &:hover {
              transform: scale(0.9);
            }
          }
        }
      }
      .brif {
        @apply flex flex-col w-full items-start justify-center;
        padding-left: 0px;
        // border: 1px solid red;
        // bottom: 0;
        margin-bottom: 50px;
        &-btn {
          // padding: 10px 10px 10px 0px;
          --color: #efefef;
          // padding-left: 70px;
          @apply flex flex-row items-center cursor-pointer;
          &:hover {
            // background: rgba(255, 255,255, 0.2);
            opacity: 0.6;
          }
          .text {
            color: var(--color);
            font-family: 'TT Commons ExtraBold';
            font-style: normal;
            font-weight: 900;
            font-size: 42px;
            line-height: 42px;
            // margin-top: 10px;
            // border: 1px solid red;
          }
          .toggle {
            border: 6px solid var(--color);
            width: 87px;
            height: 42px;
            border-radius: 15px;
            margin-left: 10px;
            position: relative;
            @apply flex items-center;
            .ball {
              position: absolute;
              left: 5px;
              --size: 30px;
              height: var(--size);
              width: var(--size);
              border-radius: 50%;
              background: var(--color);
            }
          }
        }
      }
    }
    .brif-container {
      // border: 1px solid red;
      padding-top: 100px;
      position: relative !important;
      // right: 0;
      @apply flex justify-center w-full overflow-hidden;
      .brif {
        position: absolute;
        left: calc(50% - 80px);
        transform: translate(-50%, 0%);
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .drawer {
    &-content {
      .brif-container {
        .brif {
          left: 50%;
        }
      }
    }
  }
}
</style>

<template lang="pug">
div(ref="drawer").drawer
  .drawer-content
    .drawer-content-left
      div(
        v-for="(r, ri) in $router.options.routes[0].children"
        v-if="r.meta.name"
        :key="r.path"
        :style="{cursor: 'pointer'}"
        @click="$router.push(r.path).catch(e => {})").logos
        Logo(:color="r.path === route.path ? r.meta.color : r.path === '/cases' && !route.meta.color ? '#CE5236' : '#efefef'")
    .drawer-content-right
      .menu
        div(
          v-for="(r, ri) in $router.options.routes[0].children"
          v-if="r.meta.name"
          :key="r.path"
          @click="$router.push(r.path).catch(e => {}), $store.dispatch('opneBrif', false)"
          :style="{background: r.path === route.path ? r.meta.color : r.path === '/cases' && !route.meta.color ? '#CE5236' : 'none', transform: 'rotate(5deg)'}"
          ).menu-link
          div(style="transform: rotate(-5deg)")
            a {{r.meta.name}}
        div(v-if="metaAbout").socials
          a(:href="metaAbout.link_instagram" target="_blank").instagram
          a(:href="metaAbout.link_telegram" target="_blank").telegram
          a(:href="metaAbout.link_email" target="_blank").mail
      .brif
        div(@click="openBrif()").brif-btn
          div(ref="toggleText").text БРИФ
          div(ref="toggle" :style="{background: route.meta.color}").toggle
            div(ref="toggle-ball").ball
    .brif-container
      Brif(v-if="brif").brif
</template>

<script>
import Logo from '@/components/Logo.vue'
import Chevron from '@/components/Chevron.vue'
import Brif from '@/components/Brif.vue'
import gsap from 'gsap'

export default {
  name: 'LeftDrawer',
  components: {
    Logo,
    Chevron,
    Brif,
  },
  data() {
    return {
    }
  },
  computed: {
    // highlightCalculate() {
    // },
    route() {
      return this.$route
    },
    page() {
      return this.$store.state.page
    },
    metaAbout () {
      return this.$store.state.metaAbout
    },
    brif () {
      return this.$store.state.openedBrif
    }
  },
  watch: {
    '$route.path': {
      immediate: true,
      async handler(to, from) {
        await this.$nextTick()
        if (to === '/') {
          console.log('mini', to, from)
          gsap.to(this.$refs.drawer, { minWidth: window.innerWidth / 2 + 'px', duration: 1 })
        } else {
          gsap.to(this.$refs.drawer, { minWidth: '340px', duration: 1 })
        }
      }
    },
    brif: {
      deep: true,
      async handler(to) {
        await this.$nextTick()
        if (to) {
          gsap.to(this.$refs.drawer, { minWidth: window.innerWidth + 'px', duration: 1 })
          gsap.to(this.$refs['toggle-ball'], { background: this.$route.meta.color, left: 'calc(100% - 35px)', duration: 0.5} )
          gsap.to(this.$refs.toggle, { border: `6px solid ${this.$route.meta.color}`, background: 'none', duration: 0.5} )
          gsap.to(this.$refs.toggleText, { color: this.$route.meta.color, duration: 0.5 })
          console.log('brif opened')
        } else {
          gsap.to(this.$refs.drawer, { minWidth: '340px', duration: 1 })
          gsap.to(this.$refs['toggle-ball'], { background: '#efefef', left: '5px', duration: 0.5})
          gsap.to(this.$refs.toggle, { border: `6px solid #efefef`, background: this.$route.meta.color, duration: 0.5})
          gsap.to(this.$refs.toggleText, { color: '#efefef', duration: 0.5 })
          console.log('brif closed')
        }
        
      }
    }
  },
  mounted() {
  },
  methods: {
    async openBrif() {
      console.log('open')
      if (!this.brif) {
        await this.$store.dispatch('openBrif', true)
      } else {
        await this.$store.dispatch('openBrif', false)
      }
    }
  }
}
</script>