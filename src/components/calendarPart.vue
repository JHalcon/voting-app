<template>
  <div class="calendar_one" :id="{ id }">
    <div class="calendar_text calendar_miesiac">{{ name }}</div>

    <ul class="weekdays">
      <li>Pn</li>
      <li>Wt</li>
      <li>Śr</li>
      <li>Cz</li>
      <li>Pt</li>
      <li>Sb</li>
      <li>Nd</li>
    </ul>

    <ul class="days textRoboto">
      <li v-for="b in this.blankDays" :key="b + 35"></li>
      <li
        v-for="n in this.numberOfDays"
        :key="n"
        class="calendar_day"
      >
        {{ n }}
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "calendarPart",
  props: ["name", "numberOfDays", "blankDays", "id", "givenID"],
  components: {},

  data() {
    return {
      days: 31,
      isA: false,
    };
  },
  methods: {
    /*

    v-on:click="makeA"

    makeA() {
      console.log("hfh");
      event.target.classList.toggle("activeLi");
    },
    */

    showDays() {
      // let mounth =
    },
  },
};
</script>
<style lang="scss" scoped>

*{
  cursor: default;
}

.activeLi {
  background-color: red;
}


.weekdays {
  margin: 0;
  padding: 10px 0;
  font-size: 0;
  border-bottom: 2px solid lightgrey;
}

.weekdays li {
  display: inline-block;
  width: 14.28%;
  color: var(--my_magenda);
  text-align: center;
}

.days {
  padding: 10px 0;
  margin: 0;
  font-size: 0;
}

.days li {
  list-style-type: none;
  display: inline-block;
  width: calc(100% / 7);
  text-align: center;
  margin-bottom: 5px;
  font-size: 20px;
  color: gray;
  font-weight: bold;
  transition: color 0.2s, background-color 0.5s, border-radius 1.5s;
}

.days .today{
  color: var(--my_magenda);
  _font-family: "Montserrat";
    _text-decoration: underline ;
  _border: 1px solid var(--my_magenda_dark);
    _background-color: var(--my_blue_light);
  _border-radius: 15px;
  text-shadow: 1px 1px 1px var(--my_magenda_dark);


}

.days .active_cal {
  background-color: var(--my_magenda);
  border: 3px solid var(--my_magenda_dark);

  color: white;
  transition: color 0.2s, background-color 0.5s, border-radius 0.2s;

  font-family: "Montserrat";
  _text-decoration: underline ;
}




.calendar_one {
  box-shadow: 0px 0px 7px;
  border-radius: 10px;
  padding: 10px;
}
.calendar_text {
  padding: 10px;
  text-align: center;
}
.calendar_miesiac {
  background-color: var(--my_magenda);
  color: white;
  border-radius: 4px;
}



@media only screen and (min-width: 660px) {


  .calendar_column li {
    font-size: 2.5vw;
    line-height: 1.3;

  }
  .calendar_text {
    font-size: 2vw;

  }

  .days .active_cal_only {
    border-radius: 15px;
  }

  .days .active_cal_start {
    border-radius: 40% 0px 0px 40%;
  }

  .days .active_cal_end {
    border-radius: 0 40% 40% 0;
  }
}

@media only screen and (max-width: 659px) {

 

  .calendar_column li {
    font-size: 4vw;
  }

  .calendar_text {
    font-size: 18px;
  }



  .days .active_cal_only {
    border-radius: 10px;
  }

  .days .active_cal_start {
    border-radius: 10px 0px 0px 10px;
  }

  .days .active_cal_end {
    border-radius: 0 10px 10px 0;
  }
}
</style>
