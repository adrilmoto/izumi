<style lang="scss" scoped>
.page {
  @apply flex flex-row relative justify-start items-start;
  min-height: 100vh;
  background: #efefef;
  padding: 0px 0px 0px 50px;
  .content {
    @apply flex-col flex w-full justify-start;
    max-width: 1000px;
    padding-top: 50px;
    margin-right: 150px;
    // border: 1px solid red;
    h1 {
      // font-family: "TT Commons ExtraBold";
      font-size: 48px;
      margin: 0;
    }
    p {
      font-size: 28px;
      color: #8A8A8A;
      span {
        color: #EABE44;
      }
    }
    .blocks {
      @apply flex flex-row flex-wrap w-full justify-start;
      margin-top: 100px;
      .egg {
        @apply flex flex-col w-full;
        max-width: 45%;
        margin-right: 20px;
        &-number {
          @apply flex flex-row items-center;
          // border: 1px solid red;
          h1 {
            font-size: 120px;
            margin-bottom: -25px;
            margin-right: 80px;
            padding: 0;
          }
          .egg {
            background: url('/images/egg.svg');
            min-width: 80px;
            margin-left: -65px;
            margin-top: 15px;
            height: 80px;
            @apply bg-center bg-contain bg-no-repeat;
          }
        }
        &-content {
          p {
            font-size: 22px;
            color: #191919;
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1300px) {
  .page {
    padding: 20px;
    .content {
      padding-bottom: 100px;
      margin-right: 0px;
      h1 {
        // font-family: "TT Commons ExtraBold";
        font-size: 38px;
        margin: 0;
      }
      p {
        font-size: 28px;
        color: #8A8A8A;
        span {
          color: #EABE44;
        }
      }
      .blocks {
        @apply flex flex-row flex-wrap w-full justify-start;
        margin-top: 100px;
        .egg {
          @apply flex flex-col;
          max-width: 100%;
          margin-right: 0px;
          &-number {
            @apply flex flex-row items-center;
            // border: 1px solid red;
            h1 {
              font-size: 120px;
              margin-bottom: -25px;
              margin-right: 80px;
              padding: 0;
            }
            .egg {
              background: url('/images/egg.svg');
              min-width: 80px;
              margin-left: -65px;
              margin-top: 15px;
              height: 80px;
              @apply bg-center bg-contain bg-no-repeat;
            }
          }
          &-content {
            p {
              font-size: 25px;
              color: #191919;
            }
          }
        }
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .page {
    padding-top: 50px;
  }
}
@media screen and (max-width: 600px) {
  .page {
    .content {
      h1 {
        font-size: 34px;
      }
      p {
        font-size: 22px;
      }
      .blocks {
        margin-top: 20px;
      }
    }
  }
}
</style>
<template lang="pug">
div(ref="page").page
  .content
    h1 Мы создаём бренд-платформы. Фокусируемся на брендинге и спецпроектах.
    p А вот несколько <span>яичек</span>, почему мы и ваш бренд — это <span>perfect scramble</span>:
    .blocks
      div(v-for="(block, eggIndex) in blocks").egg
        .egg-number
          h1 {{block.number}}
          div(v-for="egg in block.number")
            .egg
        .egg-content
          p {{block.text}}
    h1(style="margin-top:100px; color: red") Ценности
    p Эксперимент, Баланс, Критическое мышление
</template>
<script>
export default {
  name: 'About',
  data() {
    return {
      blocks: [
        { number: 1, text: 'знаем как привлекать миллениалов и зумеров, ведь мы сами родились на стыке поколений Y-Z;'},
        { number: 2, text: 'в проектах всегда отталкиваемся от вашего бюджета и бизнес-задач, а не от нашей комфортной планки;'},
        { number: 3, text: 'умеем работать в атмосфере стартапа;'},
        { number: 4, text: 'помимо агентства развиваем сообщество креаторов из России, поэтому у нас есть большой ресурс для творческих коллабораций.'},
      ]
    }
  },
  computed: {},
  methods: {
  },
  async mounted() {
  },
  beforeDestroy() {
  }
}
</script>