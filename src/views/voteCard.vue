<template>
  <div>
<HeaderForLogged v-bind:onlyOneVote="this.onlyOneVote" />
    <div v-if="loaded">

      <voteDetails 
        v-bind:vote="this.vote"
        v-bind:onlyOneVote="this.onlyOneVote"
      />  
    </div>
    <div v-else>
      <LoadingItem medium /> 
    </div>
  </div>
</template>
<script>
import axios from 'axios';

import LoadingItem from '@/components/loadingItem.vue';
import HeaderForLogged from "@/components/HeaderForLogged.vue";
import voteDetails from "@/components/voteDetails.vue";
export default {
  name: "voteCard",
  data() {
    return {
      loaded: false,
      voteIdVar: this.$route.params.voteIdProps,
      onlyOneVote: (this.$route.query.onlyOneVote  === 'true'),
      vote: Object,
    };
  },
  components: {
    //Footer,
    HeaderForLogged,
    voteDetails,
    LoadingItem,
  },


  created: function () {
    const token = this.$func.getLoggedToken(); //localStorage.getItem('JWT_TOKEN');

    if(!token){
      this.$router.push(this.$store.getters.getMainPageLink);
    }
    else{

        // pobieranie tokena

        // pobieranie listy głosowań
        axios.get(process.env.VUE_APP_PUBLIC_VOTES+this.voteIdVar+"/", { 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
          //this.loaded= true;
          this.vote = resp.data; 
          console.log(this.vote); //todo delete
        })
        .catch(err =>{
          if(err.response.status == 404){
            this.$router.push("/404");
          } else{
            
            // wylogowywanie
            this.$func.logoutUser();

            if(this.$store.getters.is_IRSS)
              this.$router.push('/');
            else
              this.$router.push('/Home');
              
          }
        })
        .then(() => {
          this.loaded = true;
        })

    }
  }
};
</script>
<style scoped></style>
