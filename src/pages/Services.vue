<style lang="scss">
:root {
  --accent-color: none;
}
.page-services {
  @apply flex flex-col relative w-full items-start justify-start;
  // max-width: 100vh;
  min-width: 70vw;
  min-height: 100vh;
  // padding-top: 50px;
  // overflow-y: scroll !important;
  background: #efefef;
  // overflow: scroll !important;
  // scroll-snap-type: y mandatory;
  // border: 1px solid red;
  
  // padding-bottom: 200px;
  &-wrapper {
    max-width: calc(100% - 200px);
    padding-left: 50px;
    padding-top: 50px;
    @apply flex relative flex-row space-x-9;
    // border: 3px solid red;
    // border: 1px solid red;
    // @apply;
    .service-block {
      box-shadow: -3px 22px 29px 10px rgba(22, 22, 22, 0.15);
      border-radius: 20px;
      padding: 40px;
      margin: none;
      max-width: 550px;
      // border: 1px solid red;
      // width: 100%;
      @apply flex w-full flex-col justify-between;
      .cont {
        margin: none;
        padding: none;
        h1 {
          font-family: 'TT Commons ExtraBold';
          font-style: normal;
          font-weight: bold;
          text-transform: uppercase;
          font-size: 48px;
          line-height: 48px;
          margin: 0px;
          // color: #191919;
        }
        p {
          font-family: 'TT Commons Light';
          font-style: normal;
          font-weight: 400;
          font-size: 28px;
          line-height: 32px;
          // color: #8A8A8A;
        }
        .punct {
          @apply flex flex-row items-center space-x-3;
          margin-top: 10px;
          p {
            font-size: 22px;
            margin: 0;
            padding: 0;
          }
          .dot {
            width: 20px;
            height: 20px;
            transform: rotate(45deg);
            border-radius: 5px;
          }
        }
      }
      button {
        padding: 20px 0px;
        margin-top: 20px;
        cursor: pointer;
        border: none;
        outline: none;
        border-radius: 5px;
        font-size: 24px;
        font-family: 'TT Commons ExtraBold';
        &:hover {
          opacity: 0.8;
        }
      }
    }
  }
}
@media screen and (max-width: 1500px) {
  .page-services {
    max-width: 100%;
    min-width: 100%;
    overflow: hidden;
    width: 100%;
    &-wrapper {
      max-width: 100%;
      width: 100%;
      padding-top: 70px;
      padding-left: 0px;
      padding-right: 0px;
      padding-bottom: 100px;
      @apply flex flex-col items-center justify-start space-x-0 space-y-8 w-full;
      .service-block {
        width: 100%;
        max-width: calc(600px - 100px);
        padding: 40px;
      }
    }
  }
}
@media screen and (max-width: 600px) {
  .page-services {
    padding: none;
    max-width: 100%;
    min-width: 100%;
    overflow: hidden;
    width: 100%;
    &-wrapper {
      max-width: 100%;
      padding-top: 50px;
      // padding: none;
      padding-bottom: 0px;
      padding-left: 0px;
      padding-right: 0px;
      @apply flex-col items-center space-x-0 space-y-0;
      .service-block {
        position: relative;
        // border: 1px solid red;
        margin: none;
        // max-width: 200px;
        max-width: calc(100% - 40px);
        border-radius: 0px;
        padding: 20px;
        @apply flex flex-col w-full;
        .cont {
          h1 {
            font-size: 28px;
          }
          p {
            font-size: 18px;
            line-height: 120%;
          }
          .punct {
            p {
              font-size: 18px;
            }
          }
        }
        button {
          padding: 10px 0px;
          font-size: 22px;
          margin-top: 30px;
        }
      }
    }
  }
}
.accent {
  color: #52427A;
}
strong {
  color: var(--accent-color) !important;
}
/* appearance fixes */
</style>

<template lang="pug">
div(ref="page").page-services
  .page-services-wrapper
    div(
      v-for="(block, blockId) in services"
      :key="block.id"
      :style="{background: block.bgcolor.hex, color: block.textcolor.hex }"
    ).service-block
      .cont
        h1 {{block.title}}
        p(v-html="block.subtitle.html" :style="{ '--accent-color': block.accent.hex }")
        div(v-for="(punct, punctId) in block.bullets" :key="punctId").punct
          div(:style="{background: block.accent.hex }").dot
          p {{punct}}
      button(@click="openBrif()" :style="{background: block.buttonbg.hex, color: block.buttontext.hex}") Узнать стоимость
    //- div(
    //-   v-for="(block, blockId) in services"
    //-   :key="block.id"
    //-   :style="{borderLeft: `13px solid ${block.color.hex}`}"
    //-   ).service-block
    //-   h1 {{block.title}}
    //-   p(v-html="block.subtitle")
    //-   .tabs
    //-     div(v-for="(tab, tabI) in block.bullets" :key="tabI").tab
    //-       p {{tab}}
    //-   div(:style="{background: `${block.color.hex}`}").mobile
</template>

<script>
export default {
  name: 'Services',
  data() {
    return {
      services: [],
    }
  },
  computed: {
    
  },
  methods: {
    async openBrif() {
      await this.$store.dispatch('openBrif', true)
    }
  },
  async mounted() {
    console.log('mounted')
    this.services = await this.$store.dispatch('servicesGet')
  },
  beforeDestroy() {
  }
}
</script>
