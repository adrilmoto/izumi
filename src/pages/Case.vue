<style lang="scss">
.case-markdown-wrapper {
  @apply relative;
  p {
    max-width: 500px;
    img {
      width: 100%;
    }
  }
}
</style>

<template lang="pug">
div(
  v-if="caseItem"
  :style="{padding: '40px', overflowY: 'scroll', overflowX: 'hidden'}"
  ).relative.flex.flex-row.flex-wrap.p-4.w-full
  //- title
  h1(class="ml-8") {{ caseItem.name }}
  //- body
  vue-markdown(
    :source="caseItem.description.markdown"
    :style="{maxWidth: '500px'}").case-markdown-wrapper.flex.flex-row.flex-wrap.w-full
  //- links
</template>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  name: 'Case',
  components: {
    VueMarkdown
  },
  data() {
    return {
      caseItem: null,
    }
  },
  computed: {
    caseId () {
      return this.$route.params.id
    }
  },
  async mounted () {
    console.log('mounted')
    this.caseItem = await this.$store.dispatch('caseGet', this.caseId)
  }
}
</script>
