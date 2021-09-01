<template>

<div id="home">
    <Header />
    <LoginPanelPassword/>

    <img src="../assets/images/1student.svg" alt="Grafika dekoracyjna" class="student_img">
    <img src="../assets/images/1student_2.svg" alt="Grafika dekoracyjna" class="student2_img">

</div>


</template>

<script>
import Header from "@/components/Header.vue";
import LoginPanelPassword from '../components/loginPanelPassword.vue';


export default {
  name: "mainPage",
  props:["haveVotes"],
  components: {
    Header,
    LoginPanelPassword,
  },
  created: function () {
    if(this.$store.getters.isLoggedIn){
        this.$router.push('/UserPage');
    }
  }
};
</script>
<style lang="scss" scoped>

.student_img, .student2_img{
     display: none;
}

@media only screen and (min-width: 1150px){

    .student_img, .student2_img{
        display: block;
        position: absolute;
        width: 20%;
        max-height: 445px;
        bottom:2rem;
        z-index: 1;
    }

    .student_img{
        left: -30px;
    }
    .student2_img{
        right: -30px;
    }
}



</style>
