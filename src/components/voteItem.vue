<template>
  <div class="Vitem">
    <p class="textMontserrat voteTxt">{{ voteText }}</p>
  </div>
</template>

<script>
export default {
  name: "voteItem",
  props: ["voteText"],
  data() {
    return {};
  },
  components: {},
};
</script>
<style lang="scss" scoped>
div .Vitem {
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
  display: flex;
  align-items: center;
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
    font-size: 1.2rem;
  }
}
@media only screen and (max-width: 992px) and (orientation: landscape) {
  #Votes {
    //height: 50vh;
    flex-wrap: nowrap;
    width: 100%;
  }
  div {
    width: 100%;
    height: 50px;
    margin: 10px;
  }
  p.textMontserrat.voteTxt {
    font-size: 1.2rem;
  }
}

@media only screen and (min-width: 768px) and (max-width: 1349px) {
  #Votes {
    width: 90%;
  }
}
@media only screen and (min-width: 1350px) {
}

@media only screen and (max-width: 640px) {
  div {
    cursor: pointer;
    padding: 5px;
    width: 100%;
    border: none;
    text-align: left;
    margin-bottom: 10px;
  }
  p.textMontserrat.voteTxt {
    font-size: 1rem;
  }
  div:before {
    font-size: 20px;
  }
}
</style>
