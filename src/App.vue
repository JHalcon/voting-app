<template>
  <div id="app">

    <div id="content-wrap">

      <router-view />

    </div>                      


    <Footer />

  </div>
</template>

<script>
import Footer from '@/components/Footer.vue';

export default {
  components: {
    Footer,
  },
  created() {
    console.log("App.vue, created " + this.$store.getters.localStorageSupport)
  }

};
</script>

<style lang="scss">
//@import url("https://fonts.googleapis.com/css2?family=Montserrat:wght@900&display=swap");
//@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap");

@font-face {
  font-family: "Montserrat";
  font-weight: 900;
  src: local("Montserrat"),
   url(./assets/fonts/Roboto/Montserrat-Black.ttf) format("truetype");
}

/* latin-ext */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(assets/fonts/Roboto/RobotoLatinExt.woff2) format('woff2');
  unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
/* latin */
@font-face {
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 100;
  font-display: swap;
  src: url(assets/fonts/Roboto/RobotoLatin.woff2) format('woff2');
  unicode-range: U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD;
}
////


::after,
::before {
  box-sizing: border-box;
}
* {
  margin: 0;
  padding: 0;
  border: none;
  box-sizing: border-box;
  _font-weight: 400;
}

body,
html {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  scroll-behavior: smooth;
}
body{
    overflow-y: scroll;
}
span,p, h3{
    cursor: default;
      line-height: 1.5;

}

#app {
  //width: 100%;
  min-height: 100%;
  position: relative;
  background-color: white;
}

.scroll-container {
  width: 100%;
  height: 100%;
  position: relative;
  margin: 0;
  padding: 0;
}

.scroll-container section {
  width: 100%;
  height: 100%;
}

/////
:root {
  --my_magenda: #d03372;
  --my_blue: #2700b6;
  --my_orange: #f7b252;
  --my_orange_dark: #e6a54c;
  --my_magenda_light: #faeaf1;
  --my_magenda_dark: #a62659;
  --my_orange_light: #fef4e7;
  --my_blue_light: #ebe6ff;
  --my_blue_light2: #5f33ff;
  --my_blue_dark: #160066;
  --my_blue_dark2: #11004d;

// height of footer and width of screen:
//          width <= 315px   ===>   height: 85px;
// 316px <= width <= 449px   ===>   height: 105px; 
// 450px <= width <= 767px   ===>   height: 65px;
// 768px <= width <= 949px   ===>   height: 45px;
// 950px <= width <= 1549px  ===>   height: 50px;
// 1550px<= width            ===>   height: 55px;
  --footer_0_315: 105px;
  --footer_316_449: 120px;
  --footer_450_767: 65px;
  --footer_768_949: 45px;
  --footer_950_1549: 50px;
  --footer_1550_max: 55px;
}
.my_blue {
  color: var(--my_blue);
}
.my_orange {
  color: var(--my_orange);
}
.my_orange_dark {
  color: var(--my_orange_dark);
}
.my_magenda {
  color: var(--my_magenda);
}

.textMontserrat {
  font-family: "Montserrat";
}
.textRoboto {
  font-family: "Roboto", sans-serif;
}
hr.solid {
  border-top: 2px solid lightgrey;
}

// Buttony na kilka komponentów
.button_click{
    border-radius: 10px;
    transition: transform 0.05s;
    cursor: pointer;
}
.button_click:hover{
  box-shadow: 2px 2px 2px gray;
}
.button_click:active {
  box-shadow: 2px 2px 0px #666;
  transform: translateY(4px); 
  transition: transform 0.05s;
}
.blueBTN{
    background-color: var(--my_blue);
}
.blueBTN:hover{
    background-color: var(--my_blue_dark);
}
.orangeBTN{
  background-color: var(--my_orange);
}
.orangeBTN:hover{
  background-color: var(--my_orange_dark);
}
.magendaBTN{
  background-color: var(--my_magenda);
}
.magendaBTN:hover{
  background-color: var(--my_magenda_dark);
}




// Scroll bar
@media only screen and(min-width: 600px){
  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 7px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--my_blue_dark); 
    border-radius: 1px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: var(--my_blue_dark2); 
  }
}



// footer height
@media only screen and (min-width: 1550px) {
  #content-wrap{
    padding-bottom: var(--footer_1550_max);
  }
}
@media only screen and (min-width: 950px) and (max-width: 1549px) {
  #content-wrap{
    padding-bottom: var(--footer_950_1549);
  }
}
@media only screen and (min-width: 868px) and (max-width: 949px) {
  #content-wrap{
    padding-bottom: var(--footer_768_949);
  }
}
@media only screen and (min-width: 500px) and (max-width: 867px) {
  #content-wrap{
    padding-bottom: var(--footer_450_767);
  }
}
@media only screen and (min-width: 327px) and (max-width: 499px) {
  #content-wrap{
    padding-bottom: var(--footer_316_449);
  }
}
@media only screen and (max-width: 326px) {
  #content-wrap{
    padding-bottom: var(--footer_0_315);
  }
}

</style>
