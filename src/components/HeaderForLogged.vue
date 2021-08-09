<template>

                <div class="header_element">
                    <div id="logo"><a href="">
                        <img src="../assets/images/logo_samorzad.png" alt="Logo Samorządu Studentów" class="logo_img"></a>
                        </div>
                    
                    <div v-if="nakladka_irss" class="text_header"> 
                        <span id="linijka_1" class="textMontserrat my_blue wybory_do">WYBORY DO<br></span>
                        <span id="linijka_2" class="textMontserrat my_magenda">INSTYTUTOWYCH RAD<br></span>
                        <span id="linijka_3" class="textMontserrat my_orange">SAMORZĄDU STUDENTÓW</span>
                    </div>
                    <div v-else class="text_header"> 
                        <span id="linijka_1" class="textMontserrat my_blue wybory_do">SYSTEM WYBORCZY<br></span>
                        <span id="linijka_2" class="textMontserrat my_magenda">SAMORZĄDU STUDENTÓW<br></span>
                        <span id="linijka_4" class="textMontserrat my_orange">UNIWERSYTETU PEDAGOGICZNEGO</span>
                    </div>
                   
                    <ul v-if="nakladka_irss" id="icons_navbar">
                        <li><a href="#calendar">
                            <img id="icon_calendar" class="icon" src="../assets/images/date_range_icon.svg" alt="Przycisk przejścia do terminarza głosowań" >
                            </a>
                            </li>
                        <li><a href="#faq">
                            <img id="icon_why" class="icon" src="../assets/images/questionmark.svg" alt="Przycisk przejścia na stronę z najczęściej zadawanymi pytaniami" >
                            </a>
                            </li>
                    </ul>

                            
                    

                    
                </div>

</template>

<script>
export default {
  name: "HeaderFL",
  components: {
  },
  props:{
      nakladka_irss: Boolean,
   },
};
</script>
<style lang="scss">
.header_element{
    position: relative;
    background-color: white;
    z-index: 10;
    margin:0;
    height:22vh;
}

.wybory_do{
    margin: 0px;
}

#logo{
    padding-right: 20px;
}

#icons_navbar a{
    text-decoration: none;
}

.text_header span, .text_header{
    line-height: 100%;
}
.icon:hover{
    filter: brightness(60%);
}

/*
@media only screen and (min-width: 1320px) {
    
      .header_element{
        display:flex;
        align-items: center;
        height: 20vh;
        margin-bottom: 20px;
        width: 100%;

    }  
    #logo{
        position: absolute;
    }
    .text_header {
        margin-left: calc((100% - 800px)/2);;
    }
    .icon{
        width: 60px;
        margin-left: 10px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1319px) {
   
    #logo {
        position: relative;
        float: left;
    }
    .text_header {
        margin-left: 0;
    }

    .icon{
        width: 40px;
        margin-left: 10px;
    }
}

@media only screen and (min-width: 1840px) {
    .text_header > #linijka_1{
        font-size: 40px;
    }
    .text_header > #linijka_2, .text_header > #linijka_3, .text_header > #linijka_4{
        font-size: 55px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1839px) {
    .text_header > #linijka_1{
        font-size: 2vw;
    }
    .text_header > #linijka_2, .text_header > #linijka_3, .text_header > #linijka_4{
        font-size: 3vw;
    }
}

@media only screen and (min-width: 860px) {
  
    .header_element{
        height: 13vw;
        margin-bottom: 20px;
        width: 100%;

    }   
  #logo {
        height: 100%;
        margin-left: 10vw;
    
    }
    
    .logo_img{
        margin-top: 2.5vw;
        width:  8vw;
    }

    .text_header {
        padding-top: 3vw;
        float:left;

    }
    

    #icons_navbar{
        list-style-type: none;
        margin-right: 10vw;
        margin-top:4vw;
        padding: 0;
        float: right;
    }
    #icons_navbar li{
        float:left;
    }
    
    
}
    
    @media only screen and (max-width: 859px) {
    
    #logo {
        padding-left: 20px;
      float: left;
    }

    .logo_img{
                padding-top: 17px;

        width:  55px;
    }
    
    .text_header {
        float: left;
        padding-top: 18px;    
    }

    .text_header > #linijka_1, .text_header > #linijka_2, .text_header > #linijka_3{
        font-size: 16px;
        line-height: normal;
    }
    

    .header_element{
        height: 130px;
    }  



    #icons_navbar{
        list-style-type: none;
        margin-right: 25px;
        margin-top:30px;
        padding: 0;
        float: right;
    }
    #icons_navbar li{
        float:left;
    }
 
    .icon{
        width: 25px;
        margin-left: 10px;
    }
    
}

@media only screen and (max-width: 439px) {
    #icon_calendar{
        display: none;
    }
}

@media only screen and (max-width: 399px){
    #icon_why{
        display: none;
    }
}

@media only screen and (max-width: 410px){
    .text_header > #linijka_4{
        font-size: 12px;
    }
}

@media only screen and (max-width: 330px) {
    .logo_img{
        padding-top: 23px;
        width:  35px;
    }
    .text_header > #linijka_1, .text_header > #linijka_2, .text_header > #linijka_3{
        font-size: 12px;
    }

    .text_header > #linijka_4{
        font-size: 10px;
    }
}

@media only screen and (max-width: 330px) {
    .logo_img{
        display:none;
    }
    .text_header{
        margin: auto;
        width: 100%;
        text-align: center;
    }
}
*/

</style>
