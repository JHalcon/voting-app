<template>
  <div id="Votes">
    <h3 class="textMontserrat my_blue headerVotes">{{this.$store.state.msg.userPage.title}}</h3>
    <div class="voteList">
      <ul>
        <li v-for="(v, index) in voteListWithoutCancelled" :key="index"  class="votingListItem" :class="{'votingListItemColor' : (!v.vote_given && !v.is_closed)}">
          <a href="" @click="goToDeails(voteListWithoutCancelled[index].id)" @keyup.enter="goToDeails(voteListWithoutCancelled[index].id)">
            <voteItem :voteGiven="v.vote_given" :closed="v.is_closed" :voteText="v.name"></voteItem>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import voteItem from "@/components/voteItem.vue";
export default {
  name: "NoVotes",
  
  data() {
    return {
      voteListWithoutCancelled: Array,
    };
  },
  components: {
    voteItem,
  },
  props: {
    voteList: Array,
  },
  methods:{
    goToDeails(voteId){
      this.$router.push({name: 'voteCard', params: {voteIdProps: voteId }});
    }
  },
  created(){
    this.voteListWithoutCancelled = this.voteList.filter(vote => !vote.is_canceled)
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
a{
  text-decoration: none;
}
li.votingListItemColor:nth-child(3n+1) > a > div { //zamiast 3n, to 3n+1
  background-color: var(--my_magenda);
}
li.votingListItemColor:nth-child(3n) > a > div { //zamiast 2n, to 3n
  background-color: var(--my_blue);
}
li.votingListItemColor:nth-child(3n - 1) > a > div { //3n-1
  background-color: var(--my_orange);
}
li.votingListItemColor:nth-child(3n+1) > a:hover > div { //zamiast 3n, to 3n+1
  background-color: var(--my_magenda_dark);
}
li.votingListItemColor:nth-child(3n) > a:hover > div { //zamiast 2n, to 3n
  background-color: var(--my_blue_dark);
}
li.votingListItemColor:nth-child(3n-1) > a:hover > div { //to 3n-1 dodałem, bo nie było
  background-color: var(--my_orange_dark);
}
li::marker {
  display: none;
}

#Votes {
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-family: Roboto;
  font-size: 1.7rem;
  width: 75%;
  margin: auto;
  min-height: 300px;
}
.voteList {
  display: flex;
  justify-content: center;
  width: 100%;
}

ul {
  width: 90%;
}
h3.textMontserrat.my_blue.headerVotes {
  display: flex;
  justify-content: center;
  text-align: center;
    padding: 20px;

}

@media only screen and (max-width: 767px) {
  #Votes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.4rem;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.3rem;
    padding: 6px;
    margin: 10px;
  }
  #Votes {
    //min-height: 50vh;
    min-height: 300px;
    flex-wrap: nowrap;
    width: 100%;
    padding: 0;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #Votes {
    width: 90%;
  }
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.7rem;
  }
}
@media only screen and (min-width: 768px) and (max-width: 1349px) and (orientation: landscape) {
  #Votes {
    width: 90%;
  }
}
@media only screen and (min-width: 1350px) {
   h3.textMontserrat.my_blue.headerVotes {
    font-size: 2.1rem;
  }



 .votingListItem{
    padding-left: 20px;
    padding-right: 20px;
    transition: padding 0.2s;

  }

  .votingListItem:hover {
    padding-left: 0px;
    padding-right: 0px;
    transition: padding 0.2s;

  }
}

@media only screen and (max-width: 469px) {
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.2rem;
  }
}
</style>
