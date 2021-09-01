<template>
  <div id="footer">
    <div id="footer_hr"></div>
    <footer>
      <a href="https://samorzad.up.krakow.pl">Samorząd Studentów</a>
      <br id="breakline1">
      <span id="dot1"> · </span>

      <a href="https://skni.up.krakow.pl"
        >Studenckie Koło Naukowe Informatyków</a
      ><br id="breakline2">
      <span id="dot2"> · </span>
      
      <a href="https://www.up.krakow.pl"
        >Uniwersytet Pedagogiczny im.&nbsp;KEN w&nbsp;Krakowie</a
      >
      <br id="breakline3">
      <span id="dot3"> · </span> 2021
    </footer>
  </div>
</template>

<script>
export default {
  name: "Footer",
  components: {},
};
</script>
<style lang="scss" scoped>

#breakline1, #breakline2, #breakline3{
  display: none;
}
#footer {

  position: absolute;
  bottom: 0;
  width: 100%;

  z-index: 3;
  background-color:white;

  //////////
  //padding: 15px;
  //margin-top: 15px;
  //padding: 0px 15px 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: gray;
}
footer{
    padding: 10px;
}
footer, footer span {
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: gray;
}
footer a {
  color: gray;
  font-weight: bold;
  text-decoration: inherit;
}
footer a:hover {
  color: var(--my_magenda);
  text-decoration: underline;
}
#footer_hr {
  height: 1px;
  background-color: #ccc;
  border: none;
  width: 95%;
  margin: auto;
}

// height of footer and width of screen:
//          width <= 315px   ===>   height: 85px;
// 316px <= width <= 449px   ===>   height: 105px; 
// 450px <= width <= 767px   ===>   height: 65px;
// 768px <= width <= 949px   ===>   height: 45px;
// 950px <= width <= 1549px  ===>   height: 50px;
// 1550px<= width            ===>   height: 55px;

@media only screen and (min-width: 1550px) {
  footer,
  footer a {
    font-size: 20px;
  }
  #footer{
    height: var(--footer_1550_max);
  }
}
@media only screen and (min-width: 950px) and (max-width: 1549px) {
  footer,
  footer a {
    font-size: 16px;
  }
  #footer{
    height: var(--footer_950_1549);
  }
}

@media only screen and (min-width: 768px) and (max-width: 949px) {
  footer,
  footer a {
    font-size: 14px;
  }
  #footer{
    height: var(--footer_768_949);
  }
}

@media only screen and (min-width: 450px) and (max-width: 767px) {
  #footer{
    height: var(--footer_450_767);
  }
}

@media only screen and (min-width: 316px) and (max-width: 449px) {
  #footer{
    height: var(--footer_316_449);
  }
}

@media only screen and (min-width: 316px) and (max-width: 767px) {
  footer,
  footer a {
    font-size: 14px;
  }
}

@media only screen and (max-width: 315px) {
  #footer{
    height: var(--footer_0_315);
  }
  footer, footer a {
    font-size: 10px;
  }

}

@media only screen and (max-width: 767px) {
  #dot2{
    display: none;
  }
  #breakline2{
    display: block;
  }
}
@media only screen and (max-width:449px) {
  #dot1{
    display: none;
  }
  #breakline1{
    display: block;
  }
  #dot3{
    display: none;
  }
  #breakline3{
    display: block;
  }

}
</style>