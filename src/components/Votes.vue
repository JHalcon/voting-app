<template>
  <div id="Votes">
    <h3 class="textMontserrat my_blue headerVotes">DOSTĘPNE GŁOSOWANIA</h3>
    <div class="voteList">
      <ul>
        <li v-for="v in voteTab" :key="v.id" class="votingListItem">
          <voteItem :voteText="v.voteText"></voteItem>
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
      voteTab: [
        { voteText: "GŁOSOWANIE GŁOSOWANIE LOL HAHA 1" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE GŁOSOWANIE LOL HAHA 1" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },
        { voteText: "GŁOSOWANIE 2" },

      ],
    };
  },
  components: {
    voteItem,
  },
};
</script>
<style lang="scss" scoped>
li {
  list-style-type: none;
}
li.votingListItem:nth-child(3n+3) > div { //zamiast 3n, to 3n+3
  background-color: var(--my_magenda);
}
li.votingListItem:nth-child(3n+2) > div { //zamiast 2n, to 3n+2
  background-color: var(--my_blue);
}
li.votingListItem:nth-child(3n + 1) > div { //3n+1 zostawiłem xd
  background-color: var(--my_orange);
}
li.votingListItem:nth-child(3n+3) > div:hover { //zamiast 3n, to 3n+3
  background-color: var(--my_magenda_dark);
}
li.votingListItem:nth-child(3n+2) > div:hover { //zamiast 2n, to 3n+2
  background-color: var(--my_blue_dark);
}
li.votingListItem:nth-child(3n+1) > div:hover { //to 3n+1 dodałem, bo nie było
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
  font-size: 2rem;
  width: 70%;
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
}

@media only screen and (max-width: 767px) {
  #Votes {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
  }
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.9rem;
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
}

@media only screen and (max-width: 469px) {
  h3.textMontserrat.my_blue.headerVotes {
    font-size: 1.2rem;
  }
}
</style>
