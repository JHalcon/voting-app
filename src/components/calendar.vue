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

                              <div class="ramka_select">
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
                                
                          </div>

                            <span v-if="loaded && Instytut!=null" id="date_countdown" class="my_orange">
                                {{date_countdown_text}}
                            </span>
                          
                          <div class="calendar_column">
                            <div v-show="!this.loaded" :style="loadingHeight">
                              <LoadingItem medium />
                            </div>
                            <div v-show="this.loaded" ref="calendarFrame">                     
                              <calendarPart  :name="this.monthName" v-bind:id="this.monthIndex" v-bind:numberOfDays="this.numberOfDays" v-bind:blankDays="this.blankDays"/>
                            </div>
                          </div>

                      </div>
                      <div v-if="!fullsite" id="margin_under_bar"></div>

                </div>
            </section>

</template>

<script>
import calendarPart from "@/components/calendarPart.vue";
import LoadingItem from '@/components/loadingItem.vue';

export default {
  name: "calendar",
  components: {
    calendarPart,
    LoadingItem,
  },
   data() {
    return {
      Instytut: null,
      monthIndex: Number,
      numberOfDays: Number,
      blankDays: Number,
      monthName: String,
      loaded: false,
      monthToday: Number,
      dayToday: Number,
      calendarHeight: Number,
      date_countdown_text: String,

    };
  },
  props: {fullsite: Boolean},
  created: function(){
    
    
      // wyświetlanie dnia i miesiaca dzisiejszego
      var date = new Date();
      this.monthToday = date.getMonth();
      this.dayToday = date.getDate();

      var firstDay = new Date(2021, this.monthToday, 1);
      this.blankDays = firstDay.getDay() - 1;
      this.numberOfDays = new Date(2021, this.monthToday+1, 0).getDate();
      this.monthName = this.$store.state.miesiace[this.monthToday];
    
  },
  mounted: function(){
      // dalej wyświetlanie dnia i miesiaca dzisiejszego
      var all_days = document.getElementsByClassName("calendar_day");
      all_days[this.dayToday-1].classList.add("today");
      this.loaded = true;
      this.calendarHeight = this.$refs.calendarFrame.clientHeight;

  },
  methods:{
    ICal(){
      //console.log("polhg");
      //let instytut = document.getElementById("instytut_select").value;
      //console.log(instytut);
    },
    hg() {
      if(this.loaded)
        this.calendarHeight = this.$refs.calendarFrame.clientHeight;

      //console.log("2 start");

      //console.log(this.days);
      this.loaded = false;
  

      //this.days.forEach(selected_instytut => {
      //console.log(selected_instytut.daty[0][0] + " data " + selected_instytut.daty[0][1]);
      //var day_start = selected_instytut.daty[0][0] - 1 + (selected_instytut.daty[0][1] - 10) * 31;
      //var day_end = selected_instytut.daty[1][0] - 1 + (selected_instytut.daty[1][1] - 10) * 31;
      //console.log(day_start + " koniec " + day_end);

      var all = document.getElementsByClassName("calendar_day");
      //console.log("dlugoc tab" + all.length);
      //console.log("poczatek" + day_start + "koniec " + day_end);


    

      //  czyszczenie po poprzednim wyświetlaniu:

      for (let i = 0; i < all.length; i++) {
        all[i].classList.remove("active_cal");
        all[i].classList.remove("active_cal_only");
        all[i].classList.remove("today");
      }


      // wyświetlanie nowego kalendarza:

      var selected_value = document.getElementById("instytut_select").value;
      this.selectInstytut(parseInt(selected_value));
      var selected_instytut = this.getInstytutById;

      var day = selected_instytut.day;
      this.monthIndex = selected_instytut.month - 1;
      var firstDay = new Date(2021, this.monthIndex, 1);
      this.blankDays = firstDay.getDay() - 1;
      this.numberOfDays = new Date(2021, this.monthIndex+1, 0).getDate();
      this.monthName = this.$store.state.miesiace[this.monthIndex];


      var all_days = document.getElementsByClassName("calendar_day");
      all_days[day-1].classList.add("active_cal");
      all_days[day-1].classList.add("active_cal_only");


      if(this.monthIndex == this.monthToday){
        all_days[this.dayToday-1].classList.add("today");
      }

      // obliczanie za ile dni będą wybory:

      const date1 = new Date(2021, this.monthToday, this.dayToday);
      const date2 = new Date(2021, this.monthIndex, day);
      const oneDay = 1000 * 60 * 60 * 24; // jeden dzien w milisekundach
      var diffInTime = date2.getTime() - date1.getTime();
      const diffInDays = Math.round(diffInTime / oneDay);

      const str = "W wybranym Instytucie wybory ";

      if(diffInDays == 1){
        this.date_countdown_text = str + "odbywają się jutro, "+day+" "+this.$store.state.miesiace_dopelniacz[this.monthIndex]+".";
      } else if (diffInDays > 1){
        this.date_countdown_text = str + "odbywają się za "+diffInDays+" dni, "+day+" "+this.$store.state.miesiace_dopelniacz[this.monthIndex]+".";
      } else if (diffInDays == 0){
        this.date_countdown_text = str + "odbywają się dzisiaj, "+day+" "+this.$store.state.miesiace_dopelniacz[this.monthIndex]+".";
      } else {
        this.date_countdown_text = str + "odbyły się "+day+" "+this.$store.state.miesiace_dopelniacz[this.monthIndex]+".";
      }


      // sztuczne wydłużenie komponentu ładowania o ćwierć sekundy
      setTimeout(() => {
          this.loaded = true;
      }, 250);
      


    },

    selectInstytut(i) {
      this.Instytut = i;
    },
  },
  computed: {
    days() {
      return this.$store.state.Dates;
    },

    getInstytutById() {
      return this.$store.getters.getInstytutById(this.Instytut);
    },

    loadingHeight(){
        return {
          height: this.calendarHeight-20+'px',
        }
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

#date_countdown{
    display: block;
    margin-top: 10px;
    text-align: center;
}

  .calendar_container{

    height: 100%; 

    padding-left: 30px;
    padding-right: 30px;
    //padding-bottom: 50px;

  }

.calendar_column {
  flex: 50%;
  margin: auto;
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
    padding-top: 30px;
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

  .ramka_select{
    width: 58vw;
  }

  #date_countdown{
    font-size: 2vw;
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
    margin-bottom: 50px;
  }


  .calendar_text {
    font-size: 18px;
  }

  #instytut_select {
    width: 200px;
  }

 #date_countdown{
    margin-bottom: 10px;
  }


}

@media only screen and (min-width: 420px){

  
  #instytut_word{

    padding: 15px 0px 15px 15px;
    color: #555;
    font-size: 1em;
    
      border-radius: 20px 0 0 20px;
      border-style: none;

    }

  #instytut_select {

    padding: 14px 14px 14px 0;
    font-style: italic;
    color: #555;
    font-size: 1em;
    
    border-radius: 0px 20px 20px 0;
    border-style: none;


  }

  .ramka_select{
    border: 2px solid var(--my_orange);
    border-radius: 20px;

    margin: auto;
  }

}

@media only screen and (min-width: 420px) and (max-width: 659px){
  .ramka_select{
    width: 340px;
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
