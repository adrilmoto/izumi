<style lang="scss">
.page-case-wrapper {
  @apply relative flex flex-row w-full justify-center;
  // max-height: 100vh;
  background: #efefef;
  min-width: 70vw;
  .wrapper {
    @apply w-full flex flex-col items-center;
    max-width: 1100px;
    padding: 0px 10px;
    padding-right: 140px;
    border: 1px solid red;
    .header {
      @apply flex flex-row sticky top-0 w-full justify-between;
      top: 40px;
      // max-width: 800px;
      .guide {
        @apply flex justify-center;
        // padding-left: 20px;
        // padding-top: 20px;
        a {
          // background: #e29229;
          // width: 100%;
          margin-top: 10px;
          padding: 6px 10px;
          text-decoration: none;
          color: #e29229;
          border-radius: 4px;
          font-family: 'TT Commons ExtraBold';
          font-size: 24px;
          // border: 1px solid red;
          @apply bg-center flex flex-row items-center space-x-4 bg-contain bg-no-repeat cursor-pointer;
          &:hover {
            opacity: 0.6;
          }
          .img {
            width: 30px;
            height: 30px;
            background: url('/images/icons/pdf.svg');
            @apply bg-center bg-contain bg-no-repeat;
          }
        }
      }
      button {
        @apply flex flex-row items-center justify-center;
        // padding: 6px 0px;
        // border-radius: 5px;
        cursor: pointer;
        border: none;
        outline: none;
        // border: 1px solid red;
        .arrow {
          // margin-right: 5px;
          // border: 1px solid red;
          width: 22px;
          height: 22px;
          background: url('/images/icons/arrow-left.svg');
          background-size: contain;
          background-position: center;
          // transform: rotate(180deg);
        }
        p {
          font-size: 22px;
          // color: #A7AAAF;ы
          // border: 1px solid red;
          font-family: 'TT Commons ExtraBold';
          font-weight: bold;
          color: #191919;
          padding-top: 4px;
          line-height: 22px;
          // margin-bottom: 2px;
          // text-decoration: var(--decoration);
        }
        &:hover {
          // border-bottom: 1px solid #191919;
          opacity: 0.6;
          // background: rgba(113, 116, 124, 0.5);
          // text-decoration: underline;
          // border-bottom: 1px solid red;
          // --decoration: underline;
        }
      }
    }
    h1 {
      font-size: 48px;
      margin: 0;
    }
    .socials {
      @apply flex flex-row flex-wrap w-full justify-center items-center space-x-2 pb-10 pt-6;
      // border: 1px solid red;

      .telegram {
        width: 40px;
        height: 40px;
        background: url('/images/icons/telegram_black.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
      .instagram {
        width: 40px;
        height: 40px;
        background: url('/images/icons/instagram_black.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
      .website {
        width: 40px;
        height: 40px;
        background: url('/images/icons/website.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
      .gdrive {
        width: 30px;
        height: 30px;
        background: url('/images/icons/gdrive.svg');
        @apply bg-center bg-contain bg-no-repeat cursor-pointer;
        &:hover {
          transform: scale(0.9);
        }
      }
    }
    .case-markdown-wrapper {
      @apply relative flex flex-col flex-wrap w-full items-start content-start;
      // max-height: 100vh;
      // max-height: 150vh;
      padding-bottom: 100px;
      max-width: 700px;
      width: 100%;
      // max-width: 50vw;
      em {
        color: #e29229;
        font-family: 'TT Commons ExtraBold';
        font-size: 28px;
      }
      p {
        @apply flex;
        padding: 16px 0;
        margin: 0;
        font-size: 24px;
      }
      img {
        width: 100%;
        max-height: 400px;
        object-fit: cover;
        background: rgb(0, 0, 0, 0.2);
      }
      video {
        width: 100%;
        // max-width: 500px;
        background: rgba(0,0,0,0.8);
      }
    }
  }
  // padding: 40px;
}
@media screen and (max-width: 1100px) {
  .wrapper {
    @apply items-center;
    // border: 1px solid red;
  }
  .case-markdown-wrapper {
    max-width: 100% !important;
    width: 100%;
    // border: 1px solid red;
    img {
      width: 100%;
      max-height: none;
    }
  }
  .page-case-wrapper {
    padding-top: 40px;
    border: 1px solid red;
  }
}
</style>

<template lang="pug">
div(
  v-if="caseItem"
  ).page-case-wrapper
  .wrapper
    .header
      button(@click="$router.back()")
        .arrow
        p Назад
      .guide
        a(v-if="caseItem.guide" :href="caseItem.guide.url" target="_blank")
          .img
          p БРЕНДБУК
    //- title
    h1 {{ caseItem.name }}
    .socials
      a(v-for="link in caseItem.caseLinks" :class="[link.type]" :href="link.url" target="_blank")
      
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
