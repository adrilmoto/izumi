<style lang="scss" scoped>
.page {
  @apply flex flex-row h-screen items-start justify-center px-10;
  max-height: 100vh;
  overflow: scroll;
  &-wrapper {
    @apply flex-col flex w-full justify-end;
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
      font-size: 36px;
      margin-top: 50px;
    }
    .allows {
      font-size: 34px;
      margin-top: 100px;
    }
    .faqs {
      font-size: 34px;
      margin-top: 100px;
    }
  }
}
.slide {
  @apply w-full;
  // border: 1px solid red;
  height: calc(100vh - 50px);
  padding-top: 50px;
}
</style>
<template lang="pug">
  .page
    .page-wrapper.br
      .slide
        h1 Услуги
        h2 Brand platform  
        h6 (Разработка бренд-стратегии для стартапа / новой ветки бизнеса или осуществление ребрендинга)
        .brands
          div(v-for="(brand, brandIndex) in brands" :key="brandIndex")
            h3 -{{brand}}
        h6(style="margin-left: 40px; margin-top: 40px; font-size: 28px; font-weight: 600;") + возможен бренд-менеджмент на аутсорсе
        h2 Special Projects
        h6 (Разработка любой бренд-коммуникации под ключ: концепция, реализация, аналитика)
      .slide
        h1 Что мы умеем
        .allows
          div(v-for="(allow, allowIndex) in allows" :key="allowIndex" style="margin-top: 30px;")
            h3 {{allow.name}}
            h6 {{allow.description}}
        h6(style="margin-top: 60px; font-size: 28px; font-weight: 600;") + а если тут чего-то нет, скорее всего мы сможем отыскать нужного специалиста
      .slide
        h1 Частые запросы
        .faqs
          div(v-for="(faq, faqIndex) in faqs" :key="faqIndex" style="margin-top: 30px;")
            h3 {{faq.name}}
            h6 {{faq.description}}
        h6(style="margin-top: 60px; font-size: 28px; font-weight: 600;") + заполните бриф: мы подберём конкретное решение для вашего бизнеса и произведём расчёт
</template>
<script>
export default {
  data() {
    return {
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
          name: 'апуск / перезагрузка соцсетей',
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
  }
}
</script>