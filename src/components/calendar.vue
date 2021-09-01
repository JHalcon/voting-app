<template>
 <section id="calendar">
                <div class="page_terminarz textMontserrat" >

                    <div v-if="!fullsite" class="background_bar_calendar " :class="{ 'bar_fullsite' : fullsite, 'bar_component' : !fullsite }">
                        <span>TERMINARZ GŁOSOWAŃ</span>
                        <hr class="solid">
                    </div>
                    <div v-if="fullsite" id="margin_under_bar"></div>

                    <div class="calendar_container">
                      
                          <div class="calendar_text">
                            <!--<span id="page_describtion" :class="{ 'my_magenda' : fullsite, 'my_orange' : !fullsite }">Sprawdź, kiedy odbywają się wybory w&nbsp;Twoim instytucie!</span>-->
                            <span id="page_describtion" :class="{ 'my_magenda' : fullsite, 'my_orange' : !fullsite }">SPRAWDŹ, KIEDY ODBYWAJĄ SIĘ WYBORY W&nbsp;TWOIM INSTYTUCIE!</span>

                              <span id="instytut_word" class="my_orange">Instytut </span>

                              <select class="textMontserrat" id="instytut_select" v-on:change="hg">
                                  <option hidden selected>(wybierz)</option>
                                  <option value="0">Biologii</option>
                                  <option value="1">Filologii Angielskiej</option>
                                  <option value="2">Filologii Polskiej</option>
                                  <option value="3">Filozofii i Socjologii</option>
                                  <option value="4">Fizyki</option>
                                  <option value="5">Geografii</option>
                                  <option value="6">Grafiki i Wzornictwa</option>
                                  <option value="7">Historii i Archiwistyki</option>
                                  <option value="8">Informatyki</option>
                                  <option value="9">Malarstwa i Edukacji Artystycznej</option>
                                  <option value="10">Matematyki</option>
                                  <option value="11">Nauk o Bezpieczeństwie</option>
                                  <option value="12">Nauk o Informacjii</option>
                                  <option value="13">Nauk o Polityce i Administracjii</option>
                                  <option value="14">Nauk o Wychowaniu</option>
                                  <option value="15">Nauk Technicznych</option>
                                  <option value="16">Neofilologii</option>
                                  <option value="17">Pedagogiki Przedszkolnej i Szkolnej</option>
                                  <option value="18">Pedagogiki Specjalnej</option>
                                  <option value="19">Prawa i Ekonomii</option>
                                  <option value="20">Psychologii</option>
                                  <option value="21">Spraw Społecznych</option>
                                  <option value="22">Sztuki Mediów</option>
                                </select>
                                
                          </div>
                  
                          <div class="calendar_columns">
                            <div class="calendar_column left_column">
                              
                              <calendarPart name="Październik" v-bind:id="10" v-bind:numberOfDays="31" v-bind:blankDays="4"/>
                            </div>
                            <div class="calendar_column right_column">
                            <calendarPart name="Listopad" v-bind:id="11" v-bind:numberOfDays="30" v-bind:blankDays="0"/>
                            </div>
                          </div>
                      </div>
                      <div v-if="!fullsite" id="margin_under_bar"></div>

                </div>
            </section>

</template>

<script>
import calendarPart from "@/components/calendarPart.vue";
import { store } from "@/store/index";

export default {
  name: "calendar",
  store: store,
  components: {
    calendarPart,
  },
  props: {fullsite: Boolean},
  methods:{
    ICal(){
      //console.log("polhg");
      //let instytut = document.getElementById("instytut_select").value;
      //console.log(instytut);
    },
    hg() {
      //console.log("2 start");

      //console.log(this.days);

      var selected_value = document.getElementById("instytut_select").value;
      // console.log(selected_value);
      this.selectInstytut(parseInt(selected_value));
      // console.log("instytut"+this.Instytut);
      var element = this.getInstytutById;

      //this.days.forEach(element => {
      //console.log(element.daty[0][0] + " data " + element.daty[0][1]);
      var day_start = element.daty[0][0] - 1 + (element.daty[0][1] - 10) * 31;
      var day_end = element.daty[1][0] - 1 + (element.daty[1][1] - 10) * 31;
      //console.log(day_start + " koniec " + day_end);

      var all = document.getElementsByClassName("calendar_day");
      //console.log("dlugoc tab" + all.length);
      //console.log("poczatek" + day_start + "koniec " + day_end);
      for (let i = 0; i <= 60; i++) {
        //console.log("moje i" + i);
        all[i].classList.remove("active_cal");
        all[i].classList.remove("active_cal_only");
        all[i].classList.remove("active_cal_start");
        all[i].classList.remove("active_cal_end");
       // console.log("1 stop");
      }
      var all_days = document.getElementsByClassName("calendar_day");
      if (day_start == day_end) {
        // podświetlamy w ten sposób, gdy tylko jeden dzień wybrano
        if (day_start < all_days.length) {
          // zakładamy, że ten dzień mieści się w naszym kalendarzu
          all_days[day_start].classList.add("active_cal");
          all_days[day_start].classList.add("active_cal_only");
        }
      } else {
        var i = day_start;
        if (i < all_days.length) {
          // zakładamy, że ten dzień mieści się w naszym kalendarzu
          // podświetl pierwszą jako start
          all_days[i].classList.add("active_cal");
          all_days[i].classList.add("active_cal_start");
          i++;
        }
        while (i < day_end) {
          // od 1 do length-1 oznaczamy jako normalne
          if (i < all_days.length) {
            // zakładamy, że ten dzień mieści się w naszym kalendarzu
            all_days[i].classList.add("active_cal");
          }
          i++;
        }

        if (i < all_days.length) {
          //  podświetl ostatnią jako end
          all_days[i].classList.add("active_cal");
          all_days[i].classList.add("active_cal_end");
        }
      }
    },
    selectInstytut(i) {
      this.Instytut = i;
    },
  },
  data() {
    return {
      Instytut: null,
    };
  },
  computed: {
    days() {
      return this.$store.state.Dates;
    },

    getInstytutById() {
      return this.$store.getters.getInstytutById(this.Instytut);
    },
  },
};
</script>
<style  lang="scss" scoped>
#calendar{
    box-sizing: border-box;

    padding-left: 0px;
    padding-right: 0px;
}

.background_bar_calendar{
    text-align: center;
    padding-top: 10px;
    padding-bottom: 10px;
}

.bar_fullsite{
  background-color: var(--my_blue); /* For browsers that do not support gradients */
  background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light2));
  color: white;
} 

.bar_component{
  color: var(--my_blue);
}

#margin_under_bar{
  margin: 20px;

}
  #page_describtion{
    display: block;
      margin-bottom: 10px;

  }


  .calendar_container{

    height: 100%; 

    padding-left: 30px;
    padding-right: 30px;
    //padding-bottom: 50px;

  }

.calendar_column {
  flex: 50%;
}

.calendar_text {
  padding: 10px;
  text-align: center;
}

#instytut_select{
    cursor: pointer;
    background-color: white;
    text-decoration: underline;

}

@media only screen and (min-width: 1050px) {
  .calendar_column {
    padding: 25px;
    padding-top: 50px;
  }
  .left_column{
    padding-left: 50px;
  }
  .right_column{
    padding-right: 50px;
  }
}

@media only screen and (max-width: 1049px) {
  .calendar_column {
    padding: 5px;
  }
}

@media only screen and (min-width: 660px) and (max-width: 1049px){
  .calendar_column{
    padding-top: 20px;
  }
}

@media only screen and (min-width: 660px) {
  .background_bar_calendar {
    font-size: 4vw;
  }

  .calendar_columns{
    display: flex;
  }

  .calendar_column {
    width: 50%;
    padding-bottom: 40px;
  }

 
  .calendar_text {
    font-size: 2vw;
  }

  #instytut_select {
    width: 45vw;
  }


}

@media only screen and (max-width: 659px) {
  .background_bar_calendar {
    font-size: 25px;
    padding-left: 20px;
    padding-right: 20px;
  }

  .calendar_columns{
        padding-bottom: 20px;

  }

  .calendar_column {
    width: 100%;
    padding-top: 10px;

  }


  .calendar_text {
    font-size: 18px;
  }

  #instytut_select {
    width: 200px;
  }
}

@media only screen and (min-width: 420px){

  
  #instytut_word{

    border: 2px solid var(--my_orange);
    padding: 15px 0px 15px 15px;
    color: #555;
    font-size: 1em;
    
      border-radius: 20px 0 0 20px;
        border-right-style: none;

    }

  #instytut_select {

    border: 2px solid var(--my_orange);
    padding: 14px 14px 14px 0;
    font-style: italic;
    color: #555;
    font-size: 1em;
    
    border-radius: 0px 20px 20px 0;
    border-left-style: none;


  }

}

@media only screen and (max-width: 419px){

  #instytut_word{

    margin: 25px;
    color: #555;
    font-size: 1em;
  }

  #instytut_select {

    border: 2px solid var(--my_orange);
    padding: 10px 2px 10px;
    font-style: italic;
    color: #555;
    font-size: 1em;
    width: 100%;
    border-radius: 15px;

  }

}

</style>
