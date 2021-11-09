<style lang="scss">
.socials {
  @apply flex flex-row justify-start items-center space-x-2 mt-2;
  --size: 30px;
  .telegram {
    width: var(--size);
    height: var(--size);
    background: url('/images/icons/telegram_black.svg');
    @apply bg-center bg-contain bg-no-repeat cursor-pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
  .instagram {
    width: var(--size);
    height: var(--size);
    background: url('/images/icons/instagram_black.svg');
    @apply bg-center bg-contain bg-no-repeat cursor-pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
  .website {
    width: var(--size);
    height: var(--size);
    background: url('/images/icons/website.svg');
    @apply bg-center bg-contain bg-no-repeat cursor-pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
  .gdrive {
    width: var(--size);
    height: var(--size);
    background: url('/images/icons/gdrive.svg');
    @apply bg-center bg-contain bg-no-repeat cursor-pointer;
    &:hover {
      transform: scale(0.9);
    }
  }
}
.guide {
  @apply flex justify-center;
  a {
    background: #CE5236;
    padding: 0px 10px;
    text-decoration: none;
    color: #efefef;
    border-radius: 4px;
    font-family: 'TT Commons Medium';
    font-size: 20px;
    line-height: 100%;
    font-weight: 400;
    white-space: nowrap;
    @apply bg-center flex flex-row items-center mt-4 bg-contain bg-no-repeat cursor-pointer;
    &:hover {
      opacity: 0.6;
    }
    .img {
      width: 30px;
      height: 30px;
      background: url('/images/icons/pdf.svg');
      @apply bg-center bg-contain bg-no-repeat mr-2;
    }
  }
}
.page-case-wrapper {
  @apply relative flex flex-row w-full justify-center;
  background: #efefef;
  min-width: 70vw;
  .wrapper {
    @apply w-full flex flex-col items-center;
    max-width: 1100px;
    padding: 0px 10px;
    padding-right: 140px;
    .header {
      @apply flex flex-col sticky top-0 w-full justify-between items-start;
      top: 50px;
      button {
        @apply flex flex-row items-center justify-center;
        cursor: pointer;
        border: none;
        outline: none;
        background: none;
        .arrow {
          width: 22px;
          height: 22px;
          background: url('/images/icons/arrow-left.svg');
          background-size: contain;
          background-position: center;
        }
        p {
          font-size: 22px;
          font-family: 'TT Commons ExtraBold';
          font-weight: bold;
          color: #191919;
          padding-top: 4px;
          line-height: 22px;
        }
        &:hover {
          opacity: 0.6;
        }
      }
    }
    .content {
      max-width: 700px;
      margin-bottom: 100px;
      @apply flex flex-row z-30 items-start w-full;
      h1 {
        font-size: 48px;
        margin: 0;
        white-space: nowrap;
        @apply flex flex-col items-start justify-between ml-4;
        // border: 1px solid red;
      }
    }
    .case-markdown-wrapper {
      @apply relative flex flex-col flex-wrap w-full items-start content-start;
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
.social-container {
  @apply w-full flex flex-col justify-start items-start;
}
.cover-block {
  // background: #a7a4a4;
  height: 8%;
  @apply absolute inset-0 w-full;
}
@media screen and (max-width: 1400px) {
  .page-case-wrapper {
    .wrapper {
      .header {
        max-width: 700px;
        position: relative !important;
        top: none;

      }
      .content {
        margin-top: 70px;
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .page-case-wrapper {
    padding-top: 70px;
    .wrapper {
      padding-right: 10px;
      .header {
        display: none;
      }
      .content {
        margin-top: 0px;
        max-width: 100%;
        width: 100%;
        margin-bottom: 30px;
      }

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
  }
}
@media screen and (max-width: 600px) {
  .page-case-wrapper {
    .wrapper {
      .content {
        // @apply;
        img {
          // width: 30%;
          // height: 50%;
        }
        h1 {
          // @apply ml-0;
          font-size: 28px;
          white-space:normal;
        }
      }

      .case-markdown-wrapper {
        // border: 1px solid red;
        em {
          font-size: 22px;
        }
        p {
          font-size: 18px;
          padding: 6px 0px;
        }
      }
    }
  }
}
</style>

<template lang="pug">
div(
  v-if="caseItem"
  ).page-case-wrapper
  .cover-block
  .wrapper
    .header
      button(@click="$router.back()")
        .arrow
        p Назад
    //- title
    .content
      img(:src="caseItem.img.url" style="border-radius: 10px; height: 100%;" draggable="false")
      h1 {{ caseItem.name }}
        .social-container
          .socials
            a(v-for="link in caseItem.caseLinks" :class="[link.type]" :href="link.url" target="_blank")
          .guide
            a(v-if="caseItem.guide" :href="caseItem.guide.url" target="_blank")
              .img
              p Brand Book
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
