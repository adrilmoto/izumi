<style lang="scss" scoped>
.page {
  @apply flex flex-col w-full items-start justify-start;
  // max-width: 100vh;
  // max-height: 100vh;
  // overflow-y: scroll !important;
  background: #efefef;
  // overflow: scroll !important;
  // scroll-snap-type: y mandatory;
  padding-bottom: 200px;
  &-wrapper {
    max-width: calc(100% - 200px);
    padding-left: 50px;
    // border: 1px solid red;
    // @apply;
    .service-block {
      border-left: 13px solid #EABE44;
      margin-top: 50px;
      padding-left: 20px;
      @apply flex flex-col;
      h1 {
        font-family: 'TT Commons ExtraBold';
        font-style: normal;
        font-weight: bold;
        font-size: 48px;
        line-height: 48px;
        margin: 0px;
        color: #191919;
      }
      p {
        font-family: 'TT Commons Medium';
        font-style: normal;
        font-weight: 600;
        font-size: 28px;
        line-height: 32px;
        color: #8A8A8A;
      }
      .tabs {
        @apply flex flex-row flex-wrap;
        margin-left: -10px;
        .tab {
          border-radius: 10px;
          box-shadow: -4px 4px 10px rgba(0, 0, 0, 0.1);
          padding: 10px 10px;
          background: #EFEFEF;
          margin: 10px;
          p {
            font-family: 'TT Commons ExtraBold';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 100%;
            color: #191919;
          }
        }
      }
    }
  }
}
.mobile {
  display: none;
}
@media screen and (max-width: 1100px) {
  .page {
    &-wrapper {
      max-width: 100%;
      // border: 1px solid red;
      padding-top: 50px;
      padding-left: 20px;
    }
  }
}
@media screen and (max-width: 600px) {
  .mobile {
    display: inherit;
    position: absolute;
    left: -2px;
    height: 100%;
    width: 8px;
    // border: 1px solid red;
  }
  .page {
    &-wrapper {
      max-width: 100%;
      // border: 1px solid red;
      padding-top: 50px;
      padding-left: 10px;
      padding-right: 10px;
      .service-block {
        border: none !important;
        position: relative;
        h1 {
          font-size: 34px;
        }
        p {
          font-size:22px;
        }
        .tabs {
          .tab {
            padding: 0px 10px;
            margin: 5px;
            // border: 1px solid red;
            border-radius: 5px;
            p {
              font-size: 14px;
            }
          }
        }
      }
    }
  }
}
.accent {
  color: #52427A;
}
/* appearance fixes */
</style>

<template lang="pug">
div(ref="page" class="page")
  .page-wrapper
    div(
      v-for="(block, blockId) in services"
      :key="block.id"
      :style="{borderLeft: `13px solid ${block.color.hex}`}"
      ).service-block
      h1 {{block.title}}
      p(v-html="block.subtitle")
      .tabs
        div(v-for="(tab, tabI) in block.bullets" :key="tabI").tab
          p {{tab}}
      div(:style="{background: `${block.color.hex}`}").mobile
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [],
    }
  },
  methods: {
  },
  async mounted() {
    console.log('mounted')
    this.services = await this.$store.dispatch('servicesGet')
  },
  beforeDestroy() {
  }
}
</script>
