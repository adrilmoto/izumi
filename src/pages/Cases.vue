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
        v-for="(block, caseId) in brandingStrategy"
        :key="caseId"
        :class="[!openedCase ? 'anim' : '']"
        :style="{backgroundImage: `url('/images/cases/${block.img}')`}"
      ).case
        h6 {{block.name}}
        div(v-if="!openedCase" @click="openCase(block)").case-open
        CaseContent(v-if="block.id === currentCase" :caseInfo="block" @close="closeCase()")
    h2 SPECIAL PROJECTS
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
      brandingStrategy: [
        { 
          id: 0,
          name: 'Sixty',
          img: 'sixty/sixty.png',
          guide: 'sixty/guide.pdf',
          media: [ 'sixty/media_0.jpg', 'sixty/media_1.jpg' ],
          brif: `
            60-ая Параллель — компания, осуществляющая строительно-ремонтные работы с 1990 года, преимущественно на государственных заказах.
            Обратились с запросом создать качественную бренд-платформу новой ветки бизнеса (частный сектор) для запуска MVP.
          `,
          creative: `
            Соединить многолетний опыт компании и современный технологичный подход к интерьерам. Привлечь платёжеспособную аудиторию с помощью сильных визуальных ассоциаций.
          `,
          release: `
            Произвели ренейминг (60-ая Параллель — SIXTY) в сторону лаконичности и универсальности. 
            В логотипе использовали геометрическую форму (квадрат) и отсылку к ДНК компании — значок градуса. 
            Разработали два фирменных элемента: Polyhedron & Degree. Упор был сделан на многогранность, уверенность и элегантность.
            Собрали стартовую бренд-платформу: позиционирование, коммуникационная стратегия, визуальная концепция для социальных сетей.
          `,
          results: `
            Успешно соединили видение основателей компании и трендов строительной сферы в едином брендбуке. Упростили команде путь создания сайта и способствовали быстрому запуску MVP.
          `,
          links: [
            { name: '-website', url: 'https://sixtypro.ru/' },
          ]
        },
        { 
          id: 1,
          name: 'Fosci',
          img: 'fosci/fosci.png',
          guide: 'fosci/guide.pdf',
          media: [ 'fosci/media_0.jpg', 'fosci/media_1.jpg', 'fosci/media_2.jpg', 'fosci/media_3.jpg', 'fosci/media_4.jpeg' ],
          brif: `
            Fosci — компания, разработавшая облачный сервис для автоматизации доставок рационов питания. Клиенты, производство, доставка, учёт, финансы — всё в одной системе.
            Обратилась с запросом на создание бренда. Задача — сделать компанию более понятной в коммуникации, найти новые точки соприкосновения с ЦА.
          `,
          creative: `
            Презентовать бренд в качестве эксперта в сферах бизнеса, биохакинга и здорового образа жизни с упором на личный опыт основателя.
          `,
          release: `
            Произвели ренейминг (System-ERP — fosci). Название соединяет в себе две сферы: food и science. 
            Сформировали актуальное позиционирование и коммуникационную стратегию.
            Обновили фирменный стиль. Сделали две версии логотипа: полную и сокращённую. Собрали визуальную концепцию для диджитал-каналов.
            Разработали текстовый и визуальный контент для запуска аккаунта в instagram. Использовали 3D-иллюстрацию с целью привлечь аудиторию, интересующуюся технологиями.
          `,
          results: `
            Бренд-платформа дала правильный импульс для работы отдела продаж, поэтому стратегические вложения быстро окупились.
            Fosci использует айдентику для сайта, приложения и соцсетей. Аккаунт в инстаграме компания использует в качестве визитной карточки для поиска клиентов.
          `,
          links: [
            { name: '-website', url: ' https://fosci.cloud/' },
            { name: '-instagram', url: 'https://www.instagram.com/fosci_cloud/' }
          ]
        },
        { 
          id: 2,
          name: 'Делисервис',
          img: 'deliservice/deliservice.png',
          guide: 'deliservice/guide.pdf',
          media: [ 'deliservice/media_0.jpg', 'deliservice/media_1.mp4', 'deliservice/media_2.mp4', 'deliservice/media_3.mp4', 'deliservice/media_4.mp4' ],
          brif: `
            Делисервис — партнёрская компания Делимобиль и Anytime Prime.
            Польза IT-стартапа заключается в обслуживании авто через мобильное приложение с функцией водителя.
            Агентство осуществляет полноценный бренд-менеджмент на аутсорсе: создание и контроль внедрения.
          `,
          creative: `
            Познакомить рынок с новой услугой, показав бренд прозрачным, технологичным и высокосервисным.
            Повысить доверие к новому продукту за счёт пересечения айдентики и нейминга с Делимобилем.
          `,
          release: `
            Разработка стартовой бренд-стратегии: позиционирование компании и товарной матрицы, коммуникационная стратегия, гайдлайн (айдентика, брендирование машин), визуальная концепция. 
            Работа с лайфстайл- и авто-блогерами.
            Контент-маркетинг для соцсетей под ключ: фото- и видео-продакшен, анимация, дизайн.
            Проведение исследования по 4 полям: аудитория, тренды, конкуренты, индустрия.
          `,
          results: `
            Постоянное привлечение клиентов, брендовая отработка возражений и транслирование ценностей в формате “гипотеза — эксперимент”.
            Сработали, как альтернатива ин-хаус креативной команды в более экономичном формате.
          `,
          links: [
            { name: '-website', url: 'https://deliservice.com/' },
            { name: '-instagram', url: 'https://www.instagram.com/deliservice.auto/' }
          ]
        },
        { 
          id: 3,
          name: 'Ampl',
          img: 'ampl/ampl.png',
          guide: 'ampl/guide.pdf',
          media: [ 'ampl/media_0.png', 'ampl/media_1.jpg', 'ampl/media_2.jpg', 'ampl/media_3.jpg', 'ampl/media_4.jpg' ],
          brif: `
            Клиент обратился с идеей запустить линейку уходовой косметики. Первый продукт — гель для роста бровей и ресниц.
            Наша цель — подготовить бренд-платформу для запуска сайта и проверки MVP.
          `,
          creative: `
            Сделать упор на медицинскую основу, чтобы подчеркнуть эффективность продукта.
            Коммуницировать через лаконичный дизайн и приверженность научному подходу в тестировании и разработке.
          `,
          release: `
            Провели CustDev для более детального изучения ЦА.
            Разработали позиционирование и коммуникационную стратегию, опираясь на фокусные сегменты.
            Предложили несколько вариантов нейминга. Выбор пал на Ampl — объединение «ампулы» и химических элементов таблицы Менделеева.
            Составили визуальную концепцию, сделав акцент на природные текстуры и лабораторность.
          `,
          results: `
            Помогли стартапу с запуском MVP. Создали бренд уходовой косметики, транслирующий ценности, основанные на ожиданиях основателей и потребностях рынка.
          `,
          links: [
            { name: 'BrandBook', url: 'https://drive.google.com/file/d/1BII3Vnq_SeNRBb83lbvTlTp6aVLL69kq/view' }
          ]
        },
        { 
          id: 4,
          name: 'Sirius',
          img: 'sirius/sirius.png',
          guide: 'sirius/guide.pdf',
          media: [ 'sirius/media_0.jpg', 'sirius/media_1.jpg', 'sirius/media_2.jpg' ],
          brif: `
            Sirius — относительно новый на рынке производитель навесных вентилируемых фасадов.
            Поступил запрос на качественную коммуникационную стратегию и перевод бренда в digital-формат.
          `,
          creative: `
            Прогрессивность превыше консерватизма. Выделить систему Sirius на фоне конкурентов удобством онлайн-коммуникации. Выразить их новизну как технологичность, а не как неопытность.
          `,
          release: `
            Провели custdev и выявили новый интересный сегмент ЦА  — проектировщиков, а их главную боль — недостаток образовательного контента.
            Внедрили новую коммуникационную стратегию, где ключевые слова: прогрессивность, прозрачность, взаимопомощь.
          `,
          results: `
            Проведена стратегическая сессия для отдела продаж по внедрению бренд-стратегии. Как следствие, сформированы новые скрипты работы с упором на имиджевые конкурентные преимущества. Компания активно развивается и выходит на новые рынки.
          `,
          links: [
            { name: '-website', url: 'https://www.sirius-nvf.ru/about/' },
          ]
        },
      ],
      specialProjects: [
        { 
          id: 5,
          name: 'Делимобиль',
          img: 'deli/deli.png',
          guide: null,
          media: [ 'deli/media_0.jpeg', 'deli/media_1.jpeg', 'deli/media_2.jpeg', 'deli/media_3.jpeg', 'deli/media_4.mp4' ],
          brif: `
            Делимобиль — сервис поминутной аренды автомобилей (каршеринг). Текущая маркетинговая задача компании — привлечение миллениалов и зумеров, как новой аудитории.
            В агентство обратились за внедрением лаконичных антикризисных идей, направленных на развитие сообщества вокруг бренда.
          `,
          creative: `
            Сформировать адекватное шеринг-комьюнити, которое поддерживает ценности diversity и  осознанности, отличается особым чувством стиля посредством новых пользовательских образов в контент-маркетинге.
          `,
          release: `
            Сняли 10 lifestyle-роликов для медийной рекламы, отражающие ценности бренда и основные юзеркейсы. Сделали акцент на подбор и стилизацию моделей, максимально близких к молодым и продвинутым пользователям каршеринга. Каждый ролик сопровождает CTA.
            Провели фотосъёмку на тему безопасной и аккуратной перевозки собак. Разработали ряд графических / моушен публикаций для соцсетей.
          `,
          results: `
            Размещение рекламного контента, стимулирующего новых и текущих пользователей на совершение поездок.
          `,
          links: [
            { name: '-website', url: 'https://delimobil.ru/' },
            { name: '-instagram', url: 'https://www.instagram.com/delimobil/' }
          ]
        },
        { 
          id: 6,
          name: 'Повод найдется',
          img: 'povod/povod.png',
          guide: 'povod/guide.pdf',
          media: [ 'povod/media_0.jpg', 'povod/media_1.jpeg', 'povod/media_2.HEIC', 'povod/media_3.jpg' ],
          brif: `
            Компания Повод найдется — одна из первых и самых масштабных онлайн-доставок цветов в Москве. Обратились с запросом создать бренд-платформу для школы флористики и составить структуру образовательного курса.
          `,
          creative: `
            Сформировать свободную академию флористов с упором на тех, кто мечтает сменить профессию. Обучать студентов с упором на менеджерские навыки флориста. 
          `,
          release: `
            Разработали бренд-платформу: позиционирование, коммуникационная стратегия, визуальная концепция.
            Сформировали основной курс, совмещающий онлайн и офлайн форматы и дополнительные модульные курсы.
            Разработали фирменный стиль и визуальную концепцию на основе изначальной айдентики магазина.
            Отсняли универсальный фото-контент для сайта и социальных сетей в соответствии с визуальной концепцией. В качестве фирменных элементов взяли любимые ветки и цветы Юлии — основателя компании.
          `,
          results: `
            Школа флористики в процессе запуска. 
          `,
          links: [
            { name: '-website', url: 'https://findreason.ru/' },
            { name: '-instagram', url: 'https://www.instagram.com/povod.flowers/' }
          ]
        },
        { 
          id: 7,
          name: 'HomeBro',
          img: 'homebro/homebro.png',
          guide: null,
          media: [ 'homebro/media_0.mp4', 'homebro/media_1.mp4', 'homebro/media_2.mp4' ],
          brif: `
            HomeBro — умный телеграм-бот, который помогает найти квартиру в Москве и Санкт-Петербурге совершенно бесплатно. Компания обратилась в агентство с целью создания видео для ТикТока, чтобы попробовать данную площадку для продвижения своих услуг.
          `,
          creative: `
            Показать в качестве брендовых лиц стильных и самоироничных зумеров и миллениалов, высмеивающих проблемы поиска жилья. 
          `,
          release: `
            Разработали рубрикатор и прописали контент-план для стартовых видео в ТикТоке.
            Сняли серию из 12 роликов.
          `,
          results: `
            Создали универсальные видео-ролики, которые можно использовать как в качестве контента, так и в performance-маркетинге.
          `,
          links: [
            { name: '-telegram', url: 'https://t.me/homebro_main_bot ' },
            { name: '-website', url: 'https://homebro.ru/' },
            { name: '-instagram', url: 'https://www.instagram.com/homebro.ru/ ' }
          ]
        },
        { 
          id: 8,
          name: 'DELI MUSIC DAY',
          img: 'delimusicday/delimusicday.png',
          guide: null,
          media: [ 'delimusicday/media_0.png', 'delimusicday/media_1.jpg' ],
          brif: `
            Летом 2020 команда Делимобиля запустила свежий формат для своих пользователей — драйв-ин фестиваль DELI MUSIC DAY. Задача состояла в том, чтобы поддержать мероприятие локальными нано-инфлюенсерами из Екатеринбурга с целью продажи билетов.  
          `,
          creative: `

          `,
          release: `
            Отобрали 15 наиболее ярких и молодых инфлюенсеров, проконтролировали своевременное размещение постов с нативным и эмоциональным упоминанием об ивенте.
          `,
          results: `
            Построили максимальное знание о мероприятии. Простимулировали sold-out. Обеспечили кросс-конверсию в инсталы приложения Делимобиль
          `,
          links: [
            { name: '-instagram', url: 'https://www.instagram.com/p/CEbkvOyhvci/?utm_source=ig_web_copy_link' }
          ]
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