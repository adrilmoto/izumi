<style lang="scss" scoped>
.page {
  @apply flex flex-col w-full justify-start items-start;
  max-height: 100vh;
  overflow: scroll !important;
  scroll-snap-type: y mandatory;
  .content {
    @apply flex-col flex w-full justify-start py-10 px-5;
    max-width: 1100px;
    h1 {
      // font-family: "TT Commons ExtraBold";
      font-size: 100px;
      margin: 0;
    }
    p {
      font-size: 32px;
    }
  }
}
.slide {
  @apply w-full flex justify-center ;
  // border: 1px solid red;
  // padding-top: 50px;
  // background: red;
  min-height: 100vh;
  max-height: 100vh;
  width: 100%;
  scroll-snap-align: center;
}
</style>
<template lang="pug">
  div(ref="page").page
    .slide
      .content
        h1 О нас
        p Мы создаем бренд-платформы. Фокусируемся на брендинге и спецпроектах.
        p А вот несколько причин, почему мы и ваш бренд — это perfect match:
        p мы знаем как привлекать миллениалов и зумеров, ведь мы сами родились на стыке поколений Y-Z;
        p мы предоставляем клиентский сервис по цене фриланса;
        p в проектах мы всегда отталкиваемся от вашего бюджета и бизнес-задач, а не от нашей комфортной планки;
        p помимо агентства мы развиваем сообщество креативных предпринимателей, поэтому у нас есть большой ресурс для творческих коллабораций.
    .slide
      .content
        h1 Ценности izumi
        p Эксперимент
        p критическое мышление
        p гармония технологий и искусства
    .slide
      .content
        h1 Конкурентные преимущества
        p умеем работать со стартапами и чувствуем их атмосферу 
        p работаем, отталкиваясь от ваших пожеланий, а не от бюджета
        p все наши услуги прикладные 
        p понимаем запросы поколений Y-Z
</template>
<script>
export default {
  name: 'About',
  methods: {
  },
  async mounted() {
  },
  beforeDestroy() {
  }
}
</script>