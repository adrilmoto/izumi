<style lang="scss" scoped>
.layout {
  @apply flex flex-row w-screen justify-start bg-white;
  &-content {
    @apply w-full h-screen overflow-hidden;
    position: relative;
  }
}
::-webkit-scrollbar {
 width: 15px;
 height: 5px;
}
::-webkit-scrollbar-thumb {
 background: #000;
//  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover{
 background: #EABE44;
}
::-webkit-scrollbar-track{
 background: #fff;
 border-radius: 10px;
//  box-shadow: inset 7px 10px 12px #f0f0f0;
}
</style>
<template lang="pug">
  .layout
    LeftDrawer(@brif="brifOpen()")
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
    brifOpen() {
      this.$log('opened')
      this.brifOpened = !this.brifOpened
    },
    scroll() {

      this.$tween.to(this.$refs.content, 1, {scrollTop: 923})
    }
  },
  mounted() {
  }
}
</script>