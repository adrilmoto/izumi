<style lang="scss">
.case-markdown-wrapper {
  @apply relative;
  width: 100%;
  max-width: 600px;
  p {
    @apply flex;
    max-width: 500px;
    padding: 16px 0;
    margin: 0;
  }
  img {
    width: 100%;
    max-height: 400px;
    object-fit: contain;
    background: rgb(240, 240, 240);
  }
  video {
    width: 100%;
  }
}
</style>

<template lang="pug">
div(
  v-if="caseItem"
  :style="{padding: '40px', overflowY: 'scroll', overflowX: 'hidden'}"
  ).relative.flex.flex-row.flex-wrap.items-start.content-start.p-4.w-full
  //- title
  h1(class="ml-8") {{ caseItem.name }}
  //- video(src="https://media.graphcms.com/OIiBzxjJTrOvA7sos987" type="video/mp4" autoplay).w-full.br
  div(
    ref="caseMarkdownWrapper"
    v-html="caseItem.description.html").case-markdown-wrapper.flex.flex-row.flex-wrap.w-full.items-start.content-start
  //- links
</template>

<script>
export default {
  name: 'Case',
  components: {
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
  methods: {
  },
  async mounted () {
    console.log('mounted')
    this.caseItem = await this.$store.dispatch('caseGet', this.caseId)
    // Fix video tags
    // TODO handle raw and not html from rich-text graphcms
    this.$nextTick(() => {
      let videos = Array.prototype.slice.call(this.$refs.caseMarkdownWrapper.children)
      videos = videos.filter(c => c.tagName === 'VIDEO')
      videos.map(v => {
        v.autoplay = true
        v.muted = true
        v.loop = true
        // console.log('v.children', v.children)
        v.children[0].type = 'video/mp4'
      })
      // console.log('videos', videos)
    })
  }
}
</script>
