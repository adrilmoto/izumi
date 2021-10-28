<style lang="scss" scoped>
.page {
  @apply flex flex-row justify-start;
  min-height: calc(100vh - 50px);
  padding-bottom: 50px;
  // overflow-y: scroll;
  background: #efefef;
  // padding: 20px;
  padding-left: 30px;
  &-wrapper {
    // border: 1px solid red;
    @apply w-full;
    padding-right: 140px;
    // max-width: 1100px;
    h2 {
      font-size: 48px;
      margin-left: 20px;
      margin-bottom: 20px;
      // margin-top: 50px;
    }
    p {
      font-size: 24px;
      margin-top: 150px;
      margin-left: 20px;
      max-width: 800px;
      opacity: 0.8;
      color: #191919;
      span {
        color: #CE5236;
      }
    }
    h1 {
      font-size: 100px;
    }
    .cases {
      @apply flex flex-row flex-wrap;
      // border: 1px solid red;
      margin-bottom: 100px;
      .anim {
        cursor: pointer;
        transition: transform 500ms;
        &:hover {
          transform: translateY(-10px);
          -webkit-transform: translateY(-10px);
        }
      }
      .case {
        // background: url('/images/delimusic.png');
        @apply flex justify-center relative bg-no-repeat bg-contain;
        background-position: center !important;
        background-size: contain !important;
        // box-shadow: 1px -1px 100px #000;
        // border: 1px solid rgb(216, 216, 216);
        background: #efefef;
        border-radius: 20px;
        width: 140px;
        height: 140px;
        margin: 20px;
        margin-bottom: 20px;
        box-shadow: 11px 13px 16px 1px rgba(22, 22, 22, 0.15);
        cursor: pointer;
        &-open {
          height: 100%;
          width: 100%;
          // border: 1px solid red;
          border-radius: 15px;
        }
        &-close {
          width: 50px;
          height: 50px;
          background: lime;
          @apply absolute top-0 right-0;
        }
        h6 {
          @apply absolute;
          font-size: 25px;
          color: #191919;
          font-weight: 200;
          width: 170px;
          text-align: center;
          top: 110%;
        }
      }
    }
  }
}
@media screen and (max-width: 1100px) {
  .page {
    @apply flex flex-row justify-center;
    height: 100vh;
    padding-left: 0px;
    // overflow-y: scroll;
    background: #efefef;
    // border: 1px solid red;
    &-wrapper {
      padding-top: 70px;
      padding-right: 0px;
    }
  }
}
@media screen and (max-width: 600px){
  .page {
    // padding-bottom: 0;
    &-wrapper {
      // padding: 20px;
      padding-top: 70px;
      p {
        margin-top: 50px;
        font-size: 18px;
      }
      h2 {
        font-size: 32px;
        // margin-left: 20px;
        margin-bottom: 10px;
      }
      
      .cases {
        margin-bottom: 50px;
        margin-left: 10px;
        .anim {
          transform: none;
          &:hover {
            transform: translateY(0);
            -webkit-transform: translateY(0);
          }
        }
        .case {
          width: 70px;
          height: 70px;
          border-radius: 10px;
          margin: 10px;
          margin-bottom: 20px;
          box-shadow: 5.5px 6.5px 8px 0.5px rgba(22, 22, 22, 0.15);
          h6 {
            @apply absolute;
            font-size: 16px;
            color: #191919;
            font-weight: 700;
            width: 100px;
            text-align: center;
            // border: 1px solid red;
          }
        }
      }
    }
  }
}
</style>

<template lang="pug">
div(ref="page").page
  //- DialogCase(v-if="openedCase" @close="openCase()" :dialogInfo="dialogInfo")
  .page-wrapper
    h2 BRAND PLATFORMS
    .cases
      div(
        v-for="(p, pi) in projects"
        v-if="p.img"
        :key="p.id"
        :style="{backgroundImage: `url('${p.img.url}')`}"
        ).case
        h6 {{p.name}}
        div(@click="$router.push(`/cases/${p.id}`)").case-open
        //- CaseContent(v-if="block.id === currentCase" :caseInfo="block" @close="closeCase()")
    //- h2 SPECIAL PROJECTS
    //- .cases
      div(
        v-for="(block, caseId) in specialProjects"
        :key="caseId"
        :class="[!openedCase ? 'anim' : '']"
        :style="{backgroundImage: `url('/images/cases/${block.img}')`}"
      ).case
        h6 {{block.name}}
        div(v-if="!openedCase" @click="openCase(block)").case-open
        CaseContent(v-if="block.id === currentCase" :caseInfo="block" @close="closeCase()")
    p <span>Некоторые из наших кейсов</span> — ещё не запущенные стартапы, и мы сохраняем конфиденциальность и не публикуем их до запуска.
</template>

<script>
import DialogCase from '@/components/DialogCase.vue'
import CaseContent from '@/components/CaseContent.vue'

export default {
  name: 'Cases',
  components: {
    DialogCase,
    CaseContent
  },
  data() {
    return {
      currentCase: null,
      openedCase: false,
      projects: []
    }
  },
  computed: {
  },
  watch: {
  },
  methods: {
    openCase(block) {
      this.openedCase = true
      console.log('open')
      this.currentCase = block.id
    },
    closeCase() {
      console.log('close')
      this.openedCase = false
      this.currentCase = null
      // gsap.to(this.$refs[payload.name], { left: 'none', top: 'none', duration: 0.3,})
    }
  },
  async mounted() {
    this.projects = await this.$store.dispatch('casesGet')
  }
}
</script>