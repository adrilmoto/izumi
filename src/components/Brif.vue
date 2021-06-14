<style lang="scss" scoped>
.brif {
  @apply w-full flex flex-col;
  max-width: 1000px;
  overflow: auto;
  color: #fff;
  padding: 20px 20px;
  .inputs {
    @apply flex flex-row items-start content-start;
    // border: 1px solid red;
    margin-top: 40px;
    p {
      margin-top: 20px;
      font-size: 24px;
      font-family: 'TT Commons ExtraBold';
    }
    input {
      outline: none;
      border: none;
      width: 400px;
      // height: 100%;
      background: #000;
      font-family: 'TT Commons Medium';
      border-bottom: 2px solid white;
      font-size: 30px;
      font-weight: 400;
      padding: 10px 5px;
      // resize: none;
      margin: 0 0px;
      color: #EABE44 !important;
      // margin-top: 10px;
    }
  }
  .i-button {
    outline: none;
    border: none;
    background: white;
    padding: 20px;
    color: black;
    font-family: 'TT Commons ExtraBold';
    font-size: 30px;
    margin-top: 100px;
    cursor: pointer;
    &:hover {
      background: #EABE44;
    }
  }
  .i-textarea {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-family: 'TT Commons Light';
    border-bottom: 2px solid white;
    font-size: 30px;
    font-weight: 100;
    padding: 10px 5px;
    // resize: none;
    color: #e4cf95 !important;
    margin-top: 10px;
  }
  p {
    font-size: 18px;
    font-weight: 200;
    font-family: 'TT Commons Light';
  }
  h5 {
    font-size: 24px;
    margin-top: 50px;
    font-weight: 200;
  }
}
</style>
<template lang="pug">
  .brif
    form(@submit.prevent="handleSubmit()")
      h1(style="font-size: 60px;") Бриф для новых клиентов izumi
      p {{ description }}
      h5 Чем вы занимаетесь?
      p Концепция проекта. В чем ваше отличие от конкурентов? Почему вы решили заниматься именно этим?
      div(contentEditable).i-textarea
      h5 Какая у вас миссия?
      div(contentEditable).i-textarea
      h5 Какие услуги вас интерисуют больше всего?
      div(contentEditable).i-textarea
      h5 Какие у вас задачи?
      p Какую задачу вы хотите решить с помощью своего проекта? Какие задачи стоят перед вами сейчас?
      div(contentEditable).i-textarea
      h5 Какой путь решения задач вы видите?
      p Что вы делали раньше? Что хотите попробовать? Чего вы ожидаете от решения задач? В какие сроки вы хотите решить свои задачи и сколько планируете на это потратить?
      div(contentEditable).i-textarea
      h1(style="margin-top: 100px;") Контактные данные
      .inputs
        div(style="width: 100%")
          div
            p Имя
            input()
          div
            p Телефон
            input()
        div(style="width: 100%")
          div
            p Компания
            input()
          div
            p Электронная почта
            input()
      button(type="submit").i-button Отправить бриф
</template>
<script>
export default {
  name: 'Brif',
  data() {
    return {
      // brif description
      description: 
      `
        Перед началом работы мы просим ответить клиентов на несколько вопросов.
        Так мы поймем, чем можем быть полезны вам, какие услуги мы можем вам предложить.
        После заполнения брифа наша встреча будет более продуктивной и ориентированной именно на вас.
      `,
      // 
      ds: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('brif submit')
    }
  }
}
</script>