<style lang="scss">
::-webkit-scrollbar {
  width: 9px;
//  height: 13px;
}
::-webkit-scrollbar-thumb {
 background-color: #191919;
 border-radius: 100px;
 border-top: 60px solid #efefef;
//  box-shadow: inset 0 59px 0px #efefef;
 border-right: 2px solid #efefef;
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
  font-family: "TT Commons ExtraBold";
  src: url("/fonts/TTCommons-ExtraBold.woff") format("woff"),
        url("/fonts/TTCommons-ExtraBold.eot") format("eot"),
        url("/fonts/TTCommons-ExtraBold.ttf") format("ttf");
}
@font-face {
  font-family: "TT Commons Light";
  src: url("/fonts/TTCommons-Light.woff") format("woff"),
        url("/fonts/TTCommons-Light.eot") format("eot"),
        url("/fonts/TTCommons-Light.ttf") format("ttf");
}
@font-face {
  font-family: "TT Commons Medium";
  src: url("/fonts/TTCommons-Medium.woff") format("woff"),
        url("/fonts/TTCommons-Medium.eot") format("eot"),
        url("/fonts/TTCommons-Medium.ttf") format("ttf");
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
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  mounted() {
  }
}
</script>
