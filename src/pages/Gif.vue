<style lang="scss" scoped>
.page {
  background: url('/images/ponch.gif'), linear-gradient(180deg, rgba(177,181,181,1) 39%, rgba(170,174,174,1) 62%);
  overflow: hidden;
  border: 1px solid red;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  @apply h-screen flex justify-center items-center bg-center bg-no-repeat bg-cover;
  .route-name {
    @apply absolute;
    font-family: 'TT Commons ExtraBold';
    right: 40px;
    font-size: 36px;
    color: #626294;
    padding: 0 20px;
    top: 60px;
  }
  .menu {
    @apply flex flex-row flex-wrap justify-center absolute w-full;
    bottom: 50px;
    right: 40px;
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
    .route-name {
      display: none;
    }
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
.aims {
  font-family: 'Conthrax';
  color: #626294;
  padding: 0 20px;
  @apply w-full flex justify-end;
}
</style>
<template lang="pug">
  .page
    .route-name {{route.name}}
    .menu
      div(v-for="(aim, idx) in aims" :key="idx").aims {{aim}}
</template>
<script>
export default {
  name: 'Gif',
  data() {
    return {
      aims: [
        '.Баланс.Эксперимент.', '.Критическое мышление.',
      ]
    }
  },
  computed: {
    route () {
      return this.$route
    },
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