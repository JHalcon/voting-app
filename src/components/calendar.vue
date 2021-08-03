<template>
 <section id="calendar">
                <div class="page_terminarz textMontserrat" >

                    <div class="background_bar_calendar ">
                        <span>TERMINARZ GŁOSOWAŃ</span>
                    </div>
                    <hr class="solid">

                    <div class="calendar_text">
                      <span class="my_orange">Sprawdź, kiedy odbywają się wybory w Twoim instytucie!</span>
                      <br>
                        <span class="my_orange">Instytut </span>
                           <button v-on:click="hg">click</button>
                        <select id="instytut_select" v-on:change="ICal()">
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
                      
                   

                      <div class="calendar_column">
                        <calendarPart name="Październik" v-bind:id="10" v-bind:numberOfDays="31" v-bind:blankDays="4"/>
                        
                    </div>
                     <div class="calendar_column">
                        <calendarPart name="Listopad" v-bind:id="11" v-bind:numberOfDays="30" v-bind:blankDays="0"/>
                       </div>
                       
                </div>
            </section>

</template>

<script>
import calendarPart from '@/components/calendarPart.vue';
import {store} from "@/store/index";

export default {
  name: "calendar",
  store:store,
  components: {
    calendarPart,
  },
  methods:{
    ICal(){
      console.log("polhg");
      let instytut =  document.getElementById("instytut_select").value;
      console.log(instytut);
    },
    hg(){
      console.log(this.days);
      this.days.forEach(element => {
        console.log(element.month)
      });
    },
  },
  computed:{
    days(){
      return this.$store.state.Dates;
    }
  },
  data(){
    return{
    }
  }
};
</script>
<style  lang="scss" scoped>
#calendar{
    box-sizing: border-box;
    margin-bottom: 100px;
    min-height: 700px;

}

.background_bar_calendar{
    _background-color: var(--my_blue); /* For browsers that do not support gradients */
    _background-image: linear-gradient(to right, var(--my_blue) ,  var(--my_blue_light));
    _color: white;
    color: var(--my_blue);
    text-align: center;
    padding-top: 10px;
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
    width: calc(100%/7);
    text-align: center;
    margin-bottom: 5px;
    font-size:20px;
    color: gray;
    font-weight: bold;
    transition: color 0.2s, background-color 0.5s, border-radius 1.5s;

    
  }
  
  .days .active_cal {
    background-color: var(--my_magenda);
    color: white;
    transition: color 0.2s, background-color 0.5s, border-radius 0.2s;

  }
  


  .page_terminarz{
    margin-top:20px;
    position: relative; 
    width: 100%; 
    height: 100%;
    padding-left: 30px;
    padding-right: 30px;

}

  .calendar_column {
    float: left;
    
  }
  .calendar_one{
    box-shadow: 0px 0px 7px;
    border-radius: 10px;
    padding: 10px;
  }
  .calendar_text{
    padding: 10px;
    text-align: center;
  }
  .calendar_miesiac{
    background-color: var(--my_magenda); 
    color: white;
    border-radius: 4px;
  }

  #instytut_select{
      border-radius: 20px;
      //border-color: var(--my_orange);
      //border-width: medium;
      border: 2px solid var(--my_orange);
      padding: 10px;
      font-style: italic;
      font-weight:medium;
      color: #555;
      font-size:1em;
      font-weight:600;

  }



@media only screen and (min-width: 1050px) {
    .calendar_column {
        padding: 50px;
      }
}


@media only screen and (max-width: 1049px) {
    .calendar_column {
        padding: 5px;
      }
}

@media only screen and (min-width: 660px) {
    .background_bar_calendar{
        font-size: 4vw;
    }

    .calendar_column {
        width: 50%;
        padding-top: 50px;
      }

    .calendar_column li{
        font-size: 2.5vw;
    }
    .calendar_text{
        font-size: 2vw;
    }

    #instytut_select{
        width: 45vw;
    }

    .days .active_cal_only {
        border-radius: 40%;
      }
    
      .days .active_cal_start {
        border-radius: 40% 0px 0px 40%;
      }
    
      .days .active_cal_end {
        border-radius: 0 40% 40% 0;
    
      }
}

@media only screen and (max-width: 659px) {
    .background_bar_calendar{
        font-size: 25px;
        padding-left: 20px;
        padding-right: 20px;
    }

    .calendar_column {
        width: 100%;
        padding-top: 10px;
      }

    .calendar_column li{
        font-size: 2.5vw;
    }

    .calendar_text{
        font-size: 18px;
    }

    #instytut_select{
        width: 200px;
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