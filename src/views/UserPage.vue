<template>
<div id="UP">
    <HeaderFL/>
    
    <div v-if="loaded" class="mainInner">
      <NoVotes v-if="!haveVotes" />
      <Votes v-bind:voteList="this.results" v-if="haveVotes" />
    </div>
    <div v-else>
    <loadingItem />
    </div>

  </div>
</template>

<script>
import axios from 'axios';

import LoadingItem from '@/components/loadingItem.vue';
import HeaderFL from '@/components/HeaderForLogged.vue';
import NoVotes from '@/components/NoVotes.vue';
import Votes from '@/components/Votes.vue';
export default {
  name: "UserPage",
  data() {
    return {
      haveVotes: false,
      loaded: false,
      results: null,
    };
  },
  components: {
    HeaderFL,
    NoVotes,
    Votes,
    LoadingItem,
  },
  created: function () {
    if(!this.$store.getters.isLoggedIn){
      this.$router.push(this.$store.getters.getMainPageLink);
    } else{

        // pobieranie tokena
        const token = localStorage.getItem('JWT_TOKEN');

        // pobieranie listy głosowań
        axios.get('https://dev.api.up.kornel.dev/api/v1/public/vote/vote/', { 
          headers: {
            'Authorization': `Token ${token}`
          }
        })
        .then(resp => {
          console.log(resp.data);

            if(resp.data.count>1){
              // jest dostępnych więcej niż 1 głosowanie, wyświetlamy listę i zapisujemy ją do zmiennej

              this.haveVotes = true;
              this.results = resp.data.results;



            } else if(resp.data.count == 1){
              // jest dostępne jedno głosowanie, routujemy od razu na voteCard

              // TODO TUTAJ OD RAZU ROUTUJEMY NA VOTEDETAILS Z TYMI ELEMENTAMI =========================================================
              this.$router.push({name: 'voteCard', params: {voteIdProps: resp.data.results[0].id}, query: {onlyOneVote: "true" }});

            } 

            
        })
        .catch(err => {
          console.error(err);
          
          // TODO UTWORZYĆ KOMPONENT "WYSTĄPIŁ PROBLEM"

        })
        .then(() => {
          // wyświetlenie odpowiedniej strony
          this.loaded = true;
        })
        
    }
  }
};
</script>
<style lang="scss">
#UP {
  overflow-y: hidden;
  //position: absolute; //wyrzuciłem to wszystko, ponieważ w app.vue jest content-wrap
  //min-height: 100%;
  //width: 100%;
}
.mainInner {
  min-height: 300px;
  width: 100%;
  
  max-width: 1500px;
  margin: auto;

  display: flex;
  justify-content: center;
  margin-bottom: 50px;
}
@media only screen and (max-width: 767px) {
  .mainInner {
    //min-height: 80vh;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  .mainInner {
    //overflow: auto;
    margin-bottom: 50px;
  }
}
</style>
