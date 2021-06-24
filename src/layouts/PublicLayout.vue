<style lang="scss" scoped>
.layout {
  @apply flex flex-row w-screen justify-start bg-white;
  overflow: hidden !important;
  // max-height: 100vh !important;
  &-content {
    @apply w-full h-screen;
    position: relative;
  }
}
</style>
<template lang="pug">
  div(ref="layout").layout
    LeftDrawer(@brif="brifOpen()" @link="link()" @twinkle="twinkle()")
    div(ref="content").layout-content
      router-view()
</template>
<script>
import LeftDrawer from '@/components/LeftDrawer.vue'
import Services from '@/pages/Services.vue'

export default {
  name: 'PublicLayout',
  components: {
    LeftDrawer,
    Services
  },
  data() {
    return {
      brifOpened: false,
      scrollWidth: null,
      scrollTop: null,
    }
  },
  watch: {
    brifOpened: {
      async handler(to) {
        if (to) {
          // this.$tween.set(this.$refs.content, {  })
          this.$tween.to(this.$refs.content, 1, { width: '0%' })
        } else {
          this.$tween.to(this.$refs.content, 2, { width: '100%' })
        }
      }
    }

  },
  methods: {
    async twinkle() {
      this.$tween.to(this.$refs.layout, 1, { opacity: 0 })
      await this.$wait(1000)
      if (this.$route.path !== '/community') this.$router.push('/community')
      else this.$router.push('/')
      this.$tween.to(this.$refs.layout, 1, { opacity: 1 })
      this.$log('twinkle')
    },
    brifOpen() {
      this.$log('opened')
      this.brifOpened = !this.brifOpened
    },
    async link() {
      this.$tween.set(this.$refs.content, {zIndex: 1})
      this.$tween.to(this.$refs.content, 1, {x: 4000})
      await this.$wait(900)
      this.$tween.set(this.$refs.content, {x: 0})
      this.$tween.from(this.$refs.content, 1, {x: -4000})
      await this.$wait(1000)
      this.$tween.set(this.$refs.content, {zIndex: 10000})
    }
  },
  mounted() {
  }
}
</script>