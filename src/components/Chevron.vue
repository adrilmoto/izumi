<style lang="scss" scoped>
.chevron {
  width: 40px;
  height: 40px;
}
</style>
<template lang="pug">
  div(@click="click()").chevron
    <svg v-if="position" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" :fill="color">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none"/>
      </g>
      <g>
        <polygon points="6.23,20.23 8,22 18,12 8,2 6.23,3.77 14.46,12"/>
      </g>
    </svg>
    <svg v-else xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 24 24" height="100%" viewBox="0 0 24 24" width="100%" :fill="color">
      <rect fill="none" height="24" width="24"/>
      <g>
        <polygon points="17.77,3.77 16,2 6,12 16,22 17.77,20.23 9.54,12"/>
      </g>
    </svg>
</template>
<script>
export default {
  name: 'Chevron',
  props: {
    color: {
      type: String
    },
    position: {
      type: Boolean
    }
  },
  methods: {
    click() {
      this.$emit('event')
    }
  }
}
</script>