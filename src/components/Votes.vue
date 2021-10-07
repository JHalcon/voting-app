<template>
  <div id="Votes">
    <h3 class="textMontserrat my_blue headerVotes">{{this.$store.state.msg.userPage.title}}</h3>
    <div class="voteList">
      <ul>
        <li tabindex=0 v-for="(v, index) in voteList" :key="index" @click="goToDeails(voteList[index].id)" @keyup.enter="goToDeails(voteList[index].id)" class="votingListItem" :class="{'votingListItemColor' : !v.vote_given}">
          <voteItem :voteGiven="v.vote_given" :voteText="v.name"></voteItem>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import voteItem from "@/components/voteItem.vue";
export default {
  name: "NoVotes",
  /*
  data() {
    return {
      a: process.env.VUE_APP_TITLE;
    };
  },
  */
  methods:{
    goToDeails(voteId){
      this.$router.push({name: 'voteCard', params: {voteIdProps: voteId }});
    }
  },
  components: {
    voteItem,
  },
  props: {
    voteList: Array,
  }
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
li.votingListItemColor:nth-child(3n+1) > div { //zamiast 3n, to 3n+1
  background-color: var(--my_magenda);
}
li.votingListItemColor:nth-child(3n) > div { //zamiast 2n, to 3n
  background-color: var(--my_blue);
}
li.votingListItemColor:nth-child(3n - 1) > div { //3n-1
  background-color: var(--my_orange);
}
li.votingListItemColor:nth-child(3n+1) > div:hover { //zamiast 3n, to 3n+1
  background-color: var(--my_magenda_dark);
}
li.votingListItemColor:nth-child(3n) > div:hover { //zamiast 2n, to 3n
  background-color: var(--my_blue_dark);
}
li.votingListItemColor:nth-child(3n-1) > div:hover { //to 3n-1 dodałem, bo nie było
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
