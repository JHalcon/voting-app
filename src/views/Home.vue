<template>
<div id="home">

     <!--   
    <div v-if="this.$store.getters.isLoggedIn">
        <HeaderFL/>
            
        <div class="mainInner">
        <NoVotes v-if="!haveVotes"/>
        </div>
    </div>
    
    <div v-else> -->
        <Header />
        <LoginPanelPassword/>
        <img src="../assets/images/orange.svg" alt="Element dekoracyjny" class="orange_img">
        <img src="../assets/images/orange2.svg"  alt="Element dekoracyjny" class="orange2_img">
        <img src="../assets/images/blue.svg" alt="Element dekoracyjny" class="blue_img">
        <img src="../assets/images/3students_1.svg" alt="Element dekoracyjny" class="students_1_img">
        <img src="../assets/images/3students_2.svg" alt="Element dekoracyjny" class="students_2_img">
        <img src="../assets/images//studentlaptop.svg" alt="Element dekoracyjny" class="studentlaptop_img">
        <img src="../assets/images/studentlaptop2.svg" alt="Element dekoracyjny" class="studentlaptop2_img">
    <div>
    </div>
    
    <Footer/>

</div>
</template>

<script>
import Header from "@/components/Header.vue";
//import HeaderFL from "@/components/HeaderForLogged.vue";
import LoginPanelPassword from '../components/loginPanelPassword.vue';
import Footer from '@/components/Footer.vue';
//import NoVotes from '@/components/NoVotes.vue';


export default {
  name: "mainPage",
  props:["haveVotes"],
  components: {
    Header,
    //HeaderFL,
    LoginPanelPassword,
    //NoVotes,
    Footer,
  },
  created: function () {
    if(this.$store.getters.isLoggedIn){
        this.$router.push('/UserPage');
    }
  }
};
</script>
<style lang="scss" scoped>


#home {
	width: 100%;
	height: 100%;
	position: relative;
	margin: 0;
	padding: 0;
    
}

#home section {
	width: 100%;
	height: 100%;
}



@media only screen and (min-width: 860px) {


    #home{
        position: relative;
        min-height: 900px;
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

    

}
@media only screen and (max-width: 859px) {

    #home{
        position: relative;
        min-height: 700px;
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


}

@media only screen and (max-width: 330px) {
    #logo{
        padding-left: 8px;
        padding-right: 8px;
    
    }
}







</style>
