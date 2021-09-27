<template>
  <section id="faq">
    <!---- STRONA FAQ ---->

    <div class="page textMontserrat">
      <div class="background_bar_fullsite">
        <span>{{this.$store.state.msg.candidatesList.tytul}}</span>
      </div>
      
      <button @click="download_answers" :disabled="isDisabledButton" :class="{button_click: !isDisabledButton}" class="orangeBTN BTN ">{{this.$store.state.msg.candidatesList.download}}</button> 

      <br />
      <div class="faq">

        <h2 class="komunikat" v-if="isDisabledButton">{{this.$store.state.msg.candidatesList.brak}}</h2>

        <faqBar v-for="(f, index) in this.faqList" :key="index" 
          :index=index
          :question='f.imie+" "+f.nazwisko+" - "+f.kierunek+" - "+f.rok'
          :answers=f.poparcie
        />
                
      </div>

    </div>
  </section>
</template>
<script>
import faqBar from "@/components/faqBar.vue";
import qs from 'qs';
import axios from 'axios';


export default {
  name: "faq",
  components: {
    faqBar,
  },
  props: {
      faqList: Array,
  },
  methods: {

        download_answers(){

            // pobieranie tokena
            const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');
            const data = { 'Authorization': `Token ${token}`};

            axios({
                method: 'post',
                url: 'https://bp98.smallhost.pl/api/post/download.php',
                headers: { 'content-type': 'application/x-www-form-urlencoded'},
                data: qs.stringify(data),
                responseType: 'blob',
            })
            .then(({ data }) => {
  
                var filename_bracket;
                if(this.faqList.length>0)
                    filename_bracket="1-"+this.faqList.length; 
                else
                    filename_bracket="0";


                const downloadUrl = window.URL.createObjectURL(new Blob([data]));
                const link = document.createElement('a');
                link.href = downloadUrl;
                link.setAttribute('download', 'zgloszenia_irrs('+filename_bracket+').csv');
                document.body.appendChild(link);
                link.click();
                link.remove();

            })
            .catch(err => {
                console.error("err "+err);
            })

      }

  },
  computed:{
      isDisabledButton(){
          return this.faqList.length == 0;
      }
  }
};
</script>

<style lang="scss" scoped>
.komunikat{
    text-align: center;
    color: #345;
}

button.BTN {
  margin: 10px;
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;

  display:block;
  margin-left: auto;
  margin-right: auto;
  /*margin: auto;*/
}

button.BTN:disabled{
    background-color: lightgray;
}

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

.background_bar_fullsite{
    _background-color: var(--my_blue); /* For browsers that do not support gradients */
    _background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
    _color: white;
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
    .background_bar_fullsite{
        font-size: 2.1vw;
    }

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
        opacity: 20%;
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
}
</style>
