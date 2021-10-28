<style lang="scss" scoped>
.layout {
  @apply flex flex-row w-screen justify-start;
  // overflow: hidden !important;
  // max-height: 100vh !important;
  &-content {
    @apply w-full h-screen;
    display: block !important;
    max-width: calc(100% - 340px);
    position: relative;
  }
}
.desktop {
  display: inherit;
}
.mobile {
  display: none;
}
.left-block {
  width: 150px;
  height: calc(100vh - 40px);
  padding: 20px 0px;
  background: #efefef;
  @apply fixed right-0 flex flex-col justify-between items-center;
  p {
    font-family: 'TT Commons ExtraBold';
    font-style: normal;
    font-weight: 900;
    font-size: 30px;
    line-height: 35px;
    text-align: center;
  }
}
@media screen and (max-width: 1300px) {
  .left-block {
    display: none;
  }
}
@media screen and (max-width: 1100px) {
  .layout {
    &-content {
      max-width: calc(100vw);
    }
  }
  .desktop {
    display: none;
  }
  .mobile {
    display: inherit;
  }
}
</style>
<template lang="pug">
div(ref="layout").layout
  LeftDrawer().desktop
  Header().mobile
  div(ref="content" :style="{ overflowY: $route.path !== '/' ? 'scroll' : 'hidden' }").layout-content
    router-view()
  div(v-if="$route.path !== '/'").left-block
    p {{route}}
    LogoMobile(color="#191919")
</template>
<script>
import LeftDrawer from '@/components/LeftDrawer.vue'
import Header from '@/components/Header.vue'
import Services from '@/pages/Services.vue'
import LogoMobile from '@/components/LogoMobile.vue'

export default {
  name: 'PublicLayout',
  components: {
    LeftDrawer,
    Services,
    Header,
    LogoMobile,
  },
  data() {
    return {
      scrollWidth: null,
      scrollTop: null,
    }
  },
  // watch: {
  //   '$route.path': {
  //     immediate: true,
  //     handler(to) {
  //       this.$store.dispatch('setColor', to)
  //     }
  //   }
  // },
  computed: {
    route() {
      return this.$route.name
    }
  },
  mounted() {
  }
}
</script>