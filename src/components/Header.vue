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
                        <li v-if="this.calendar_for_candidates" class="tooltip" :class="{icon_to_hide : !this.main_page}"><a href="/calendarForCandidates">
                            <img id="icon_calendar" class="icon" src="../assets/images/date_range_icon.svg" alt="Terminarz głosowań" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.terminarz}}</span>
                            </li>
                        <li v-else class="tooltip" :class="{icon_to_hide : !this.main_page}"><a href="#calendar">
                            <img id="icon_calendar" class="icon" src="../assets/images/date_range_icon.svg" alt="Terminarz głosowań" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.terminarz}}</span>
                            </li>
                        <li v-if="this.faq_for_candidates" class="tooltip" :class="{icon_to_hide : !this.main_page}"><a href="/faqForCandidates">
                            <img id="icon_why" class="icon" src="../assets/images/questionmark.svg" alt="Najczęściej zadawane pytania" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.faq}}</span>
                            </li>
                        <li v-else class="tooltip" :class="{icon_to_hide : !this.main_page}"><a href="#faq">
                            <img id="icon_why" class="icon" src="../assets/images/questionmark.svg" alt="Najczęściej zadawane pytania" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.faq}}</span>
                            </li>
                        <li class="tooltip" id="menu_button" v-if="!this.main_page"><a href="javascript:void(0);">
                            <img id="icon_hamburger" class="icon" @click="showMenu" src="../assets/images/icon_menu.svg" alt="Menu" >
                            </a>
                            </li>
                    </ul>

                    <!-- mobile navbar -->
                    <div id="mobile_navbar">
                        
                        <li v-if="this.calendar_for_candidates"><a href="/calendarForCandidates">
                            <span class="textMontserrat">{{this.$store.state.msg.header.terminarz}}</span>
                            </a>
                            </li>
                        <li v-if="this.faq_for_candidates"><a href="/faqForCandidates">
                            <span class="textMontserrat">{{this.$store.state.msg.header.faq}}</span>
                            </a>
                            </li>
                        <hr class="thin">

                    </div>
                  
                    

                    
                </div>
</template>

<script>
export default {
  name: "Header",
  components: {},
  data(){
      return{
          mobile_navbar_show: false,
      }
  },
  props: {
      only_irss: Boolean,
      only_irss_2: Boolean,
      faq_for_candidates: Boolean,
      calendar_for_candidates: Boolean,
      main_page: Boolean,
  },
  methods:{
      showMenu(){
          this.mobile_navbar_show = !this.mobile_navbar_show;

          let c = document.getElementById("mobile_navbar");

          if(this.mobile_navbar_show){
                c.style.display = "block";
                c.style.maxHeight = c.scrollHeight + "px";

          } else{
                c.style.maxHeight = null;//"0px";
                setTimeout(() => {
                    c.style.display = "none";
                  }, 200);
          }

      },
 
  },
    
  
};
</script>
<style lang="scss" scoped>
hr.thin {
    border-top: 1px solid lightgrey;
    margin:10px;
}

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
#menu_button{
    display: none;
}
#mobile_navbar{
    display: none;
        overflow: hidden;

    max-height: 0px;
    transition: max-height 0.2s ease-out;
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
    #mobile_navbar{
        _display: block;
        list-style-type: none;
        width: 100%;
        margin-top: 20px;
        _margin-bottom:10px;
        float: left;
        position: relative;
        font-weight: bold;
         
         
        text-align: center;
    }
    #mobile_navbar li{
        _text-decoration: none;
        _margin-left: 20px;
        font-size: 18px;
        padding-bottom: 5px;
       
    }
    


    #menu_button{
        display: block;
    }
    
    .icon_to_hide{
        display:none;
    }

    #header_default #icon_calendar{
        display: none;
    }
}

@media only screen and (max-width: 399px){
    #header_default #icon_why{
        //display: none;
    }
}


@media only screen and (max-width: 399px) {//max-width: 330pX
    #header_default .text_header > #linijka_4{
        font-size: 12px;
    }
     
    #mobile_navbar li a{
        font-size: 15px;
    }

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
    #header_default #icons_navbar{
        margin-top:25px;
    }
}

@media only screen and (max-width: 310px) {
    #header_default .logo_img{
        //display:none;
    }
    #header_default .text_header{
        //margin-left: 30px;
    }
    #header_default #icon_why{
        display: none;
    }
}

@media only screen and (max-width: 285px) {
    #header_default .text_header{
        //margin-left: 0px;
    }

    #header_default #logo {
        padding-right: 10px;
    }
}
</style>
