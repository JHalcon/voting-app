<template>
                    <div> <!--v-for="n in this.liczbaOs" v-bind:key="n" class="one_person" >-->
                        <h4 class="textMontserrat">Nr {{n}}</h4>

                        <div>
                            <div class="formSection">
                                <label :for="'imie_'+n">Imie:</label>
                                <input :id="'imie_'+n" type="text"  class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required />
                            </div>
                            <div class="formSection">
                                <label :for="'nazwisko_'+n">Nazwisko:</label>
                                <input :id="'nazwisko_'+n" type="text"  class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }"  required/><br>
                            </div>
                        </div>
                        <div >
                            <div class="formSection">
                            <label :for="'rok_studiow_'+n">Rok studiów:</label>
                            <select :id="'rok_studiow_'+n" class="selectC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required>
                                <option value="" disabled selected hidden></option>
                                <option v-for="k in lata_studiow" :key="k.id" :value="k.nazwa">
                                {{k.nazwa}}
                                </option>

                            </select>
                            </div>
                            
                            <div class="formSection">
                            <label :for="'nr_albumu_'+n">Nr albumu:</label>
                            <div class="inputDiv" v-bind:class="{ invalidCheckboxClass: isButtonSendClicked && album_changed!=true }">s<input :id="'nr_albumu_'+n" type="number" v-model="album" class="inputV2" v-bind:class="{ invalidInputClass: isButtonSendClicked && album_changed!=true }" required min="100000" max="999999" /></div>
                            <!-- <input :id="'nr_albumu_'+n" type="number" placeholder="Nr albumu" class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required/> -->
                            </div>                        
                        </div>
                    </div>
</template>

<script>

export default {
  name: "candidateOnePerson",
  props: {
      n: Number,
      isButtonSendClicked: Boolean,
  },
  data() {
    return {
        lata_studiow: this.$store.state.lata_studiow,


        album_changed: false,
        album: "",

 
    };
  },
  watch:{
      album(){
          this.album_changed = true;
      },
  },
  methods: {

  },
  computed: {
  }
};
</script>
<style lang="scss" scoped>


.formSection{
    display: inline-block;
}

.invalidInputClass:invalid {
  background-color: #ffdddd;
}

.invalidInputClass>option{
    background-color: white;
}

.invalidCheckboxClass{
    background-color: #ffdddd;
}

label{
    flex: 90%;
    font-family: Roboto;
    font-weight: bold;
    display: block;
}

.inputDiv{
    display: inline-block;
    height:30px;
    width:300px;
    border-radius:2px;
    padding-left:10px;
    margin:10px;
    border:2px solid var(--my_orange);
    border-radius: 5px;

    font-family: Roboto;
    font-weight: bold;
    font-size: 12px;
}
.inputV2{
    display: inline-block;
    height:100%;
    width:270px;
    margin-left:3px;

    font-family: Roboto;
    font-weight: bold;
}
.inputC{
    height:30px;
    width:300px;
    border-radius:2px;
    padding:5px;
    margin:10px;
    border:2px solid var(--my_orange);
    border-radius: 5px;

    font-family: Roboto;
    font-weight: bold;
}
.inputV2:focus{
    background-color: lightgray;

}
input.inputC:focus{
    border:2px solid var(--my_magenta);
    background-color: lightgray;
}
.selectC{
    height:30px;
    width:300px;
    border-radius:2px;
    padding:5px;
    margin:10px; 
    border:2px solid var(--my_orange);
    border-radius: 5px;

    font-family: Roboto;
    font-weight: bold;
}
option{
    font-family: Roboto;
    font-weight: bold;
}

h2,h3,h4{
    color: #345;
}

select{
    background-color: white;
}

@media only screen and (min-width:1200px){
    .selectC, .inputC, .inputDiv{
        width: 350px;
        height: 45px;
    }
    .selectC, .inputC, .inputV2{
        font-size: 22px;
    }
    .inputDiv{
        font-size: 18px;
    }
    .inputV2{
        width: 319px;
    }
}

@media only screen and (max-width: 671px){
    label{
        text-align: left;
    }
    .selectC, .inputC, .inputDiv{
        margin-left: 0;
    }
}

@media only screen and (max-width: 340px){
    .selectC, .inputC, .inputDiv{
        width: 200px;
    }
    .inputV2{
        width: 165px;
    }
}
</style>