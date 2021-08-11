<template>
  <div id="Votes">
    <h3 class="textMontserrat my_blue headerVotes">DOSTĘPNE GŁOSOWANIA</h3>
    <div class="voteList">
      <ul>
        <li v-for="v in voteTab" :key="v.id" class="votingListItem">
          <voteItem :voteText="v.voteText" :class="v.color"></voteItem>
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
        { voteText: "GŁOSOWANIE GŁOSOWANIE LOL HAHA 1", color: "voteItemPink" },
        { voteText: "GŁOSOWANIE 2", color: "voteItemGreen" },
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
li::marker {
  display: none;
}
#Votes {
  height: 65vh;
  //background-color: brown;
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 10px;
  font-family: Roboto;
  //font-weight: bold;
  font-size: 2rem;
  width: 70%;
  margin: auto;
}
.voteList {
  display: flex;
  justify-content: center;
  width: 100%;
}
ul {
  width: 70%;
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
@media only screen and (max-width: 767px) and (orientation: landscape) {
  #Votes {
    height: 50vh;
    flex-wrap: nowrap;
    width: 80%;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #Votes {
    width: 90%;
  }
}
@media only screen and (min-width: 1350px) {
}

@media only screen and (max-width: 469px) {
}
</style>
