<style lang="scss" scoped>
.page {
  @apply h-screen w-full flex justify-center items-center;
  background: #efefef;
  .gif {
    background: url('/images/gif.gif');
    @apply bg-center bg-no-repeat;
    background-size: 320%;
    width: 500px;
    height: 200px;
    border-radius: 20px;
    overflow: hidden;
  }
}

</style>
<template>
  <div class="page">
    <div class="gif">
    
    </div>
  </div>
</template>
<script>
export default {
  name: 'Gif',
}
</script>