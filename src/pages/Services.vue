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
            font-family: 'TT Commons Medium';
            font-style: normal;
            font-weight: 600;
            font-size: 18px;
            line-height: 18px;
            color: #191919;
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
      div(v-for="(block, blockId) in blocks" :key="blockId" :style="{borderLeft: `13px solid ${block.color}`}").service-block
        h1 {{block.name}}
        p(v-html="block.description")
        .tabs
          div(v-for="(tab, tabId) in block.tabs" :key="tabId").tab
            p {{tab}}
</template>
<script>
export default {
  name: 'Services',
  data() {
    return {
      blocks: [
        {
          id: 0,
          name: 'Brand platform',
          description: `Разработка <span style="color: #52427A;">бренд-стратегии</span> для стартапа, новой ветки бизнеса или осуществление <span style="color: #52427A;">ребрендинга.</span>`,
          tabs: [
            'CustDev',
            'Позиционирование',
            'Коммуникационная стратегия',
            'Фирменный стиль',
            'Визаульная концепция',
            'Оформление брендбука',
            'Возможен бренд-менеджмент на аутсорсе',
          ],
          color: '#EABE44'
        },
        {
          id: 1,
          name: 'Special Projects',
          description: 'Разработка любой бренд-коммуникации под ключ: концепция, реализация, аналитика',
          tabs: [],
          color: '#E29229'
        },
        {
          id: 2,
          name: 'Стратегия',
          description: 'influence, creative, content, community, PR',
          tabs: [],
          color: '#CE5236'
        },
        {
          id: 3,
          name: 'Дизайн',
          description: 'graph, web, motion, 3D',
          tabs: [],
          color: '#6362A0'
        },
        {
          id: 4,
          name: 'Продакшен',
          description: 'style, photo, video, sound',
          tabs: [],
          color: '#52427A'
        },
        {
          id: 5,
          name: 'Социальные сети',
          description: 'visual concept, texts, stories',
          tabs: [],
          color: '#EABE44'
        }
      ]
    }
  },
  methods: {
  },
  mounted() {
  },
  beforeDestroy() {
  }
}
</script>