<style lang="scss" scoped>
.page {
  @apply flex flex-row justify-center items-start;
  background: #ff66c4;
  .page-wrapper {
    max-width: 1100px;
    @apply flex flex-col w-full h-screen items-start justify-start;
    h1 {
      font-size: 100px;
      margin: 0;
    }
  }
}
</style>
<template lang="pug">
  .page
    .page-wrapper.br
      h1 Community
</template>