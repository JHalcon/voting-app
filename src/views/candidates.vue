<template>
<div id="candidatesPage">

    <HeaderFL />   

    <candidatesList :faqList="this.kandydaci" v-if="loaded" />
    <loadingItem v-else />

</div>
</template>

<script>
import HeaderFL from "@/components/HeaderForLogged.vue";
import candidatesList from '@/components/candidatesList.vue';
import loadingItem from "@/components/loadingItem.vue";
import axios from "axios";
import qs from 'qs';

export default {
  name: "candidatesPage",
  components: {
    HeaderFL,
    candidatesList,
    loadingItem,
  },
  data() { 
      return {
        loaded: false,
        kandydaci: [],
    }
  },
  created: function () {

    if(!this.$store.state.is_irss)
      this.$router.push('/userPage');
    else if(!this.$func.getLoggedToken())
        this.$router.push('/userPage');
    else{


        // pobieranie tokenu

        const token = this.$func.getLoggedToken(); // localStorage.getItem('JWT_TOKEN');

        axios.get(process.env.VUE_APP_AUTH_URL, {
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp =>{

            if(resp.data.is_superuser){

              // autoryzacja uzyskana, wyslanie prosby na moj serwer
              const data = { 'Authorization': `Token ${token}`};

              axios({
                  method: 'post',
                  url: 'https://bp98.smallhost.pl/api/post/read.php',
                  headers: { 'content-type': 'application/x-www-form-urlencoded'},
                  data: qs.stringify(data),
              })
              .then(resp => {
                  console.log(resp.data);
                  
                  if(resp.data.length>0)
                    this.kandydaci = resp.data;

                  this.loaded = true;


              })
              .catch(err => {
                  console.error(err);
              })
              
            } else{
              this.$router.push('/userPage');
            }
        })

        .catch(err =>{

            console.log(err)

            // wylogowywanie
            this.$func.logoutUser();

            if(this.$store.getters.is_IRSS)
              this.$router.push('/');
            else
              this.$router.push('/Home');

        })


    }
    
  }
};
</script>
<style lang="scss" scoped>


</style>
