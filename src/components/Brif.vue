<style lang="scss" scoped>
.brif {
  @apply absolute block;
  // margin-left: 130px;
  min-width: 700px;
  max-width: 700px;
  border-radius: 5px;
  background: #fff;
  border: 1px solid #eee;
  // box-shadow: -4px 4px 0px rgb(156, 156, 156);
  padding: 20px;
  max-height: 500px;
  border: 1px solid red;
  // height: 500px;
  .content {
    // height: 200px;
    padding-bottom: 70px;
    p {
      font-size: 22px;
    }
    .section {
      @apply flex flex-col justify-start items-start h-full w-full;
      &-last {
        @apply justify-start items-start;
        .title {
          @apply flex flex-row items-center;
          margin-top:  30px;
          h1 {
            margin-bottom: 0;
            margin-top: 0;
          }
          .congrats {
            background: url('/images/congrats.png');
            width: 25px;
            height: 25px;
            margin-left: 15px;
            margin-bottom: 10px;
            @apply bg-center bg-contain bg-no-repeat;
          }
        }
      }
    }
  }
  .btn {
    @apply absolute bottom-5 right-5 cursor-pointer;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 22px;
    outline: none;
    border: none;
    background: #EABE44;
    color: #efefef;
    border-radius: 4px;
    &:hover {
      background: #e6c97b;
    }
    &:disabled {
      background: rgb(102, 102, 102);
    }
    &:active {
      background: #b99121;
    }
  }
  .i-textarea {
    width: 95%;
    height: 90px;
    padding: 10px;
    margin-top: 20px;
    border-radius: 4px;
    background: #eee;
    outline: none;
    border: 1px solid rgb(202, 202, 202);
  }
  .inputs {
    @apply flex flex-row w-full;
    input {
      border: 1px solid rgb(202, 202, 202);
      background: #eee;
      outline: none;
      border-radius: 4px;
      padding: 10px 10px;
      width: 300px;
      font-size: 20px;
      font-family: "TT Commons ExtraBold";
    }
  }
  .navbar {
    width: 95%;
    height: 10px;
    padding: 2px;
    margin-top: 50px;
    margin-bottom: 20px;
    background: #efefef;
    border-radius: 3px;
    @apply flex relative justify-start;
    &:after {
      content: '6';
      color: #EABE44;
      position: absolute;
      font-size: 30px;
      right: -5px;
      font-family: "TT Commons ExtraBold";
      top: -30px;
    }
    .value {
      height: 100%;
      background: #EABE44;
      border-radius: 3px;
      position: relative;
      width: 100%;
      max-width: 0;
      h1 {
        @apply absolute;
        right: -5px;
        bottom: -15px;
      }
    }
  }
}
</style>

<template lang="pug">
  div(:style="{color: contentColor}").brif
    h1 Бриф для новых клиентов izumi
    .navbar
      div(ref="value").value
        h1 {{stage}}
    div.content
      div(v-if="stage === 1").section
        p {{description}}
      div(v-if="stage === 2").section
        p Расскажите чем вы занимаетесь! Нам очень интересно вас послушать!
        p Концепция проекта. В чем ваше отличие от конкурентов. Почему вы начали заниматься именно этим?
        textarea(contentEditable v-model="form.do").i-textarea
      div(v-if="stage === 3" ).section
        p Какая у вас миссия?
        p Какие услуги вас интерисуют больше всего?
        textarea(contentEditable v-model="form.mission").i-textarea
      div(v-if="stage === 4").section
        p Какие у вас задачи?
        p Какой путь решения задач вы видите?
        textarea(contentEditable v-model="form.tasks").i-textarea
      div(v-if="stage === 5").section
        p Контактные данные
        .inputs
          div(style="width: 100%")
            div.cont-block
              p Имя
              input(v-model="form.name")
            div.cont-block
              p Телефон
              input(v-model="form.phone")
          div(style="width: 100%")
            div.cont-block
              p Компания
              input(v-model="form.company")
            div.cont-block
              p Электронная почта
              input(v-model="form.mail")
      div(v-if="stage === 6").section.section-last
        .title
          h1 Поздравляем!
          .congrats
        p Совсем скоро мы с вами свяжемся!
    button(v-if="stage !== 6" @click="nextStage()" :disabled="btnDisabled").btn {{btnText}}
  //- .brif
  //-   form(@submit.prevent="handleSubmit()")
  //-     h1(style="font-size: 56px; width: 60%; position: absolute; white-space: nowrap; margin-top: 0;") Бриф для новых клиентов izumi
  //-     p(style="margin-top: 100px;") {{ description }}
  //-     h5 Чем вы занимаетесь?
  //-     p Концепция проекта. В чем ваше отличие от конкурентов? Почему вы решили заниматься именно этим?
  //-     div(contentEditable).i-textarea
  //-     h5 Какая у вас миссия?
  //-     div(contentEditable).i-textarea
  //-     h5 Какие услуги вас интерисуют больше всего?
  //-     div(contentEditable).i-textarea
  //-     h5 Какие у вас задачи?
  //-     p Какую задачу вы хотите решить с помощью своего проекта? Какие задачи стоят перед вами сейчас?
  //-     div(contentEditable).i-textarea
  //-     h5 Какой путь решения задач вы видите?
  //-     p Что вы делали раньше? Что хотите попробовать? Чего вы ожидаете от решения задач? В какие сроки вы хотите решить свои задачи и сколько планируете на это потратить?
  //-     div(contentEditable).i-textarea
  //-     h1(style="margin-top: 100px;") Контактные данные
      //- .inputs
      //-   div(style="width: 100%")
      //-     div
      //-       p Имя
      //-       input()
      //-     div
      //-       p Телефон
      //-       input()
      //-   div(style="width: 100%")
      //-     div
      //-       p Компания
      //-       input()
      //-     div
      //-       p Электронная почта
      //-       input()
  //-     .button-wrap
  //-       button(type="submit").i-button Отправить бриф
</template>

<script>
import gsap from 'gsap'
export default {
  name: 'Brif',
  props: {
    contentColor: {
      type: String,
    }
  },
  data() {
    return {
      // brif description
      stage: 1,
      description: 
      `
        Перед началом работы мы просим ответить клиентов на несколько вопросов.
        Так мы поймем, чем можем быть полезны вам, какие услуги мы можем вам предложить.
        После заполнения брифа наша встреча будет более продуктивной и ориентированной именно на вас.
      `,
      // 
      form: {
        do: '',
        mission: '',
        tasks: '',
        name: '',
        phone: '',
        company: '',
        mail: '',
      }
    }
  },
  watch: {
    stage: {
      async handler() {
        await this.$nextTick()
        gsap.to(this.$refs.value, { maxWidth: 100/6 * this.stage + '%', duration: 1})
      }
    }
  },
  computed: {
    btnText() {
      if (this.stage === 5) return 'Отправить'
      return 'Далее'
    },
    btnDisabled() {
      if (this.stage === 5) {
        if (this.form.name && this.form.phone && this.form.mail && this.form.company) {
          return false
        } else return true
      } else {
        return false
      }
    }
  },
  methods: {
    handleSubmit() {
      console.log('brif submit')
    },
    nextStage() {
      // this.$log(this.form)
      this.stage += 1
    }
  }
}
</script>