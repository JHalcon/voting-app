<template>
     <div class="calendar_one" :id="{id}">
                            <div class="calendar_text calendar_miesiac">{{name}}</div>
                            
                            <ul class="weekdays">
                                <li>Pn</li>
                                <li>Wt</li>
                                <li>Śr</li>
                                <li>Cz</li>
                                <li>Pt</li>
                                <li>Sb</li>
                                <li>Nd</li>
                            </ul>

                            <ul class="days textRoboto" >  
                                <li v-for="b in this.blankDays" :key="b+35" >
                                    </li>
                                <li v-for="n in this.numberOfDays" :key="n"  v-on:click="makeA" class="calendar_day">
                                    {{n}}

                                </li>
                            
                            </ul>
                        </div>
</template>
<script>
export default {
      name: "calendarPart",
      props:['name','numberOfDays','blankDays',"id"],
  components: {
  },

  data(){
      return{
days:31,
isA:false,
      }
  },
  methods:{
    makeA(){
      console.log("hfh");
      event.target.classList.toggle('activeLi');
    },
    showDays(){
     // let mounth = 
    }
  }
}
</script>
<style lang="scss" scoped>
#calendar{
    box-sizing: border-box;
    margin-bottom: 100px;
    min-height: 700px;

}
.activeLi{
  background-color: red;
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
      border-color: var(--my_orange);
      border-width: medium;
      padding: 10px;
      font-style: italic;
      color: #555;

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