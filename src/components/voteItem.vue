<template>
  <div :class="color">
    <p class="textMontserrat voteTxt">{{ voteText }}</p>
  </div>
</template>

<script>
export default {
  name: "voteItem",
  props: ["voteText", "color"],
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
div {
  cursor: pointer;
  padding: 13px;
  width: 100%;
  border: none;
  text-align: left;
  margin-bottom: 30px;
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
}
.voteItemPink {
  background-color: pink;
}

div:before {
  content: "\25BA";
  font-weight: bold;
  float: right;
  margin-left: 5px;
  color: white;
}

.voteItemGreen {
  background-color: green;
}
p.voteTxt {
  margin: none !important;
  font-weight: bold;
  color: white;
  display: flex;
  align-items: center;
}
@media only screen and (max-width: 767px) {
  p.textMontserrat.voteTxt {
    font-size: 1.5rem;
  }
  div:before {
    font-size: 30px;
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

@media only screen and (max-width: 400px) {
  div {
    cursor: pointer;
    padding: 5px;
    width: 100%;
    border: none;
    text-align: left;
    margin-bottom: 10px;
  }
  p.textMontserrat.voteTxt {
    font-size: 1.2rem;
  }
  div:before {
    font-size: 20px;
  }
}
</style>
