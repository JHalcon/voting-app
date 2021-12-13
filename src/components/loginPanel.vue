<template>
  <div ref="frame"  class="main_frame" :style="dynamicHeight">

    <div v-if="!loading">
      <div class="login_txt">
        <div class="main_frame_text textRoboto ">
          {{this.text1}}<br class="main_text_br1" />{{this.text2}}
        </div>
        <div class="main_frame_text2 textRoboto"> 
          {{this.text3}}<br class="main_text_br1" /><button class="link textRoboto" v-if="email_sent" @click="sendAgain">{{this.text_alert_link}}</button><span v-else>{{this.text4}}</span>
        </div>
      </div>
      <form  @submit.prevent="login">
        <input v-if="!this.email_sent"
          type="text"
          required
          :placeholder="placeholder"
          :class="{ 'errorClass' : this.error == true, 'loggingNoError' : error == false }"
          class="textRoboto"
          v-model="email"
          id="email"
        />
          
          <input v-else
          type="text"
          required
          :placeholder="placeholder"
          :class="{ 'errorClass' : this.error == true, 'loggingNoError' : error == false }"
          class="textRoboto"
          v-model="pwd"
          id="pwd"
        />

        <div v-if="email_sent" class="main_frame_text2 textRoboto"> 
          {{this.text_alert}}
        </div>

        <button class="login_btn textRoboto">
            <div v-if="loading2">
              <loadingItem small />
            </div>
            <div v-else>
              {{this.btn}}
            </div>
        </button>
      
      </form>
    </div>
    <div v-else>
      <loadingItem medium />
    </div>


  </div>
</template>

<script>
import axios from 'axios';
import LoadingItem from '@/components/loadingItem.vue';

export default {
  name: "loginPanel",
  components: {
        LoadingItem,
  },
  props: {
    newCandidate: Boolean,
  },
  data(){
    return {
      email: '',
      pwd: '',
      loading: false, // na całym mainFrame do zmiany napisów
      loading2: false, // na przycisku logowania
      email_sent: false,
      error: false,
      switch_to_login_with_password: false,
      height_of_main_frame_on_computer: 315,
      height_of_main_frame_on_phones: Number,
      height_of_main_frame_on_small_phones: Number,
      device_width: 0,
      isDynamicHeightOn: false,
      orientation: 0,

      text1: this.$store.state.msg.mainPage.login_frame_1_text_1,
      text2: this.$store.state.msg.mainPage.login_frame_1_text_2,
      text3: this.$store.state.msg.mainPage.login_frame_1_text_3,
      text4: this.$store.state.msg.mainPage.login_frame_1_text_4,
      placeholder: this.$store.state.msg.mainPage.login_frame_1_placeholder_1,
      btn: this.$store.state.msg.mainPage.login_frame_1_button_1,
      text_alert: this.$store.state.msg.mainPage.login_frame_1_text_alert,
      text_alert_link: this.$store.state.msg.mainPage.login_frame_1_text_alert_link,

    }
  },
  created() {
    this.device_width = window.innerWidth; 
  },
  watch: {
    device_width() {

      if(this.device_width < 860){
        this.height_of_main_frame_on_phones = this.$refs.frame.clientHeight + 10;
        this.height_of_main_frame_on_small_phones = this.height_of_main_frame_on_phones;
      }


    },
    pwd(){
      if(this.error)
        this.error = false;
    },
    email(){
      if(this.error)
        this.error = false;
    }
  },
  beforeDestroy() { 
      window.removeEventListener('resize', this.onResize); 
      window.addEventListener("orientationchange", this.onOrientationChange);
  },
  mounted(){
     this.$nextTick(() => {
      window.addEventListener('resize', this.onResize);
      window.addEventListener("orientationchange", this.onOrientationChange);
    })

   if(this.device_width < 860){
      this.height_of_main_frame_on_phones = this.$refs.frame.clientHeight + 10;
      this.height_of_main_frame_on_small_phones = this.height_of_main_frame_on_phones;
    }
    

  },
  methods: {

    onResize() {

      this.device_width = window.innerWidth
      if(this.device_width >= 768)
        this.isDynamicHeightOn = false; // blokujemy dynamicHeight tylko na komputerach
                                        // dzięki temu jak ktoś zmieni wymiary okna to będzie się dynamicznie zmieniał wymiar mainFrame
                                        // natomiast na telefonach ekran zmienia się wtedy, gdy pojawia się klawiatura ekranowa, a wtedy mainframe.height jest małe
                                        // i to psuje animację rozwijania mainFrame 
    },

    onOrientationChange(){
      this.orientation = window.screen.orientation.angle

      this.isDynamicHeightOn = false; // po zmianie blokujemy dynamic Height, dzięki czemu wymiary są okej (ale podczas najbliższej zmiany nie animuje się height, ale już trudno)

    },

    login(){

      this.isDynamicHeightOn = true;

      if( !this.email_sent ){

        if(this.email == this.$store.state.msg.mainPage.login_frame_1_email){
            this.isDynamicHeightOn = false;
            this.text2 = this.$store.state.msg.mainPage.login_frame_1_text_2_edit;
            this.error = true;

        } else{

          this.loading = true;

          axios.post(process.env.VUE_APP_SEND_MAIL, { 
            email: this.email,
          })
          .then(()=>{})
          .catch(()=>{}) 
          .then(()=>{

            this.text1 = this.$store.state.msg.mainPage.login_frame_1_text_1a,
            this.text2 = this.$store.state.msg.mainPage.login_frame_1_text_2a,
            this.text3 = this.$store.state.msg.mainPage.login_frame_1_text_3a,
            this.text4 = this.$store.state.msg.mainPage.login_frame_1_text_4a,
            this.placeholder = this.$store.state.msg.mainPage.login_frame_1_placeholder_2,
            this.btn = this.$store.state.msg.mainPage.login_frame_1_button_2,

            this.height_of_main_frame_on_computer += 45;
            this.height_of_main_frame_on_phones += 50;
            this.height_of_main_frame_on_small_phones += 50;

            this.email_sent = true;
            this.loading = false;
          })

        }
      } else{

        // kliknieto wysylanie hasla
        
        var passwd = this.pwd.replace(/\D/g,'');
        
        this.loading2 = true;
        this.error = false;

        axios.post(process.env.VUE_APP_LOGIN, {
          email: this.email,
          password: passwd,
        })
        .then(resp => {
          this.token = resp.data.token;
          this.$func.loginUser({'username': this.email, 'token': resp.data.token, 'user_id': resp.data.user_id});

          if(this.newCandidate == null)
            this.$router.push('/UserPage');
          else
            this.$router.go();

        })
        .catch(() => {
          this.error=true;
          this.loading2 = false;
        })

      }



    },

    sendAgain(){

      this.text1 = this.$store.state.msg.mainPage.login_frame_1_text_1,
      this.text2 = this.$store.state.msg.mainPage.login_frame_1_text_2,
      this.text3 = this.$store.state.msg.mainPage.login_frame_1_text_3,
      this.text4 = this.$store.state.msg.mainPage.login_frame_1_text_4,
      this.placeholder = this.$store.state.msg.mainPage.login_frame_1_placeholder_1,
      this.btn = this.$store.state.msg.mainPage.login_frame_1_button_3,

      this.height_of_main_frame_on_computer -= 45;
      this.height_of_main_frame_on_phones -= 50;
      this.height_of_main_frame_on_small_phones -= 50;

      this.email_sent = false;
      this.pwd="";

    }
 

  },
  computed: {
    dynamicHeight(){
      if(this.isDynamicHeightOn){     
        
        if(this.device_width >= 860){     
          return {
            height: this.height_of_main_frame_on_computer+'px',
          };
        } 
        if(this.device_width >= 300){     
          return {
            height: this.height_of_main_frame_on_phones+'px',
          }
        }
        return {
          height: this.height_of_main_frame_on_small_phones+'px',
        }
      }
      else
        return {}
    }
  },

};
</script>

<style lang="scss" scoped>

.main_frame{
  background-color: white;
  border-style: solid;
  border-color: var(--my_magenda);
  border-radius: 40px;
  text-align: center;
  position: relative; 
  z-index: 4;
  overflow: hidden;

  transition: height 0.3s;

}



.main_frame_text{
  font-weight: bold;
  color: gray;
  margin-bottom: 5px;
}

.main_frame_text2{
  width: 80%;
  margin: auto;
}

.main_frame input[type="text"]{
	border-radius: 10px;
	margin: 0;
	outline: 0;
	padding: 10px;
  font-weight:bold;
  margin-bottom: 10px;

    
}

.main_frame input[type="text"]:focus{
	background-color: #e8eeef;
}

.login_btn{
 
    display: inline-block;
    padding: 15px 25px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: var(--my_magenda);
    border: none;
    border-radius: 15px;
    box-shadow: 2px 5px 5px #999;
    font-size: 20px;

}

.login_btn div{
    font-weight:bold;
}

.login_btn:hover {background-color: var(--my_magenda_dark);}

.login_btn:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 0.6; /* Firefox */
  }

.link {
  font-style: italic;
  text-decoration: underline;
  background-color: white;
  font-size: 20px;

}

.link:hover{
  font-weight: bold;
}

.loggingNoError{
	background: rgba(255,255,255,.1);
  color: gray;
	border: 2px solid lightgrey;
}
.errorClass{
	background: #FFCCCC;
  border: 2px solid red;
  color: black;
}

@media only screen and (min-width: 1300px) {

  .main_frame_text{
      font-size: 26px;
    }
}

@media only screen and (min-width: 860px) and (max-width: 1299px) {

  .main_frame_text{
      font-size: 24px;
    }

}

@media only screen and (min-width: 860px) {


  .main_frame {
    border-width: 6px;
    padding: 40px;
    margin: auto;
    width: 700px;

    _height: 330px;
  }

  .main_frame input[type="text"] {
    font-size: 20px;
    width: 500px;
  }

  .main_frame_text{
  }
  .main_frame_text2{
    font-size: 20px;
  }

  .login_btn {
    //margin: 20px 30px 0px;
        margin-top: 10px;

    width: 200px;
    height: 60px;
  }

  .login_txt {
    margin-bottom: 25px;
  }

  
}

@media only screen and (max-width: 859px) {
    .main_frame{
        border-width: 5px;
        padding:20px;
        padding-top:30px;
        margin: 3%;
        width: 94%;

    }

    .main_frame input[type="text"]{
        font-size: 16px;  
        width: 100%;
    }

    .main_frame .login_btn{
        margin: 10px 30px 20px;
        height: 50px;
    }

    .login_txt {
      margin-bottom: 20px;
    }

    .main_frame_text{
      font-size: 22px;
    }
    .main_frame_text2{
      font-size: 18px;
    }
    
    .link{
      font-size: 18px;
    }

  }

  @media only screen and (min-width:431px){
    .main_text_br1{
      display:none;
    }
  }

@media only screen and (max-width: 330px) {
    .main_frame .login_btn{
        margin-left: 0;
        margin-right: 0;
    }
}

</style>
