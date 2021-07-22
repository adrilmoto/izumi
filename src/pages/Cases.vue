<style lang="scss" scoped>
.page {
  @apply flex flex-row justify-center;
  height: 100vh;
  overflow-y: scroll;
  background: #efefef;
  // padding: 20px;
  // border: 1px solid red;
  &-wrapper {
    // border: 1px solid red;
    @apply w-full;
    max-width: 1100px;
    h2 {
      font-size: 48px;
      margin-left: 20px;
      margin-bottom: 0px;
    }
    h1 {
      font-size: 100px;
    }
    .cases {
      @apply flex flex-row flex-wrap;
      // border: 1px solid red;
      .anim {
        cursor: pointer;
        transition: transform 500ms;
        &:hover {
          transform: translateY(-10px);
          -webkit-transform: translateY(-10px);
        }
      }
      .case {
        background: url('/images/delimusic.png');
        @apply flex justify-center relative bg-center bg-no-repeat bg-contain;
        // box-shadow: 1px -1px 100px #000;
        // border: 1px solid rgb(216, 216, 216);
        background: #efefef;
        border-radius: 20px;
        width: 140px;
        height: 140px;
        margin: 20px;
        margin-bottom: 20px;
        box-shadow: 11px 13px 16px 1px rgba(22, 22, 22, 0.15);
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
    overflow-y: scroll;
    background: #efefef;
    // border: 1px solid red;
    &-wrapper {
      padding-top: 50px;
    }
  }
}
@media screen and (max-width: 600px){
  .page {
    &-wrapper {
      padding: 20px;
      padding-top: 50px;
      h2 {
        font-size: 32px;
        margin-left: 20px;
        margin-bottom: 0px;
      }
      .cases {
        .case {
          width: 60px;
          height: 60px;
          border-radius: 10px;
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
      h2 Branding & Strategy
      .cases
        div(
          v-for="(block, caseId) in brandingStrategy"
          :key="caseId"
          :class="[!openedCase ? 'anim' : '']"
          :style="{backgroundImage: `url('/images/cases/${block.img}')`}"
        ).case
          h6 {{block.name}}
          div(v-if="!openedCase" @click="openCase(block)").case-open
          CaseContent(v-if="block.id === currentCase" :caseInfo="block" @close="closeCase()")
      h2 Special Projects
      .cases
        div(
          v-for="(block, caseId) in specialProjects"
          :key="caseId + brandingStrategy.length"
          :class="[!openedCase ? 'anim' : '']"
          :style="{backgroundImage: `url('/images/cases/${block.img}')`}"
        ).case
          h6 {{block.name}}
          div(v-if="!openedCase" @click="openCase(block)").case-open
          CaseContent(v-if="block.id === currentCase" :caseInfo="block" @close="closeCase()")
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
      brandingStrategy: [
        { 
          id: 0,
          name: 'Fosci',
          img: 'fosci.png',
          brif: `
            Компания, разработавшая собственную ERP-систему для автоматизации доставок рационов питания,
            обратилась с запросом на репутационный маркетинг. Задача — сделать бренд более живым и узнаваемым,
            найти новые точки соприкосновения с ЦА.
          `,
          creative: `
            Презентовать бренд как эксперта в сферах бизнеса, биохакинга и здорового питания.
          `,
          release: `
            Поменяли нейминг на fosci (food-science). Сформировали актуальное позиционирование и коммуникационную стратегию.
            Обновили логотип и фирменный стиль. Разработали текстовый и визуальный контент для запуска аккаунта в instagram в соотвествии с визуальной концепцией.
            Использовали 3D-иллюстрацию с целью привлечь аудиторию, интересующуюся технологиями.
          `,
          results: `
            Заданный вектор в направлении создания instagram-комьюнити, позволяющего решать свои бизнес-задачи.
            Начальный контент для аккаунта, исчерпывающий все базовые вопросы.
          `
        },
        { 
          id: 1,
          name: 'Повод найдется',
          img: 'povod.png',
          brif: `
            Компания Повод найдется обратилась с запросом создать собственную школу флористики и онлайн курс..
          `,
          creative: `
            Создать свободную академию флористов с полноценным профессиональным образованием, для тех, кто мечтает сменить профессию. 
          `,
          release: `
            Разработали бренд-платформу для школы флористики. Создали онлайн курс и дополнительные модульные курсы.
            Разработали брендбук, визуальный контент для аккаунта в instagram и сайта в соответствии с визуальной концепцией.
            Предложили коммуникационную стратегию для школы флористики.
          `,
          results: `
          `
        },
        { 
          id: 2,
          name: 'Делисервис',
          img: 'deliservice.png',
          brif: `
            Делисервис - новый старт-ап, мобильное приложение и сайт для получения услуг по 
            обслуживанию авто обратился с запросом создания бренд-платформы и различных special projects.
          `,
          creative: `
            Сохранение визуальной айдентики Делимобиля с привнесением новых деталей для успешного запуска старт-апа на рынок. 
            Научить автомобилистов пользоваться диджитал автосервисами на регулярной основе.
          `,
          release: `
            Разработка пирамиды бренда. Создание коммуникационной стратегии с целью сформировать на старте ядро комьюнити с высоким LTV. 
            Представление фирменного стиля и создание брендбука. Брендирование машин в рамках визуализации брендирования. 
            Создание позиционирования товарной матрицы. Ведение социальных сетей Делисервиса.
          `,
          results: `
          `
        },
      ],
      specialProjects: [
        { 
          id: 3,
          name: 'DELI MUSIC DAY',
          img: 'delimusicday.png',
          brif: `
            Делимобиль — один из сильнейших игроков на рынке каршеринга в России. Летом 2020 команда Дели запустила свежий формат для своих 
            пользователей — драйв-ин фестиваль DELI MUSIC DAY. 
            Наша задача состояла в том, чтобы поддержать мероприятие локальными нано-инфлюинсерами из Екатеринбурга.  
          `,
          creative: `

          `,
          release: `
            Отобрали 15 наиболее ярких и молодых инфлюинсеров, проконтролировали своевременное размещение постов с нативным и эмоциональным упоминанием об ивенте.
          `,
          results: `
            Построили максимальное знание о мероприятии. Простимулировали покупку билета. Обеспечили 
            кросс-конверсию в инсталы приложения Делимобиль.
          `
        },
        { 
          id: 4,
          name: 'Делимобиль',
          img: 'deli.png',
          brif: `
            Каршеринг Delimobil обратилась с запросом создания серии видеороликов для привлечения миллениалов как новой аудитории.
          `,
          creative: `
            Внедрение лаконичных антикризисных идей, направленных на развитие адекватного 
            шеринг-комьюнити и формирование положительной репутации.
          `,
          release: `
            Придумали и сняли серию ценностных lifestyle роликов, которые отражают ценности бренда.
            Создание special project "Странные виды транспорта" с целью закрепить 
            каршеринг в сознании пользователей как один из видов транспорта.
          `,
          results: `
            Запустили ролики на различные платформы.
          `
        },
        { 
          id: 5,
          name: 'Sixty',
          img: 'sixty.png',
          brif: `
            60-ая Параллель — компания, осуществляющая строительно-ремонтные работы с 1990 года, 
            преимущественно на государственных заказа обратилась с запросом создать качественную 
            бренд-платформу новой ветки бизнеса (частный сектор) для запуска MVP
          `,
          creative: `
            Презентовать бренд как опытную компанию, которая занимается ремонтом и строительством, провести ребрендинг с целью привлечь новую платежеспособную аудиторию.
          `,
          release: `
            Сформировали уникальное торговое предложение. Произвели доработку названия. 
            Представили вектор продвижения вашего бренда, опираясь на сегментирование целевой аудитории. 
            Разработали корпоративную идентификацию для print- и digital-материалов: шрифты, цвета, элементы, стилистику, провели доработку логотипа.
          `,
          results: `
            Создали новый образ компании как компании, которая объединяет современные технологии и ценный опыт.
          `
        },
        { 
          id: 6,
          name: 'Sirius',
          img: 'sirius.png',
          brif: `
            Sirius — относительно молодой производитель навесных вентилируемых фасадов.
            Целевая аудитория разнообразна с точки зрения возраста и пользовательских привычек.
            Поступил запрос на качественную коммуникационную стратегию.
          `,
          creative: `
            Прогрессивность превыше консерватизма. Выделить систему Sirius на фоне конкурентов удобством онлайн-коммуникации.
            Взять за основу развитие собственного образовательного журнала со статьями и вебинарами, исключая неэффективные вложения в социальные сети.
          `,
          release: `
            Провели социологическое исследование, выявив новый интересный сегмент ЦА — проектировщиков и их главную боль — недостаток образовательного контента.
            Внедрили новую коммуникационную стратегию, где ключевые слова: прогрессивность, прозрачность, взаимопомощь.
          `,
          results: `
            Начали путь ребрендинга с фирменного стиля. Сотрудничество продолжается
          `
        },
        { 
          id: 7,
          name: 'Ampl',
          img: 'ampl.png',
          brif: `
            Ampl - бренд с
            медицинской базой, гарантирующий
            эффективность и поддержку обратился с запросом помощи выхода на рынок и формирования ядра покупателей.
          `,
          creative: `
            Хотим сделать упор на медицинский фактор, ёмко
            и доступно объяснить действие продукта, в том
            числе с медицинской точки зрения. Коммуницировать через дизайн и через приверженность научному подходу в
            тестировании и разработке.
          `,
          release: `
            Реализовали custdev для более детального изучения ЦА. Предложили вариант нейминга. Представили коммуникационную стратегию, 
            опираясь на ценности бренда и желания ЦА. Создали фирменный стиль и собрали всю информацию в брендбук.
          `,
          results: `
            Помогли старт-апу выйти на рынок, создали узнаваемый бренд уходовой косметики, в дизайне которой транслируются ее ценности.
          `
        },
      ],
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
  }
}
</script>