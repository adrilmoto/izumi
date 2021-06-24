<style lang="scss" scoped>
.page {
  @apply flex flex-col w-full h-screen items-start justify-start;
  // max-width: 100vh;
  max-height: 100vh;
  // overflow-y: scroll !important;
  overflow: scroll !important;
  scroll-snap-type: y mandatory;
  &-wrapper {
    @apply flex-col flex w-full justify-start pt-10 px-10;
    // border: 1px solid red;
    max-width: 1100px;
    h1 {
      // font-family: "TT Commons ExtraBold";
      font-size: 100px;
      // border: 1px solid red;
      margin: 0;
    }
    h2 {
      font-size: 60px;
      margin: 0;
      // border: 1px solid red;
      margin-top: 50px;
    }
    h6 {
      // border: 1px solid red;
      font-size: 24px;
      font-weight: 500;
      margin: 0;
    }
    .brands {
      font-size: 28px;
      margin-top: 20px;
    }
    .allows {
      font-size: 34px;
      margin-top: 20px;
    }
    .faqs {
      font-size: 34px;
      margin-top: 20px;
    }
  }
}
.slide {
  @apply w-full flex justify-center ;
  // border: 1px solid red;
  // padding-top: 50px;
  // background: red;
  min-height: calc(100vh - 20px);
  max-height: calc(100vh - 20px);
  scroll-snap-align: center;
  width: 100%;
}

/* appearance fixes */
</style>
<template lang="pug">
  <div ref="page" class="page mandatory-scroll-snapping">
    <div class="slide">
      .page-wrapper
        h1 Услуги
        h2 Brand platform  
        h6 (Разработка бренд-стратегии для стартапа / новой ветки бизнеса или осуществление ребрендинга)
        .brands
          div(v-for="(brand, brandIndex) in brands" :key="brandIndex")
            h3 -{{brand}}
        h6(style="margin-left: 40px; margin-top: 40px; font-size: 28px; font-weight: 600;") + возможен бренд-менеджмент на аутсорсе
        h2 Special Projects
        h6 (Разработка любой бренд-коммуникации под ключ: концепция, реализация, аналитика)
    </div>
    <div class="slide">
      .page-wrapper
        h1 Что мы умеем
        .allows
          div(v-for="(allow, allowIndex) in allows" :key="allowIndex" style="margin-top: 30px;")
            h3 {{allow.name}}
            h6 {{allow.description}}
        h6(style="margin-top: 60px; font-size: 28px; font-weight: 600;") + а если тут чего-то нет, скорее всего мы сможем отыскать нужного специалиста
    </div>
    <div class="slide">
      .page-wrapper
        h1 Частые запросы
        .faqs
          div(v-for="(faq, faqIndex) in faqs" :key="faqIndex" style="margin-top: 30px;")
            h3 {{faq.name}}
            h6 {{faq.description}}
        h6(style="margin-top: 60px; font-size: 28px; font-weight: 600;") + заполните бриф: мы подберём конкретное решение для вашего бизнеса и произведём расчёт
    </div>
  </div>
  //- div(ref="page" id="page").page
</template>
<script>
export default {
  name: 'Services',
  data() {
    return {
      scrollTick: null,
      allows: [
        {name: 'Стратегия', description: 'influence, creative, content, community, PR'},
        {name: 'Дизайн', description: 'graph, web, motion, 3D'},
        {name: 'Родакшен', description: 'style, photo, video, sound'},
        {name: 'Социальные сети', description: 'visual concept, texts, stories'},
      ],
      brands: [
        'CustDev',
        'Позиционирование',
        'Фирменный стиль',
        'Коммуникационная стратегия',
        'Визуальная концепция',
        'Оформление брендбука',
      ],
      faqs: [
        {
          name: 'Запуск / перезагрузка соцсетей',
          description: `«‎Наши каналы не отражают нас в полной мере»`
        },
        {
          name: 'Креативные идеи под ключ',
          description: '«Делаем одно и то же, нужен свежий взгляд»'
        },
        {
          name: 'Перехват операционки',
          description: `«Есть идеи, не хватает инхаус рук — спасайте»‎`
        },
        {
          name: 'Коллаборация с другим брендом',
          description: '«Хотим обмен аудиториями, но не знаем с кем и как»'
        },
        {
          name: 'Проработка tone of voice',
          description: '«На каком языке общаться с молодёжью? кринж? флекс? тикток?»'
        },
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