<style lang="scss" scoped>
::-webkit-scrollbar {
 width: 15px;
 height: 5px;
}
::-webkit-scrollbar-thumb {
 background: #000;
//  border-radius: 15px;
}
::-webkit-scrollbar-thumb:hover{
 background: #EABE44;
}
::-webkit-scrollbar-track{
 background: #fff;
 border-radius: 10px;
//  box-shadow: inset 7px 10px 12px #f0f0f0;
}
.page {
  @apply flex flex-row justify-center;
  max-height: 100vh;
  overflow: scroll;
  // border: 1px solid red;
  &-wrapper {
    // border: 1px solid red;
    @apply py-9 px-5;
    max-width: 1100px;
    h2 {
      font-size: 60px;
      margin-left: 20px;
    }
    h1 {
      font-size: 100px;
    }
    .cases {
      @apply flex flex-row flex-wrap;
      // border: 1px solid red;
      .case {
        background: url('/images/delimusic.png');
        @apply flex justify-center relative bg-center bg-no-repeat bg-contain;
        // box-shadow: 1px -1px 100px #000;
        border-radius: 30px;
        cursor: pointer;
        width: 260px;
        height: 260px;
        margin: 20px;
        margin-bottom: 70px;
        &:hover {
          transform: scale(1.01)
        }
        h6 {
          @apply absolute;
          font-size: 34px;
          font-weight: 500;
          bottom: -50px;
        }
      }
    }
  }
}
.folder {
  @apply flex flex-row flex-wrap relative;
  background: rgba(0, 0, 0, 0.2);
  border-radius: 30px;
  width: 100%;
  width: 260px;
  // padding: 20px;
  height: 260px;
  margin: 20px;
  margin-bottom: 70px;
  .apps {
    @apply flex flex-row flex-wrap justify-start content-start;
    padding: 20px;
    .app {
      background: rgb(146, 146, 146);
      border-radius: 10px;
      cursor: pointer;
      width: 60px;
      height: 60px;
      margin: 5px;
      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>
<template lang="pug">
  .page
    DialogCase(v-if="openedCase" @close="openCase()")
    .page-wrapper
      h1(style="margin-left: 20px;") Кейсы
      h2 Branding & Strategy
      .cases
        div(
          v-for="(block, caseId) in brandingStrategy"
          :key="caseId"
          @click="openCase()"
        ).case
          h6 {{block.name}}
      h2 CustDev
      .cases
        div(
          v-for="(block, caseId) in custDev"
          :key="caseId"
          @click="openCase()"
        ).case
          h6 {{block.name}}
      h2 Special Projects
      .cases
        div(
          v-for="(block, caseId) in specialProjects"
          :key="caseId"
          @click="openCase()"
        ).case
          h6 {{block.name}}
        .folder
          .apps
            div(v-for="pack in 4").app
</template>
<script>
import DialogCase from '@/components/DialogCase.vue'

export default {
  name: 'Cases',
  components: {
    DialogCase
  },
  data() {
    return {
      openedCase: false,
      brandingStrategy: [
        { name: 'Fosci', img: '' },
        { name: 'Повод найдется', img: '' },
        { name: 'Делисервис', img: '' },
      ],
      custDev: [
        { name: 'Sirius', img: '' },
        { name: 'Ampl', img: '' },
      ],
      specialProjects: [
        { name: 'DELI MUSIC DAY', img: '' },
        { name: 'Делимобиль', img: '' },
        { name: 'Creative papka', img: '' },
        { name: 'Sixty', img: '' },
      ],
    }
  },
  methods: {
    openCase() {
      this.openedCase = !this.openedCase
    }
  }
}
</script>