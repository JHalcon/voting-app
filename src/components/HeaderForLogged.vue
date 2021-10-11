<template>
            <div id="header_for_logged">
                <div class="header_element">
                    <a href="/userpage" id="logo" class="cursor_pointer">
                        <img src="../assets/images/logo_samorzad.png" alt="Logo Samorządu Studentów" id="logo_img">
                        </a>
                    
                    <div class="text_header"> 
                        <span id="linijka_1" class="textMontserrat my_blue">{{this.$store.state.msg.header.default_1}}<br></span>
                        <span id="linijka_2" class="textMontserrat my_magenda">{{this.$store.state.msg.header.default_2}}<br></span>
                        <span id="linijka_3" class="textMontserrat my_orange">{{this.$store.state.msg.header.default_3}}</span>
                        <span id="linijka_telefon" class="textMontserrat"><span class="my_magenda">{{this.$store.state.msg.header.default_4}}</span><br><span class="my_orange">{{this.$store.state.msg.header.default_5}}</span></span>

                    </div>
                    
                   
                    <ul id="icons_navbar">
                        <li class="tooltip">
                            <a href="/userpage">
                            <img id="icon_home" class="icon cursor_pointer" src="../assets/images/icon_home.svg" alt="Strona główna" >
                                <div v-if="this.onlyOneVote">
                                    <div v-if="this.$route.name == 'voteCard'" class="icon_underline"></div>
                                </div>
                                <div v-else>
                                    <div v-if="this.$route.name == 'UserPage'" class="icon_underline"></div>
                                </div>
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.home}}</span>
                            </li>
                        <li v-if="this.$store.state.is_irss" class="tooltip"><a href="/calendar">
                            <img id="icon_calendar" class="icon cursor_pointer" src="../assets/images/date_range_icon.svg" alt="Terminarz głosowań" >
                            <div v-if="this.$route.name == 'calendar'" class="icon_underline"></div>
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.terminarz}}</span>
                            </li>
                        <li v-if="this.$store.state.is_irss" class="tooltip"><a href="/faq">
                            <img id="icon_why" class="icon cursor_pointer" src="../assets/images/questionmark.svg" alt="Najczęściej zadawane pytania" >
                            <div v-if="this.$route.name == 'faq'" class="icon_underline"></div>
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.faq}}</span>
                            </li>
                        <li class="tooltip"><a href="/profile">
                            <img id="icon_profile" class="icon cursor_pointer" src="../assets/images/icon_profile.svg" alt="Profil" >
                            <div v-if="this.$route.name == 'profile'" class="icon_underline"></div>
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.profil}}</span>
                            </li>
                        <li class="tooltip"><a href="" @click="logout" @keyup.enter="logout">
                            <img id="icon_logout" class="icon cursor_pointer" src="../assets/images/icon_logout.svg" alt="Wyloguj" >
                            </a>
                            <span class="tooltiptext textRoboto">{{this.$store.state.msg.header.wyloguj}}</span>
                            </li>

                    </ul>
                </div>
        
            <div id="header_for_logged_hr"></div>
                    
            </div>

</template>

<script>

import axios from 'axios';


export default {
  name: "HeaderFL",
  components: {},
  props: {
    nakladka_irss: Boolean,
    onlyOneVote: Boolean,
  },
  methods:{

      logout(){

          const token = this.$func.getLoggedToken();
          console.log(token);

                axios.post(process.env.VUE_APP_LOGOUT,{
                    email: this.username,
                    password: this.password,
                }, {
                    headers: {
                        'Authorization': `Token ${token}`
                    }
                })
  
                
                this.$func.logoutUser();

                if(this.$store.getters.is_IRSS)
                    this.$router.push('/');
                else
                    this.$router.push('/Home');

      },

        refreshWithPropsButton(){
            console.log(this.$route.params.voteIdProps);

            this.$router.go(this.$router.currentRoute)
//            this.$router.push({name: 'voteCard', params: {voteIdProps: this.$route.params.voteIdProps, onlyOneVote: this.onlyOneVote }});

        }

      /*
      click_logo(){
          if(this.$route.name !== 'UserPage')
            this.$router.push('/UserPage');
            
      },
      */
      
  }
};
</script>
<style lang="scss" scoped>

#header_for_logged_hr{
    height: 1px;
    background-color: #ccc;
    border: none;
    width: 95%;
    margin: auto;
    margin-bottom: 0;//30px;
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
    padding-top: 0px;
    position: relative;
    float: left;
}

.icon{
    transition: filter 0.1s;
}

#header_for_logged .icon:hover{
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






#header_for_logged .cursor_pointer{
    cursor: pointer;
}

#header_for_logged .text_header {
    float:left;
    margin-left: 20px;

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

.icon_underline{
    background-color: var(--my_blue);
    border-radius: 10px;    
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

@media only screen and (min-width: 1090px) {
  
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
    
    .icon_underline{
        height: 6px;
        margin-left: 20px;
    }

    #header_for_logged #icons_navbar{
        margin-right: 20px;
        margin-top: 40px;
    }

    
}
    
@media only screen and (min-width:768px) and (max-width: 1089px) {

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

    .icon_underline{
        height: 5px;
        margin-left: 10px;
    }

    #header_for_logged #icons_navbar{
        margin-right: 50px;
        margin-top: 30px;
    }
    
    
}

@media only screen and (min-width: 768px) {
    .tooltip:hover .tooltiptext {
        visibility: visible;
        opacity:0.7;
    }

    #header_for_logged #linijka_telefon{
        display: none;
    }
}


@media only screen and (max-width: 767px) {

    #header_for_logged_hr{
        margin-bottom: 0px;
    }

    #header_for_logged .header_element{
        height: 50px;
        width: 100%;
        margin-top: 5px;
    }   

    #header_for_logged #logo {
        margin-left: 20px;
    }
    


    #header_for_logged .text_header {
        padding-top: 10px;
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

     .icon_underline{
        height: 3px;
        margin-left: 10px;
        
    }

    #header_for_logged #icons_navbar{
        margin-right: 20px;
        margin-top: 13px;
    }
    
    
}

@media only screen and (min-width: 350px) and (max-width: 767px){
    #header_for_logged #logo_img{
        height: 30px;
    }
    #header_for_logged #logo {
        margin-top: 10px;
    }
    
    #header_for_logged .text_header span{
        font-size: 15px;
    }
}

@media only screen and (max-width: 349px) {
    #header_for_logged #linijka_telefon{
        _display: none;
        margin-top: 4px;
        font-size: 12px;
    }
    #logo{
        display:none;
    }

    #header_for_logged #logo_img{
        height: 25px;
    }
     #header_for_logged #logo {
        margin-top: 11px;
    }
}

@media only screen and (max-width: 266px) {
    #header_for_logged #linijka_telefon{
        display: none;
    }
}


</style>
