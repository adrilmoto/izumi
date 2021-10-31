<style lang="scss">
::-webkit-scrollbar {
  width: 9px;
  height: 0px !important;
}

::-webkit-scrollbar-thumb {
 background-color: #191919;
//  border-radius: 100px;
//  border-top: 60px solid #efefef;
// //  box-shadow: inset 0 59px 0px #efefef;
//  border-right: 2px solid #efefef;
//  outline: 1px solid #efefef;
  @apply relative;
}
::-webkit-scrollbar-track {
  background: #efefef;
  margin-right: 2px;
}
body {
  padding: 0;
  margin: 0;
  font-family: "TT Commons Medium";
}
html {
  padding: 0;
  margin: 0;
}
@font-face {
  font-family: "Conthrax";
  src: url("/fonts/conthrax.ttf") format("truetype");
}
@font-face {
  font-family: "TT Commons ExtraBold";
  src: url("/fonts/HelveticaNeueCyr-Black.ttf") format("truetype");
}
@font-face {
  font-family: "TT Commons Light";
  src: url("/fonts/HelveticaNeueCyr-Light.ttf") format("truetype");
}
@font-face {
  font-family: "TT Commons Medium";
  src: url("/fonts/HelveticaNeueCyr-Medium.ttf") format("truetype");
}
p {
  // font-size: 20px;
  font-family: "TT Commons Medium";
  margin-top: 10px;
  margin-bottom: 10px;
}
h1 {
  font-family: "TT Commons ExtraBold";
}
h2 {
  font-family: "TT Commons ExtraBold";
}
h6 {
  font-family: "TT Commons Light";
  font-weight: 200;
  margin: 0;
}
h5 {
  font-family: "TT Commons Medium";
  margin: 0;
}
h3 {
  font-family: "TT Commons ExtraBold";
  margin: 0;
}
.br {
  border: 1px solid red;
}
.desktop {
  display: inherit;
}
.mobile {
  display: none;
}
@media screen and (max-width: 700px) {
  .desktop {
    display: none !important;
  }
  .mobile {
    display: inherit;
  }
}
</style>

<template lang="pug">
div(id="app")
  router-view
</template>

<script>
export default {
  name: 'App',
  async mounted() {
    console.log('mounted')
    // window.Chatra.$el.style.display = 'none'
    await this.$store.dispatch('metaAboutGet')
    // this.$nextTick(() => {
    //   console.log('window.Chatra', window.Chatra)
    //   window.Chatra('sendAutoMessage', 'Fuck you motherfucker')
    // })
  }
}
</script>
