<template>


                <div id="header_default">

                    <div id="logo"><a href="/">
                        <img src="../assets/images/logo_samorzad.png" alt="Logo Samorządu Studentów" class="logo_img"></a>
                        </div>
                    
                  
                        <div v-if="this.only_irss || this.only_irss_2" class="text_header " :class="{newCandidateHeader : this.only_irss_2}"> 
                            <span id="linijka_1" class="textMontserrat my_blue wybory_do">{{this.$store.state.msg.header.irss_1}}<br></span>
                            <span id="linijka_2" class="textMontserrat my_magenda">{{this.$store.state.msg.header.irss_2}}<br></span>
                            <span id="linijka_3" class="textMontserrat my_orange">{{this.$store.state.msg.header.irss_3}}</span>
                        </div>
                        <div v-else class="text_header"> 
                            <span id="linijka_1" class="textMontserrat my_blue wybory_do">{{this.$store.state.msg.header.default_1}}<br></span>
                            <span id="linijka_2" class="textMontserrat my_magenda">{{this.$store.state.msg.header.default_2}}<br></span>
                            <span id="linijka_4" class="textMontserrat my_orange">{{this.$store.state.msg.header.default_3}}</span>
                        </div>
                  

                    <ul v-if="this.only_irss" id="icons_navbar">
                        <li class="tooltip"><a href="#calendar">
                            <img id="icon_calendar" class="icon" src="../assets/images/date_range_icon.svg" alt="Przycisk przejścia do terminarza głosowań" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.terminarz}}</span>
                            </li>
                        <li class="tooltip"><a href="#faq">
                            <img id="icon_why" class="icon" src="../assets/images/questionmark.svg" alt="Przycisk przejścia na stronę z najczęściej zadawanymi pytaniami" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.faq}}</span>
                            </li>
                    </ul>

                            
                    

                    
                </div>
</template>

<script>
export default {
  name: "Header",
  components: {},

  props: {
      only_irss: Boolean,
      only_irss_2: Boolean,
      },
  
};
</script>
<style lang="scss" scoped>
#header_default{
    position: relative;
    _background-color: white;
    z-index: 10;
    margin:0;
    height:22vh;
}

#header_default .wybory_do{
    margin: 0px;
}

#header_default #logo{
    padding-right: 20px;
}

#header_default #icons_navbar a{
    text-decoration: none;
}

#header_default .text_header span, #header_default .text_header{
    line-height: 100%;
}
#header_default .icon:hover{
    filter: brightness(60%);
}


.tooltip{
    position: relative;
    display: inline-block;
}

.tooltip .tooltiptext {
  visibility: hidden;
  width: 120px;
  background-color: black;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 5px 0;
  position: absolute;
  z-index: 1;
  top: 130%;
  left: 50%;
  margin-left: -50px;
  
  opacity: 0;
  transition: opacity 0.3s;
}

.tooltip .tooltiptext::after {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: transparent transparent black transparent;
}


@media only screen and (min-width: 1320px) {
    
    #header_default {
        //display:flex; //czy to tu jest konieczne?
        align-items: center;
        height: 20vh;
        margin-bottom: 20px;
        width: 100%;

    }  
    #header_default #logo{
        position: absolute;
    }
    #header_default .text_header {
        margin-left: calc((100% - 800px)/2);
    }
    #header_default .icon{
        width: 60px;
        margin-left: 10px;
    }
}
@media only screen and (min-width: 860px) and (max-width: 1319px) {
   
    #header_default #logo {
        position: relative;
        float: left;
    }
    .text_header {
        margin-left: 0;
    }

    #header_default .icon{
        width: 40px;
        margin-left: 10px;
    }
}
@media only screen and (min-width: 1840px) {
  #header_default .text_header > #linijka_1 {
    font-size: 40px;
  }
  #header_default .text_header > #linijka_2,
  #header_default .text_header > #linijka_3,
  #header_default .text_header > #linijka_4 {
    font-size: 55px;
  }
}
@media only screen and (min-width: 860px) and (max-width: 1839px) {
  #header_default .text_header > #linijka_1 {
    font-size: 2vw;
  }
  #header_default .text_header > #linijka_2,
  #header_default .text_header > #linijka_3,
  #header_default .text_header > #linijka_4 {
    font-size: 3vw;
  }
}
@media only screen and (min-width: 860px) {
  

    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity:0.7;
    }

    .newCandidateHeader{
        margin-left: 60px;
    }

    #header_default {
        height: 13vw;
        margin-bottom: 20px;
        width: 100%;

    }   
    #header_default #logo {
        height: 100%;
        margin-left: 10vw;
    
    }
    
    #header_default .logo_img{
        margin-top: 2.5vw;
        width:  8vw;
    }

    #header_default .text_header {
        padding-top: 3vw;
        float:left;

    }
    
    #header_default #icons_navbar{
        list-style-type: none;
        margin-right: 10vw;
        margin-top:4vw;
        padding: 0;
        float: right;
    }
    #header_default #icons_navbar li{
        float:left;
    }
    
    
}
    
    @media only screen and (max-width: 859px) {
    
    #header_default #logo {
        padding-left: 20px;
      float: left;
    }

    #header_default .logo_img{
                padding-top: 17px;

        width:  55px;
    }
    
    #header_default .text_header {
        float: left;
        padding-top: 18px;    
    }

    #header_default .text_header > #linijka_1, #header_default .text_header > #linijka_2, #header_default .text_header > #linijka_3{
        font-size: 16px;
        line-height: normal;
    }
    

    #header_default {
        height: 90px;
    }  

    #header_default #icons_navbar{
        list-style-type: none;
        margin-right: 25px;
        margin-top:30px;
        padding: 0;
        float: right;
    }
    
    #header_default #icons_navbar li{
        float:left;
    }
 
    #header_default .icon{
        width: 25px;
        margin-left: 10px;
    }
    
}

@media only screen and (max-width: 439px) {
    #header_default #icon_calendar{
        display: none;
    }
}

@media only screen and (max-width: 399px){
    #header_default #icon_why{
        display: none;
    }
}

@media only screen and (max-width: 410px){
    #header_default .text_header > #linijka_4{
        font-size: 12px;
    }
}

@media only screen and (max-width: 330px) {
    #header_default .logo_img{
        padding-top: 23px;
        width:  35px;
    }
    #header_default .text_header > #linijka_1, #header_default .text_header > #linijka_2, #header_default .text_header > #linijka_3{
        font-size: 12px;
    }

    #header_default .text_header > #linijka_4{
        font-size: 10px;
    }
}

@media only screen and (max-width: 330px) {
    #header_default .logo_img{
        display:none;
    }
    #header_default .text_header{
        margin: auto;
        width: 100%;
        text-align: center;
    }
}

</style>
