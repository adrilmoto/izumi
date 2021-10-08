<style lang="scss" scoped>
.page {
  background: url('/images/ponch.gif'), #b0b5b4;
  overflow: hidden;
  @apply h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover;
  .menu {
    @apply flex flex-row absolute space-x-2;
    bottom: 10vh;
    display: none;
    font-size: 20px;
  }
}
@media screen and (max-width: 768px) {
  .page {
    // background-size: 70%;
    // @apply bg-contain;
    .menu {
      display: flex;
    }
  }
}
</style>
<template lang="pug">
  .page
    //- .menu
    //-   div(v-for="(route, idx) in $router.options.routes[0].children" @click="link(route.path)").menu-link {{route.name}}
</template>
<script>
export default {
  name: 'Gif',
  methods: {
    link(path) {
      if (this.$route.path === path) {
        return
      }
      this.$router.push(path)
    },
  }
}
</script>