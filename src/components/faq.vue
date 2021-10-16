<template>
  <section id="faq">
    <!---- STRONA FAQ ---->

    <div class="page textMontserrat">
      <div :class="{ 'background_bar_fullsite' : fullsite, 'background_bar' : !fullsite }">
        <span>{{this.$store.state.msg.faqComponent.tytul}}<span v-if="fullsite">:</span></span>
      </div>
      <br />
      <div class="faq">

        <faqBar v-for="(f, index) in this.faqList" :key="index" 
          :index=index
          :question=f.q
          :answer=f.a
          v-bind:fullsite=fullsite
        />
        
        <faqBar
          :index=this.faqList.length
          question="Gdzie znajdują się wszystkie zapisy dotyczące wyborów?"
          v-bind:fullsite=fullsite
          ordynacja
        />
        <button v-if="this.$store.state.is_new_candidate_turn_on" @click="new_candidate" class="blueBTN button_click">{{this.$store.state.msg.userPanel.btn_zglos_sie}}</button>

      </div>

      <a href="javascript:void(0);" id="top_arrow" @click="scrollToTop" v-show="$route.name !== 'faq' && $route.name !== 'faqForCandidates'"
        ><img
          src="../assets/images/arrow.svg"
          alt="Powrót na stronę startową"
          class="arrow_img"
      /></a>
    </div>
  </section>
</template>
<script>
import faqBar from "@/components/faqBar.vue";
export default {
  name: "faq",
  components: {
    faqBar,
  },
  props: {fullsite: Boolean},
  data(){
    return{
      faqList: this.$store.state.msg.faq,
    }
  },
  methods:{
      new_candidate(){
        this.$router.push('/newCandidate');
      },
      scrollToTop(){
        document.getElementById('home_section').scrollIntoView();
      }
  }
};
</script>

<style lang="scss" scoped>
.background_bar{
    background-color: var(--my_blue); /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
    color: white;
    //_color: var(--my_blue);
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.background_bar_fullsite{
    //_background-color: var(--my_blue); /* For browsers that do not support gradients */
    //__background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
    //_color: white;
    color: var(--my_blue);
    text-align: center;
    margin-top: 30px;
    margin-bottom: 10px;
}

.page{
    //margin-top:20px;
    position: relative; 
    width: 100%; 
    height: 100%;
    min-height: 400px;
    margin-bottom: 30px;

}
.arrow_img{
    position: relative;
    bottom: 0px;
    transform: rotate(180deg);
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    margin-top:30px;
    width: 60px; 
    left: 50%;
    transform: translateX(-50%);
}

button{
  display: flex;
  margin: auto;
  font-family: "Montserrat"; 
  color:white;
  font-size: 1.3rem;
  padding: 15px;

}
    
@media only screen and (min-width: 860px) {
    .background_bar_fullsite{
        font-size: 2.1vw;
    }

    .background_bar{
        font-size: 4vw;
    }

    .faq{
        position: relative;
        width: 70%;
        margin:auto;
        z-index: 1;
    }
    
    
}
@media only screen and (max-width: 859px) {
    .background_bar{
        font-size: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .background_bar_fullsite{
        font-size: 18px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .faq{
        position: relative;
        width: 90%;
        margin:auto;
        z-index: 1;
    }
    #top_arrow{
      display:none;
    }
  /*  .faq .content{
        font-size: 16px;
    }*/
}
</style>
