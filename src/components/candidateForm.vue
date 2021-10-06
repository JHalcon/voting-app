<template>
    <div class="formDiv margin-top" >
        <h2 class="textMontserrat">{{this.$store.state.msg.newcandidate.tytul}}</h2>
        <div class="formDiv" v-show="!this.sent1">
            <form @submit.prevent="send_form" id="newCandidateForm">
                <div class="candidat">
                    <div class="">
                        <div class="formSection">
                            <label for="imie">Podaj swoje imie:</label>
                            <input type="text" id="imie" class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required/>
                        </div>
                        <div class="formSection">
                            <label for="nazwisko">Podaj swoje nazwisko:</label>
                            <input type="text" id="nazwisko" class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required/>
                        </div>
                    </div>

                    <div class="formSection">
                        <div class="formSection">
                            <label for="email">Podaj studencki adres email:</label>
                            <input type="text" id="email" class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required/>
                        </div>
                        <div class="formSection">
                            <label for="phone">Podaj nr telefonu:</label>
                            <input type="text" id="phone" class="inputC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required/>
                        </div>
                    </div>

                    <div class="">
                        <div class="formSection">

                            <label for="instytut">Wybierz Instytut:</label>

                            <select id="instytut" class="selectC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required>
                        
                                    <option value="" selected hidden disabled></option>
                                    
                                    <option v-for="k in this.communities" :key="k.id" :value="k.id">
                                    {{k.name}}
                                    </option>

                            </select>
                        </div>
                        <div class="formSection">

                        <label for="kierunek">Podaj kierunek:</label>

                        <select id="kierunek" class="selectC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required>
                    
                                <option value="" selected hidden disabled></option>
                                
                                <option v-for="k in this.kierunki" :key="k.id" :value="k.nazwa">
                                {{k.nazwa}}
                                </option>

                        </select>
                        </div>
                    </div>

                    <div class="">

                        <div class="formSection">
                            <label for="nr_albumu">Rok studiów:</label>

                            <select id="rok_studiow" class="selectC" v-bind:class="{ invalidInputClass: isButtonSendClicked }" required>
                                <option value="" disabled selected hidden></option>
                                <option v-for="k in this.lata_studiow" :key="k.id" :value="k.nazwa">
                                {{k.nazwa}}
                                </option>
                            </select>
                        </div>
                        <div class="formSection">
                            <label for="nr_albumu">Numer albumu:</label>
                            <div class="inputDiv" v-bind:class="{ invalidCheckboxClass: isButtonSendClicked && album_changed!=true }">s<input id="nr_albumu" type="number" class="inputV2" v-model="album" v-bind:class="{ invalidCheckboxClass: isButtonSendClicked && album_changed!=true }" required min="100000" max="999999" /></div>
                        </div>
                    </div>
                </div>
                <br>
                <div class="hrInner"></div>
                <br>

                <div class="">
                    <h3 class="textMontserrat">{{this.$store.state.msg.newcandidate.lista}}</h3>
                    <div class="formInnerSection">


                        <div v-for="n in this.liczbaOs" v-bind:key="n" class="one_person" >
                            <candidateOnePerson :n="n" :isButtonSendClicked="isButtonSendClicked" />


                        </div>
                    </div>

                </div>

                <div class="formSection inputCheckBox" v-bind:class="{ invalidCheckboxClass: !checkboxChecked && isButtonSendClicked}">

                    <input id="checkbox_zgloszenie" type="checkbox" v-model="checkboxChecked" required >
                    <label for="checkbox_zgloszenie" id="checkbox_label">{{this.checkbox_zgloszenie}}</label>
                
                </div>


                </form>
                

                <div class="person_buttons">
                    <button v-if="this.liczbaOs < 15" @click="add_person" class="blueBTN BTN button_click person_button">{{this.$store.state.msg.newcandidate.dodaj_os}}</button>
                    <button v-if="this.liczbaOs > 5"  @click="remove_person" class="orangeBTN BTN button_click person_button">{{this.$store.state.msg.newcandidate.usun_os}}</button>
                </div>

                <button v-if="!sending1" @click="addErrorClass" form="newCandidateForm" class="magendaBTN BTN button_click send_button">{{this.$store.state.msg.newcandidate.wyslij}}</button>
                <button v-else class="magendaBTN BTN button_click"><loadingItem small /></button>

            </div>
            <div v-show="this.sent1">
                <h2 v-if="!this.error" class="textMontserrat komunikat ok">
                    {{this.$store.state.msg.newcandidate.wyslano}}
                </h2>
                <h2 v-else class="textMontserrat komunikat error">
                    {{this.error_message}}
                    <br><br>
                    <button @click="again" class="magendaBTN BTN button_click">Wróć i spróbuj ponownie</button>
                    <br><br>
                    <a href="/contact">{{this.$store.state.msg.newcandidate.logout_error_2}}</a>
                </h2>

            </div>

         
        </div>
</template>

<script>
import axios from 'axios';
import loadingItem from "@/components/loadingItem.vue";
import candidateOnePerson from "@/components/candidateOnePerson.vue";

export default {
  name: "candidateForm",
  props: {
      firstname: String,
      lastname: String,
      email: String,
      communities: Array,
  },
  data() {
    return {
        rok_studiow_placeholder: "Rok studiów",
        lata_studiow: this.$store.state.lata_studiow,

        instytut_placeholder: "Instytut",
        instytuty: this.$store.state.instytuty,

        kierunek_placeholder: "Kierunek",
        kierunki: this.$store.state.kierunki,

        checkbox_zgloszenie: this.$store.state.msg.newcandidate.checkbox,

        firstname_from_props: "",

        liczbaOs: 5,
        sending1: false,
        sent1: false,
        error: false,
        error_message: "",
        isButtonSendClicked: false,
        checkboxChecked: false,
        album_changed: false,
        album: "",

    };
  },
  components: {
      loadingItem,
      candidateOnePerson,
  },
  mounted: function(){
        document.getElementById('imie').value = this.firstname;
        document.getElementById('nazwisko').value = this.lastname;
        document.getElementById('email').value = this.email;

  },
  watch:{
      album(){
          this.album_changed = true;
      },
  },

  methods: {

        again(){
            this.error_message="";
            this.error= false;
            this.sent1=false;
            this.isButtonSendClicked=false;

        },

        addErrorClass(){
            this.isButtonSendClicked=true;
        },

        send_form(){
            this.sending1 = true;

            var token = this.$func.getLoggedToken();

            var supporters = [];

            for(var i=1; i <= this.liczbaOs; i++){
                supporters.push({ 
                    "first_name"    : document.getElementById('imie_'+i).value,
                    "last_name"     : document.getElementById('nazwisko_'+i).value,
                    "year_of_study" : document.getElementById('rok_studiow_'+i).value,
                    "album"         : document.getElementById('nr_albumu_'+i).value
                });
            }


            axios.post(process.env.VUE_APP_CANDIDATE_REQUEST, {
                headers: {
                    'Authorization': `Token ${token}`
                },
                
                    first_name: document.getElementById('imie').value,
                    last_name: document.getElementById('nazwisko').value,
                    email: document.getElementById('email').value,
                    phone: document.getElementById('phone').value,
                    field_of_study: document.getElementById('kierunek').value,
                    year_of_study: document.getElementById('rok_studiow').value,
                    community: document.getElementById('instytut').value,
                    album: document.getElementById('nr_albumu').value,
                    supporters,
                    agreement_text: this.checkbox_zgloszenie,
                
            })
            .then(() => {
            })
            .catch(err => {
                
                let json = err.response.data;

                for (const x in json) {   
                    this.error_message += json[x]+"\n";
                }

                this.error=true;
            })
            .then(() =>{
                this.sent1=true;
                this.sending1 = false;
            })


        },

        remove_person(){
            this.liczbaOs--;
        },
        add_person(){
            this.liczbaOs++;
        },


  },

};
</script>
<style lang="scss" scoped>
.komunikat{
  text-align: center;
  margin-top: 80px;
}
.ok{
    color: green;
}
.error{
    color: red;
}
.formDiv{
    padding:10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width:100%;
    align-items: center;
}

.formSection{
    display: inline-block;

}

.margin-top{
    margin-top: 30px;
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

.inputCheckBox{
    border-radius:2px;
    padding: 15px 15px 15px 0;
    border:2px solid var(--my_orange);
    border-radius: 5px;


    display: flex;
    align-items: center;

}
label{
    flex: 90%;
    font-family: Roboto;
    font-weight: bold;
}
#checkbox_zgloszenie{
    _margin: 10px;
    flex: 10%;
    
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
    width:275px;
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
button.BTN {
  margin: 10px;
  padding: 10px;
  font-family: "Montserrat";
  color: white;
  font-size: 1.3rem;
  /*margin: auto;*/
}
.person_buttons{
    _margin-bottom: 15px;
    margin-top: 15px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.BTN.person_button{
    font-size: 1rem;
}
.BTN.send_button{
    margin-bottom: 40px;
}
.hrInner{
    height: 1px;
    background-color: #ccc;
    border: none;
    width: 100%;
    margin: auto;
}
.formInnerSection{
    margin-bottom:3%;
}

h2,h3,h4{
    color: #345;
    
}

#checkbox_label{
    font-family: Roboto;
    font-weight: bold;
}

label{
    display: block;
}
.formDiv{
        text-align: center;
    }
.one_person{
    margin-bottom: 20px;
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
        width: 324px;
    }
    .inputCheckBox{
        margin:10px;
        width: 720px;
    }
}

@media only screen and (min-width: 672px) and (max-width: 1199px){
    .inputCheckBox{
        margin:10px;
        width: 620px;
    }
}

@media only screen and (max-width: 671px){
    .BTN.person_button{
        font-size: 0.8rem;
    }
    #newCandidateForm{
        max-width:320px;
    }
    .formDiv{
        text-align: center;
    }
    label{
        text-align: left;
    }
    .selectC, .inputC, .inputDiv{
        margin-left: 0;
    }
   
    .inputCheckBox{
        margin:0px;
        max-width: 320px;
    }
}

@media only screen and (max-width: 340px){
    .selectC, .inputC, .inputDiv{
        width: 200px;
    }
    .inputV2{
        width: 170px;
    }
}
</style>