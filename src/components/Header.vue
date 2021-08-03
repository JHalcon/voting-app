<template>

                <div class="header_element">
                    <div id="logo"><a href="">
                        <img src="../assets/images/logo_samorzad.png" alt="Logo Samorządu Studentów" class="logo_img"></a>
                        </div>
                    
                    <div class="text_header"> 
                        <h2 class="textMontserrat my_blue wybory_do">WYBORY DO</h2>
                        <h1><span class="textMontserrat my_magenda">INSTYTUTOWYCH RAD</span><br>
                            <span class="textMontserrat my_orange">SAMORZĄDU STUDENTÓW</span></h1>
                    </div>
                    
                   
                    <ul id="icons_navbar">
                        <li><a href="#calendar">
                            <img id="icon_calendar" src="../assets/images/date_range_icon.svg" alt="Przycisk przejścia do terminarza głosowań" >
                            </a>
                            </li>
                        <li>
                            <a href="#faq">
                                <h1 id="item_why" class="textMontserrat my_blue" alt="Przycisk przejścia na stronę z najczęściej zadawanymi pytaniami">?
                                    </h1>
                                    </a>
                                    </li>
                    </ul>

                            
                    

                    
                </div>

</template>

<script>
export default {
  name: "Header",
  components: {
  },
};
</script>
<style lang="scss">
.header_element{
    position: relative;
    background-color: white;
    z-index: 10;
}

.wybory_do{
    margin: 0px;
}

#logo{
    padding-top: 20px;
    padding-right: 20px;

}

#icons_navbar a{
    text-decoration: none;
}
#icon_calendar:hover{
    filter: brightness(60%);
}
#item_why:hover{
    filter: brightness(60%);
}
@media only screen and (min-width: 1320px) {
    #logo{
        position: absolute;
    }
    .text_header {
        margin-left: calc((100% - 800px)/2);;
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
}

@media only screen and (min-width: 1840px) {
    .text_header > h1{
        font-size: 55px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1839px) {
    .text_header > h1{
        font-size: 3vw;
    }
}

@media only screen and (min-width: 860px) {
  
    .header_element{
        height: 15vw;/*250px;*/
        margin-bottom: 20px;
        width: 100%;

    }   
  #logo {
       _position: absolute;
       height: 100%;
      margin-left: 10vw;
      _float: left;
    
    }
    
    .logo_img{
        margin-top: calc(50% - 2vw);
        width:  8vw;
    }

    .text_header {
        padding-top: 3vw;
        max-width: 800px;   
        float:left;

    }

    .text_header > h2{
        font-size: 2vw;
    }
    
    #item_why{
        font-size: 5vw;
    }
 
    #icon_calendar{
        width: 5vw;
        padding-top: 0.5vw;
        margin-right: 20px;
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
        width:  55px;
    }
    
    .text_header {
        float: left;
        padding-top: 18px;    
    }

    .text_header > h2{
        font-size: 16px;
    }
    .text_header > h1{
        font-size: 16px;
    }

    .header_element{
        height: 130px;
    }  

    #item_why{
        font-size: 45px;
    }
 
    #icon_calendar{
        width: 45px;
        padding-top: 3px;
        margin-right: 20px;


    }

    #icons_navbar{
        list-style-type: none;
        margin-right: 25px;
        margin-top:18px;
        padding: 0;
        float: right;
    }
    #icons_navbar li{
        float:left;
    }
 
    
}

@media only screen and (max-width: 469px) {
    #icon_calendar{
        display: none;
    }
}

@media only screen and (max-width: 399px){
    #item_why{
        display: none;
    }
}

@media only screen and (max-width: 330px) {
    .logo_img{
        width:  35px;
    }
    .text_header > h2{
        font-size: 13px;
    }
    .text_header > h1{
        font-size: 13px;
    }
}


</style>
