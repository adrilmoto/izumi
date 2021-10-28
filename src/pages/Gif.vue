<style lang="scss" scoped>
.page {
  background: url('/images/ponch.gif'), linear-gradient(180deg, rgba(177,181,181,1) 39%, rgba(170,174,174,1) 62%);
  overflow: hidden;
  @apply h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover;
  .menu {
    @apply flex flex-row justify-center absolute space-x-2;
    bottom: 10vh;
    // border: 1px solid red;
    // display: none;
    white-space: nowrap;
    // font-size: 20px;
    font-size: 24px;
    font-family: "TT Commons ExtraBold";
    font-weight: 700;
    // padding: 0px 20px;
  }
}
@media screen and (max-width: 768px) {
  .page {
    background-size: 140%;
    // @apply bg-contain;
    // @apply bg-contain;
    .menu {
      // display: flex;
      margin: 0px 20px;
      font-size: 18px;
      width: calc(100% - 40px);
      @apply flex-col space-x-0 space-y-4 items-center;
      // font-size: 16px;
    }
  }
}
</style>
<template lang="pug">
  .page
    .menu
      div(v-for="(aim, idx) in aims" :key="idx").menu-link {{aim}}
</template>
<script>
export default {
  name: 'Gif',
  data() {
    return {
      aims: [
        'Баланс', 'Эксперимент', 'Критическое мышление',
      ]
    }
  },
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