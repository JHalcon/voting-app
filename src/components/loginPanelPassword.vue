<template>
  <div id="main_frame_password">
    <form @submit.prevent="login" class="form-inline">
            
            <label for="email" class="main_frame_text textRoboto login_txt">{{this.$store.state.msg.home.email}}</label>
            <input v-model="username" size="sm" type="text" required :placeholder=this.$store.state.msg.mainPage.login_frame_1_placeholder_1
                    :class="{ 'errorClass' : error == true, 'loggingNoError' : error == false }" class="textRoboto logging" id="email"
              > <!-- pattern="[a-z,A-Z]+[.][a-z,A-Z]+[0-9]*@student.up.krakow.pl" -->
            <label for="pwd" class="main_frame_text textRoboto login_txt">{{this.$store.state.msg.home.haslo}}</label>
            <input v-model="password" type="password" required placeholder="np. *******" 
                    :class="{ 'errorClass' : error == true, 'loggingNoError' : error == false }" class="textRoboto logging" id="pwd">




            <button  class="login_btn textRoboto">
              <div v-if="loading == true" class="sk-chase">
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              <div class="sk-chase-dot"></div>
              </div>
              <div v-else>
              {{this.$store.state.msg.home.login_button}}
              </div>
            </button>


        </form>
        
        <!-- <div id="new_pwd"><router-link to="" class="new_pwd_link textRoboto">ustaw nowe hasło</router-link> </div> -->
   </div>
</template>

<script>

import axios from 'axios';

export default {
  name: "loginPanelPassword",
  components: {
  },
  data(){
    return {
      username: '',
      password: '',
      token: this.$func.getLoggedToken || null, //localStorage.getItem('JWT_TOKEN') || null,
      //first_name: '',
      //last_name: '',

      loading: false,
      error: false,
    }
  },
  methods: {
    login(){

      this.loading = true;
      this.error = false;
      //var that = this;

      axios.post(process.env.VUE_APP_LOGIN, {
        email: this.username,
        password: this.password,
      })
      .then(resp => {
        this.token = resp.data.token;

        this.$func.loginUser({'username': this.username, 'token': resp.data.token, 'user_id': resp.data.user_id})

        this.$router.push('/UserPage');

      })
      .catch((err) => {
        console.log(err)

        this.error=true;
        this.loading = false;
      })

    }
  },
  watch: {
    username(){
      if(this.error)
        this.error = false;
    },
    password(){
      if(this.error)
        this.error = false;
    },
  },
};
</script>
<style  lang="scss" scoped>


#main_frame_password{
    background-color: white;
    border-style: solid;
    border-color: var(--my_magenda);
    border-radius: 40px;
    text-align: center;
    position: relative; 
    z-index: 4;
}

#main_frame_password .login_txt{
    margin-bottom:30px;
    font-weight:bold;
    color: gray;
}

#main_frame_password .login_btn{
    display: inline-block;
    padding: 15px 25px;
    cursor: pointer;
    text-align: center;
    color: #fff;
    background-color: var(--my_magenda);
    border: none;
    border-radius: 15px;
    box-shadow: 2px 5px 5px #999;

}

button div{
    font-weight:bold;
}

#main_frame_password .login_btn:hover {background-color: var(--my_magenda_dark);}

#main_frame_password .login_btn:active {
  background-color: var(--my_magenda_dark);
  box-shadow: 1px 5px 1px #666;
  transform: translateY(4px);
}

#main_frame_password ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: gray;
    opacity: 0.6; /* Firefox */
  }

#main_frame_password .form-inline{
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
}
#main_frame_password .form-inline label{
    margin: 5px 10px 5px 0;
}
#main_frame_password .logging{ //input[type="text"]

	border-radius: 10px;
	margin: 0;
	outline: 0;
	padding: 10px;
  font-weight:bold;

  vertical-align: middle;
  margin: 5px 0px 5px 0;
    
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


#main_frame_password .loggingNoError.logging:focus{ //input[type="text"]:focus
	background-color: #e8eeef;
}

.new_pwd_link {
  font-style: italic;
  font-weight: bold;
  text-decoration: underline;
  color: gray;
}

.new_pwd_link:hover{
  color: black;
}


@media only screen and (min-width: 860px) {
  .login_btn {
    width:200px;
    height: 60px;
  }

    #main_frame_password {
      border-width: 6px;
      padding: 50px;
      margin: auto;
      _margin-top: 40px;
      margin-bottom: 50px;
      width: 750px;
    }

    #main_frame_password label{
      width: 100px;
    }

    #main_frame_password .logging{ //input[type="text"]
      font-size: 20px;    
      width: 500px;
    }
    
    #main_frame_password .login_btn{
      margin: 20px 30px 0px;
    }

    .login_btn div {
      font-size: 20px;
    }
    #main_frame_password .main_frame_text{
      font-size: 24px;
    }

    #new_pwd{
      position: absolute;
      right: 40px;
      bottom: 80px;
      margin:15px 15px 0px;
    }

    
  // loading-logging animation
    .sk-chase {
      width: 30px;
      height: 30px;
    }
}

@media only screen and (max-width: 859px) {
    #main_frame_password {
      border-width: 3px;
      padding:3vw;
      padding-top:8vw;
      padding-bottom: 6vw;
      
      margin: 3%;
      width: 94%;
    }

    #main_frame_password .logging{ //input[type="text"]
      font-size: 16px;  
      width: 100%;
      margin: 0px 0px 15px;
    }


    #main_frame_password .form-inline{
      flex-direction: column;
    }

    #main_frame_password .login_btn{
      margin: 10px 0px 0px;
      width: 160px;
      height: 55px;
    }

    #main_frame_password .main_frame_text{
      font-size: 20px;
    }

    #new_pwd{
      margin:30px 15px 20px;
    }

    // loading-logging animation
    .sk-chase {
      width: 25px;
      height: 25px;
    }

}

@media only screen and (max-width: 330px) {
    #main_frame_password .login_btn{
      padding: 5px 5px;
      width: 100%;
      max-width: 160px;
    }
  }


.sk-chase {
  position: relative;
  animation: sk-chase 2.5s infinite linear both;
  margin:auto;
}

.sk-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: sk-chase-dot 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: #fff;
  border-radius: 100%;
  animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
}

.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes sk-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes sk-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}

</style>