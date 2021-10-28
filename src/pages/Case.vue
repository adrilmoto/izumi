<style lang="scss">
.case-markdown-wrapper {
  @apply relative flex flex-col flex-wrap w-full items-start content-start;
  // max-height: 100vh;
  // max-height: 150vh;
  background: #efefef;
  width: 100%;
  // max-width: 50vw;
  p {
    @apply flex;
    max-width: 500px;
    padding: 16px 0;
    margin: 0;
    font-size: 24px;
  }
  img {
    width: 550px;
    max-height: 300px;
    object-fit: contain;
    background: rgb(240, 240, 240);
  }
  video {
    width: 100%;
  }
}
.page-case-wrapper {
  @apply relative flex flex-row w-full justify-center;
  max-height: 100vh;
  .wrapper {
    @apply w-full flex flex-col;
    max-width: 1100px;
  }
  // padding: 40px;
}
</style>

<template lang="pug">
div(
  v-if="caseItem"
  ).page-case-wrapper.br
  .wrapper
    //- title
    h1 {{ caseItem.name }}
    //- video(src="https://media.graphcms.com/OIiBzxjJTrOvA7sos987" type="video/mp4" autoplay).w-full.br
    div(
      ref="caseMarkdownWrapper"
      v-html="caseItem.description.html").case-markdown-wrapper
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
