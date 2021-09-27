<template>
<div id="UP">
    <HeaderFL/>
    
    <div v-if="loaded" class="mainInner">
      <NoVotes v-if="!haveVotes" />
      <Votes v-bind:voteList="this.results" v-if="haveVotes" />
    </div>
    <div v-else>
    <loadingItem medium />
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
    const token = this.$func.getLoggedToken();

    if(!token){ //!this.$store.getters.isLoggedIn
      this.$router.push(this.$store.getters.getMainPageLink);
    } else{

        // pobieranie tokena
        //const token = this.$func.getLoggedToken() // this.$store.getters.getLoggedToken; //localStorage.getItem('JWT_TOKEN');

        // pobieranie listy głosowań
        axios.get(process.env.VUE_APP_PUBLIC_VOTES,{
            headers: {
            'Authorization': `Token ${token}`
            },
            params: {
              page_size: 100,
            }
        })
        .then(resp => {
          console.log("UserPage")
          console.log(resp.data);

            if(resp.data.count>1){
              // jest dostępnych więcej niż 1 głosowanie, wyświetlamy listę i zapisujemy ją do zmiennej

              this.haveVotes = true;
              this.results = resp.data.results;



            } else if(resp.data.count == 1){
              // jest dostępne jedno głosowanie, routujemy od razu na voteCard

              this.$router.push({name: 'voteCard', params: {voteIdProps: resp.data.results[0].id}, query: {onlyOneVote: "true" }});

            } 

            
        })
        .catch(err => {
          console.error(err);
          
            // wylogowywanie
            this.$func.logoutUser();

            if(this.$store.getters.is_IRSS)
              this.$router.push('/');
            else
              this.$router.push('/Home');

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
  overflow: hidden;
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
