<template>
  <div id="main" class="scroll-container">
    <section id="home_section">
      <!--<router-link to="/UserPage">User Page</router-link>-->
      <Header only_irss />
      <login-panel />

      <img
        src="../assets/images/orange.svg"
        alt="Element dekoracyjny"
        class="orange_img"
      />
      <img
        src="../assets/images/orange2.svg"
        alt="Element dekoracyjny"
        class="orange2_img"
      />
      <img
        src="../assets/images/blue.svg"
        alt="Element dekoracyjny"
        class="blue_img"
      />

      <img
        src="../assets/images/3students_1.svg"
        alt="Element dekoracyjny"
        class="students_1_img"
      />
      <img
        src="../assets/images/3students_2.svg"
        alt="Element dekoracyjny"
        class="students_2_img"
      />
      <img
        src="../assets/images//studentlaptop.svg"
        alt="Element dekoracyjny"
        class="studentlaptop_img"
      />
      <img
        src="../assets/images/studentlaptop2.svg"
        alt="Element dekoracyjny"
        class="studentlaptop2_img"
      />
    </section>
    <calendar />
    <faq />
    <FooterForMain />
  </div>
</template>

<script>
import Header from "@/components/Header.vue";
import LoginPanel from "../components/loginPanel.vue";
import calendar from "@/components/calendar.vue";
import faq from "@/components/faq.vue";
import FooterForMain from "@/components/FooterForMain.vue";
export default {
  name: "mainPage",
  components: {
    Header,
    LoginPanel,
    calendar,
    faq,
    FooterForMain,
  },
  created: function () {
    if(this.$store.getters.isLoggedIn){
        this.$router.push('/UserPage');
    }
  }
};
</script>
<style lang="scss">
.main {
  min-height: 100%;
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

#main_frame{

    background-color: white;
    border-style: solid;
    border-color: var(--my_magenda);
    border-radius: 40px;
    text-align: center;
    position: relative; 
    z-index: 3;

}

.login_txt {
  margin-bottom: 30px;
  font-weight: bold;
  color: gray;
}

#main_frame input[type="text"]{
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

#main_frame input[type="text"]:focus{
	background-color: #e8eeef;
}

#main_frame .login_btn{
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

#main_frame .login_btn:hover {background-color: var(--my_magenda_dark);}

#main_frame .login_btn:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

#main_frame ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 0.6; /* Firefox */
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

  #home_section {
    position: relative;
    min-height: 900px;
  }

  #main_text_br1 {
    display: none;
  }

    #main_frame .main_frame_text{
        font-size: 30px;

    }

    #main_frame{
        border-width: 6px;
        padding:60px;
        margin: auto;
        width: 800px;
    }

    #main_frame input[type="text"]{
        font-size: 20px;    
        width: 500px;
    
    }
    
    #main_frame .login_btn{
        font-size: 24px;
        margin: 20px 30px 0px;

    }

    #home_section{
        position: relative;
        min-height: 900px;
    }

    #main_frame #main_text_br1{
        display:none;
    }

    .orange2_img{
        display: none;
    }
    .students_2_img{
        display: none;
    }
    .studentlaptop2_img{
        display: none;
    }

    .blue_img{
        position: absolute;
        width: 45%;
        bottom: 0px;
        z-index: 2;
    }
    .orange_img{
        position: absolute;
        width: 60%;
        right: 0px;
        bottom: 0px;
        z-index: 1;
    }
    .students_1_img{
        position: absolute;
        width: 30%;
        bottom: 0px;
        z-index: 2;
    }
    .studentlaptop_img{
        position: absolute;
        width: 25%;
        right: 0px;
        //bottom: -2px;
        bottom:1px;
        transform: scaleX(-1);

        z-index: 1;
    }

    

  .blue_img {
    position: absolute;
    width: 45%;
    bottom: 0px;
    z-index: 2;
  }
  .orange_img {
    position: absolute;
    width: 60%;
    right: 0px;
    bottom: 0px;
    z-index: 1;
  }
  .students_1_img {
    position: absolute;
    width: 30%;
    bottom: 0px;
    z-index: 2;
  }
  .studentlaptop_img {
    position: absolute;
    width: 25%;
    right: 0px;
    //bottom: -2px;
    bottom: 1px;
    transform: scaleX(-1);

    z-index: 1;
  }
}
@media only screen and (max-width: 859px) {
    #main_frame{
        border-width: 3px;
        padding:3vw;
        padding-top:8vw;
        
        margin: 3%;
        width: 94%;

    }

    #home_section{
        position: relative;
        min-height: 700px;
    }

    #main_frame input[type="text"]{
        font-size: 16px;  
        width: 100%;
      
    }

    #main_frame .login_btn{
        margin: 10px 30px 30px;

    }


    .blue_img{
        display: none;
    }
    .orange_img{
        display: none;
    }
    .students_1_img{
        display: none;
    }
    .studentlaptop_img{
        display: none;
    }
    .orange2_img{
        position: absolute;
        width: 105%;
        
        left: 0px;
        bottom: 0px;
        z-index: 1;
    }
    .students_2_img{
        position: absolute;
        width: 55%;
        right: 0px;
        bottom: 0px;

        z-index: 2;
    }
    .studentlaptop2_img{
        position: absolute;
        width: 60%;
        //bottom: -2px;
        bottom:1px;
        left: -40px;

        z-index: 1;
    }

    margin: 3%;
    width: 94%;
  }

  #home {
    position: relative;
    min-height: 700px;
  }

@media only screen and (max-width: 330px) {
    #main_frame .login_btn{
        padding: 5px 5px;
    }
    #logo{
        padding-left: 8px;
        padding-right: 8px;
    
    }
}
</style>
