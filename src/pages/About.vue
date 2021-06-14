<style lang="scss" scoped>
.page {
  @apply flex flex-row justify-center py-9 px-5;
  .content {
    @apply flex-col flex w-full justify-start;
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
</style>
<template lang="pug">
  .page
    .content
      h1 О нас
      p Мы создаем бренд-платформы. Фокусируемся на брендинге и спецпроектах.
      p А вот несколько причин, почему мы и ваш бренд — это perfect match:
      p мы знаем как привлекать миллениалов и зумеров, ведь мы сами родились на стыке поколений Y-Z;
      p мы предоставляем клиентский сервис по цене фриланса;
      p в проектах мы всегда отталкиваемся от вашего бюджета и бизнес-задач, а не от нашей комфортной планки;
      p помимо агентства мы развиваем сообщество креативных предпринимателей, поэтому у нас есть большой ресурс для творческих коллабораций.
</template>