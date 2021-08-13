<template>
  <div id="main" class="scroll-container">
    <section id="home_section">
      <!--<router-link to="/UserPage">User Page</router-link>-->
      <Header only_irss />
      <login-panel />

    <MainPageImages/>


    </section>
    <calendar />
    <faq />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginPanel from "../components/loginPanel.vue";
import calendar from "@/components/calendar.vue";
import faq from "@/components/faq.vue";
import MainPageImages from '@/components/mainPageImages.vue';

export default {
  name: "mainPage",
  components: {
    Header,
    LoginPanel,
    calendar,
    faq,
    MainPageImages,

  },
  created: function () {
    if(this.$store.getters.isLoggedIn){
        this.$router.push('/UserPage');
    }
  }
};
</script>
<style lang="scss">

#main {
  //min-height: 100%;
  //max-width: 1500px;
}

.scroll-container {
  //max-width: 1500px;
  //margin: auto;

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

.main_frame{

    background-color: white;
    border-style: solid;
    border-color: var(--my_magenda);
    border-radius: 40px;
    text-align: center;
    position: relative; 
    z-index: 4;

}

.login_txt {
  margin-bottom: 30px;
  font-weight: bold;
  color: gray;
}

.main_frame input[type="text"]{
	background: rgba(255,255,255,.1);
	border: 2px solid lightgrey;
	border-radius: 10px;
	margin: 0;
	outline: 0;
	padding: 10px;
	margin-bottom: 30px;
    font-weight:bold;
    color: gray;
    
}

.main_frame input[type="text"]:focus{
	background-color: #e8eeef;
}

.login_btn{
    width:40%;
    height: 70px;

    display: inline-block;
    padding: 15px 25px;
    font-weight:bold;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: var(--my_magenda);
    border: none;
    border-radius: 15px;
    box-shadow: 2px 5px 5px #999;
}

.login_btn:hover {background-color: var(--my_magenda_dark);}

.login_btn:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 0.6; /* Firefox */
  }

  #home_section{
        position: relative;
        min-height: 100vh;
    }


@media only screen and (min-width: 860px) {
  .main_frame_text {
    font-size: 30px;
  }

  .main_frame {
    border-width: 6px;
    padding: 60px;
    margin: auto;
    width: 800px;
  }

  .main_frame input[type="text"] {
    font-size: 20px;
    width: 500px;
  }

  .login_btn {
    font-size: 24px;
    margin: 20px 30px 0px;
  }
/*
    #home_section{
        position: relative;
        //min-height: 900px;
    }
*/
    #main_text_br1{
        display:none;
    }
  
}
@media only screen and (max-width: 859px) {
    .main_frame{
        border-width: 3px;
        padding:3vw;
        padding-top:8vw;
        
        margin: 3%;
        width: 94%;

    }
/*
    #home_section{
        position: relative;
        //min-height: 700px;
    }
*/
    .main_frame input[type="text"]{
        font-size: 16px;  
        width: 100%;
      
    }

    .main_frame .login_btn{
        margin: 10px 30px 30px;

    }


  }


@media only screen and (max-width: 330px) {
    .main_frame .login_btn{
        padding: 5px 5px;
    }
    #logo{
        padding-left: 8px;
        padding-right: 8px;
    
    }
}
</style>
