<style lang="scss" scoped>
.drawer {
  @apply h-screen flex flex-col relative;
  background: #191919;
  min-width: 340px;
  max-width: 340px;
  overflow: hidden;
  &-content {
    @apply flex flex-row;
    &-left {
      @apply flex flex-col;
      .logo {
        height: 26vh;
        margin-top: -10px;
        margin-left: -10px;
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
        @apply flex flex-col w-full items-start;
        padding-left: 0px;
        // border: 1px solid red;
        padding-bottom: 20px;
        &-btn {
          // padding: 10px 10px 10px 0px;
          --color: #efefef;
          // padding-left: 70px;
          @apply flex flex-row items-center cursor-pointer;
          &:hover {
            // background: rgba(255, 255,255, 0.2);
            --color: #cccccc;
          }
          .text {
            color: var(--color);
            font-family: 'TT Commons ExtraBold';
            font-style: normal;
            font-weight: 900;
            font-size: 42px;
            line-height: 42px;
            margin-top: 10px;
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
        .politic {
          // margin-left: 45px;
          // border: 1px solid red;
          // margin-top: 10px;
          // height: 30px;
          position: relative;
          // width: 150px;
          cursor: pointer;
          text-decoration: none;
          // position: absolute;
          white-space: wrap;
          white-space: pre-wrap;       /* css-3 */
          white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
          white-space: -pre-wrap;      /* Opera 4-6 */
          white-space: -o-pre-wrap;    /* Opera 7 */
          word-wrap: break-word;      /* Internet Explorer 5.5+ */
          font-size: 16px;
          color: #efefef;
          line-height: 16px;
          margin-top: 20px;
          &:hover {
            opacity: 0.6;
          }
        }
      }
    }
    .brif-container {
      // border: 1px solid red;
      padding-top: 100px;
      // right: 0;
      @apply relative flex justify-center;
    }
  }
}
</style>

<template lang="pug">
div(ref="drawer").drawer
  .drawer-content
    .drawer-content-left
      div(v-for="(log, logIndex) in 4" :key="logIndex")
        Logo(:color="logIndex === page.id ? page.color : '#efefef'").logo
    .drawer-content-right
      .menu
        div(
          v-for="(route, idx) in $router.options.routes[0].children"
          :style="{background: idx === page.id ? page.color : '', transform: 'rotate(5deg)'}"
          @click="openedBrif = false"
        ).menu-link
          div(style="transform: rotate(-5deg)")
            router-link(:to="route.path")  {{route.name}}
        .socials
          .instagram
          .telegram
          .mail
      .brif
        div(@click="openBrif()").brif-btn
          .text БРИФ
          div(ref="toggle" :style="{background: page.color}").toggle
            div(ref="toggle-ball").ball
        .politic
          a(href="").politic Политика конфиденциальности
    .brif-container
      Brif(v-if="openedBrif")
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
      openedBrif: false,
    }
  },
  computed: {
    page() {
      return this.$store.state.page
    },
  },
  watch: {
    '$route.path': {
      immediate: true,
      async handler(to, from) {
        await this.$nextTick()
        // if (this.openedBrif === false) return
        if (to === '/') {
          console.log('mini', to, from)
          gsap.to(this.$refs.drawer, { minWidth: window.innerWidth / 2 + 'px', duration: 1 })
        } else {
          gsap.to(this.$refs.drawer, { minWidth: '340px', duration: 1 })
        }
      }
    },
    openedBrif: {
      deep: true,
      async handler(to) {
        await this.$nextTick()
        if (to) {
          gsap.to(this.$refs.drawer, { minWidth: window.innerWidth + 'px', duration: 1 })
          gsap.to(this.$refs['toggle-ball'], { left: 'calc(100% - 35px)', duration: 0.5} )
          // gsap.to(this.$refs.toggle, { background: '#', duration: 1} )
          console.log('brif opened')
        } else {
          gsap.to(this.$refs.drawer, { minWidth: '340px', duration: 1 })
          gsap.to(this.$refs['toggle-ball'], { left: '5px', duration: 0.5})
          // gsap.to(this.$refs.toggle, { background: this.page.color, duration: 1})
          console.log('brif closed')
        }
        
      }
    }
  },
  mounted() {
  },
  methods: {
    openBrif() {
      this.openedBrif = !this.openedBrif;
    }
  }
}
</script>