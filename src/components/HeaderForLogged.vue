<template>
            <div id="header_for_logged">
                <div class="header_element">
                    <div id="logo"><a href="">
                        <img src="../assets/images/logo_samorzad.png" alt="Logo Samorządu Studentów" id="logo_img"></a>
                        </div>
                    
                    <div class="text_header"> 
                        <span id="linijka_1" class="textMontserrat my_blue">SYSTEM WYBORCZY<br></span>
                        <span id="linijka_2" class="textMontserrat my_magenda">SAMORZĄDU STUDENTÓW<br></span>
                        <span id="linijka_3" class="textMontserrat my_orange">UNIWERSYTETU PEDAGOGICZNEGO</span>
                        <span id="linijka_telefon" class="textMontserrat"><span class="my_magenda">SYSTEM</span><br><span class="my_orange">WYBORCZY</span></span>

                    </div>
                    
                   
                    <ul id="icons_navbar">
                        <li><a href="/calendar">
                            <img id="icon_calendar" class="icon" src="../assets/images/date_range_icon.svg" alt="Przycisk przejścia do terminarza głosowań" >
                            </a>
                            </li>
                        <li><a href="/faq">
                            <img id="icon_why" class="icon" src="../assets/images/questionmark.svg" alt="Przycisk przejścia na stronę z najczęściej zadawanymi pytaniami" >
                            </a>
                            </li>
                        <li><a href="/profile">
                            <img id="icon_profile" class="icon" src="../assets/images/icon_profile.svg" alt="Przycisk przejścia na stronę dotyczącą profilu" >
                            </a>
                            </li>
                        <li><div @click="logout">
                            <img id="icon_logout" class="icon" src="../assets/images/icon_logout.svg" alt="Przycisk wyloguj" >
                            </div>
                            </li>

                    </ul>
                </div>
        
            <div id="header_for_logged_hr"></div>
                    
            </div>

</template>

<script>
export default {
  name: "HeaderFL",
  components: {
  },
  methods:{
      logout(){
            localStorage.removeItem('JWT_TOKEN');  
            localStorage.removeItem('REFRESH_TOKEN'); 

            //console.log("aa");
            this.$store.dispatch('logoutUser');

      },
  }
};
</script>
<style lang="scss">

#header_for_logged_hr{
    height: 1px;
    background-color: #ccc;
    border: none;
    width: 95%;
    margin: auto;
    margin-bottom: 30px;
}
#header_for_logged .header_element{
    position: relative;
    background-color: white;
    z-index: 10;
}

#header_for_logged .wybory_do{
    margin: 0px;
}

#header_for_logged #logo{
    height: 100%;
    padding-top: 0px;
    padding-right: 20px;
    position: relative;
    float: left;
}

#header_for_logged .icon:hover{
    filter: brightness(60%);
}

#header_for_logged .icon{
    width: 50px;
    margin-left: 20px;
    cursor: pointer;
}

#header_for_logged .text_header {
    float:left;
}

#header_for_logged .text_header span{
    line-height: 100%;
}

#header_for_logged #icons_navbar a{
    text-decoration: none;
}

#header_for_logged #icons_navbar{
    list-style-type: none;
    float: right;
}

#header_for_logged #icons_navbar li{
    float:left;
}

@media only screen and (min-width: 1500px) {
    #header_for_logged{
        width:1500px;
        margin: auto;
    }
    #header_for_logged_hr{
        width:1500px;
    }
    #header_for_logged #logo{
        margin-left:0;
    }
}

@media only screen and (min-width: 1050px) {
  
    #header_for_logged .header_element{
        height: 140px;
        width: 100%;
    }   

    #header_for_logged #logo {
        margin-left: 20px;
        margin-top: 25px;
    }
    
    #header_for_logged #logo_img{
        height:  90px;
    }

    #header_for_logged .text_header {
        padding-top: 25px;
    }

    #header_for_logged .text_header span{
        font-size: 30px;
    }
    
    #header_for_logged .icon{
        width: 50px;
        margin-left: 20px;
    }

    #header_for_logged #icons_navbar{
        margin-right: 20px;
        margin-top: 40px;
    }

    
}
    
@media only screen and (min-width:768px) and (max-width: 1049px) {

    #header_for_logged .header_element{
        height: 100px;
        width: 100%;
    }   

    #header_for_logged #logo {
        margin-left: 20px;
        margin-top: 15px;
    }
    
    #header_for_logged #logo_img{
        height:  70px;
    }

    #header_for_logged .text_header {
        padding-top: 15px;
    }

    #header_for_logged .text_header span{
        font-size: 20px;
    }
    
    #header_for_logged .icon{
        width: 30px;
        margin-left: 10px;
    }

    #header_for_logged #icons_navbar{
        margin-right: 50px;
        margin-top: 30px;
    }
    
    
}

@media only screen and (min-width: 768px) {
    #header_for_logged #linijka_telefon{
        display: none;
    }
}


@media only screen and (max-width: 767px) {

     #header_for_logged .header_element{
        height: 50px;
        width: 100%;
    }   

    #header_for_logged #logo {
        margin-left: 20px;
        margin-top: 10px;
    }
    
    #header_for_logged #logo_img{
        height: 30px;
    }

    #header_for_logged .text_header {
        padding-top: 10px;
    }

    #header_for_logged .text_header span{
        font-size: 15px;
    }

    #header_for_logged #linijka_1, #header_for_logged #linijka_2, #header_for_logged #linijka_3{
        display: none;
    }

    #header_for_logged #linijka_telefon{
        display:block;
    }
    
    #header_for_logged .icon{
        width: 20px;
        margin-left: 10px;
    }

    #header_for_logged #icons_navbar{
        margin-right: 20px;
        margin-top: 13px;
    }
    
    
}

@media only screen and (max-width: 315px) {
    #header_for_logged #linijka_telefon{
        display: none;
    }
}


</style>
