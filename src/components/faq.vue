<template>
  <section id="faq">
    <!---- STRONA FAQ ---->

    <div class="page textMontserrat">
      <div class="background_bar">
        <span>NAJCZĘŚCIEJ ZADAWANE PYTANIA</span>
      </div>
      <br />
      <div class="faq">
        <faqBar
          class1="collapsible c1 my_magenda"
          class="c1"
          question="Do kiedy można oddać swój głos?"
          answer="Głos można oddać od___ do____"
        />
        <faqBar
          class1="collapsible c2 my_orange"
          class="c2"
          question="Do kiedy można oddać swój głos?"
          answer="Głos można oddać od___ do____"
        />
        <faqBar
          class1="collapsible c3 my_blue"
          class="c3"
          question="Do kiedy można oddać swój głos?"
          answer="Głos można oddać od___ do____"
        />
        <faqBar
          class1="collapsible c1 my_magenda"
          class="c1"
          question="Do kiedy można oddać swój głos?"
          answer="Głos można oddać od___ do____"
        />
      </div>

      <img
        src="../assets/images/faq.svg"
        alt="Element dekoracyjny"
        class="faq_img"
      />
      <a href="#home_section" v-show="$route.name !== 'faq'"
        ><img
          src="../assets/images/arrow.svg"
          alt="Przycisk powrotu na stronę startową"
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
};
</script>

<style lang="scss" scoped>
.background_bar{
    background-color: var(--my_blue); /* For browsers that do not support gradients */
    background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
    color: white;
    _color: var(--my_blue);
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
}
.page{
    //margin-top:20px;
    position: relative; 
    width: 100%; 
    height: 100%;
    min-height: 400px;
}
.arrow_img{
    position: relative;
    bottom: 0px;
    transform: rotate(180deg);
    right: 0; 
    margin-left: auto; 
    margin-right: auto; 
    margin-top:30px;
    margin-bottom: 30px;
    width: 60px; 
    left: 50%;
    transform: translateX(-50%);
}
    
@media only screen and (min-width: 860px) {
    .background_bar{
        font-size: 4vw;
    }
    .faq_img{
        position: absolute;
        width: 400px;
        right: 0px;
        bottom: 0px;
        padding: 40px;
        transform: rotate(5deg);
        z-index: 0;
        opacity: 80%;
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
    .faq_img{
        position: absolute;
        width: 400px;
        right: 0px;
        bottom: 0px;
        padding: 40px;
        transform: rotate(5deg);
        z-index: 0;
        opacity: 5%;
    }
    .faq{
        position: relative;
        width: 90%;
        margin:auto;
        z-index: 1;
    }
  /*  .faq .content{
        font-size: 16px;
    }*/
}
</style>
