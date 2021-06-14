<style lang="scss" scoped>
.header {
  @apply flex w-full justify-between bg-red-400;
  &-content {
    @apply flex w-full justify-between p-4;
  }
}
</style>
<template lang="pug">
  .header
    .header-content
      span header
      span end
</template>