<style lang="scss" scoped>
.buttons-group {
  @apply absolute right-5 bottom-5 flex flex-row space-x-2;
}
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
  // height: 500px;
  .close {
    width: 40px;
    height: 40px;
    display: none;
    background: url('/images/close.svg');
    right: 30px;
    top: 10px;
    @apply absolute bg-center bg-no-repeat bg-contain;
    // border: 1px solid red;
    cursor: pointer;
    outline: none;
    border: none;
    &:focus {
      outline: none;
    }
    &:hover {
      transform: scale(1.05)
    }
  }
  .content {
    // height: 200px;
    @apply w-full h-full relative flex;
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
    @apply cursor-pointer;
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
  .back-btn {
    @apply cursor-pointer;
    padding: 10px 20px;
    font-weight: 700;
    font-size: 22px;
    outline: none;
    border: none;
    background: #858585;
    color: #efefef;
    // margin-top: 10px;
    border-radius: 4px;
    &:hover {
      background: #979797;
    }
    &:disabled {
      background: rgb(102, 102, 102);
    }
    &:active {
      background: #313131;
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
        right: -5px !important;
        bottom: -15px;
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .brif {
    // margin-left: 130px;
    min-width: 100% !important;
    max-width: 100vw !important;
    border-radius: 0px;
    // box-shadow: -4px 4px 0px rgb(156, 156, 156);
    max-height: 100% !important;
    // height: 500px;
    padding: 10px;
    width: 100% !important;
    // overflow: scroll;
    @apply flex flex-col items-start justify-start fixed inset-0;
    .close {
      display: inherit;
    }
    h1 {
      width: calc(100% - 20px);
    }
    .navbar {
      // padding: 0;
      width: 94%;
      // margin-top: 20px;
    }
    .content {
      @apply flex flex-col items-start justify-start h-full;
      padding-bottom: 0;
      p {
        font-size: 18px;
      }
      // overflow-y: scroll;
      width: calc(100% - 22px);
      .section {
        .inputs {
          padding-bottom: 40px;
          @apply flex flex-col;
          width: calc(100% + 10px);
          // border: 1px solid red;

          // border: 1px solid red;
          height: 60%;
          input {
            width: calc(100% - 50px);
          }
        }
      }
    }
    .buttons-group {
      width: calc(100% - 40px);
      left: 10px;
      bottom: 10px;
      .btn {
        left: 10px;
        bottom: 10px;
        width: 100%;
      }
      .back-btn {
        bottom: 10px;
        width: 100%;
      }
    }
    
  }
  
}
</style>

<template lang="pug">
div(:style="{color: contentColor}").brif
  button(@click="$emit('close')").close
  h1 Бриф для новых клиентов izumi
  .navbar
    div(ref="value").value
      h1 {{stage}}
  div.content
    div(v-if="stage === 1").section
      p {{description}}
    div(v-if="stage === 2").section
      p Расскажите, чем вы занимаетесь. Нам очень интересно вас послушать!
      p Какова концепция проекта? В чём ваше отличие от конкурентов? Почему вы начали заниматься именно этим?
      textarea(contentEditable v-model="form.do").i-textarea
    div(v-if="stage === 3" ).section
    
      p Какая у вас миссия?
      p Кто ваша ЦА и конкуренты?
      textarea(contentEditable v-model="form.mission").i-textarea
    div(v-if="stage === 4").section
      p Озвучьте бизнес / маркетинговую задачу, которая стоит перед вашей компанией.
      p Какой путь решения вы видите?
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
  .buttons-group
    button(v-if="stage !== 6" @click="lastStage()" :disabled="btnDisabled").back-btn Назад
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
        Так мы поймём, чем можем быть полезны и какие услуги вам стоит предложить.
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
    async handleSubmit() {
      console.log('brif submit')
      const { data, error } = await this.$supabase
        .from('brif')
        .insert([
          {
            do: this.form.do,
            mission: this.form.mission,
            tasks: this.form.tasks,
            name: this.form.name,
            phone: this.form.phone,
            company: this.form.company,
            mail: this.form.mail,
          },
        ])
      console.log('supabase', data, error)
    },
    nextStage() {
      // this.$log(this.form)
      if (this.stage === 5) {
        this.handleSubmit()
      }
      this.stage += 1
    },
    lastStage() {
      this.stage -= 1
    }
  }
}
</script>