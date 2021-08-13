<template>
  <div id="footer">
    <div id="footer_hr"></div>
    <footer>
      <a href="https://samorzad.up.krakow.pl">Samorząd Studentów</a>
      ·
      <a href="https://skni.up.krakow.pl"
        >Studenckie Koło Naukowe Informatyków</a
      >
      ·
      <a href="https://www.up.krakow.pl"
        >Uniwersytet Pedagogiczny im. KEN w Krakowie</a
      >
      · 2021
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
#footer {
  //min-height: 60px;
  //position: absolute;
  //bottom: 0;
  position: absolute;
  bottom: 0;
  width: 100%;

  z-index: 3;
    background-color:white;

  //////////
  padding: 15px;
  //margin-top: 15px;
  //padding: 0px 15px 15px;
  text-align: center;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: gray;
}
footer {
  padding: 10px;
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
  width: 100%;
  margin: auto;
}
@media only screen and (min-width: 1550px) {
  footer,
  footer a {
    font-size: 20px;
    //color: blue;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1549px) {
  #footer {
    min-height: 60px;
  }
  footer {
    font-size: 16px;
    //color: red;
  }
  footer a {
    font-size: 16px;
    // color: red;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  #footer {
    height: 50px;
  }
  footer {
    padding: none;
    font-size: 14px;
  }
  footer a {
    font-size: 14px;
  }
}
@media only screen and (min-width: 315px) and (max-width: 767px) {
  footer {
    font-size: 13px;
  }
}
@media only screen and (min-width: 315px) and (max-width: 767px) and (orientation: landscape) {
  #footer {
    min-height: 90px;
  }
}
@media only screen and (max-width: 315px) {
  footer {
    font-size: 10px;
  }
  footer a {
    font-size: 10px;
    //color: pink;
  }
}
</style>