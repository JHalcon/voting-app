import Vue from "vue";
import Vuex from "vuex";
import msg from "./msg";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Dates: [
      { // Biologia
        id: 0,
        day: 10,
        month: 9,
      },
      { // Filologia Angielska
        id: 1,
        day: 11,
        month: 11,
      },
      { // Filologia Polska
        id: 2,
        day: 13,
        month: 12,
      },
      { // Filozofia i Socjologia
        id: 3,
        day: 28,
        month: 9,
      },
      { //Fizyka
        id: 4,
        day: 17,
        month: 10,
      },
      { //Geografia 
        id: 5,
        day: 19,
        month: 10,
      },
      { // Grafika i wzornictwo 
        id: 6,
        day: 20,
        month: 10,
      },
      { // Historia i Archiwistyka
        id: 7,
        day: 24,
        month: 10,
      },
      { // Informatyka
        id: 8,
        day: 24,
        month: 12,
      },
    ],

    miesiace: [ "Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"],
    miesiace_dopelniacz: [ "stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia"],
    dni_tygodnia: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"],
    dni_tygodnia_caps: ["NIEDZIELA", "PONIEDZIAŁEK", "WTOREK", "ŚRODA", "CZWARTEK", "PIĄTEK", "SOBOTA"],

    lata_studiow:[
      {nazwa:"1 rok - I stopnia",wartosc:"1"},
      {nazwa:"2 rok - I stopnia",wartosc:"2"},
      {nazwa:"3 rok - I stopnia",wartosc:"3"},
      {nazwa:"4 rok - I stopnia",wartosc:"4"},
      {nazwa:"1 rok - II stopnia",wartosc:"5"},
      {nazwa:"2 rok - II stopnia",wartosc:"6"},
      {nazwa:"1 rok - jednolite magisterskie",wartosc:"7"},
      {nazwa:"2 rok - jednolite magisterskie",wartosc:"8"},
      {nazwa:"3 rok - jednolite magisterskie",wartosc:"9"},
      {nazwa:"4 rok - jednolite magisterskie",wartosc:"10"},
      {nazwa:"5 rok - jednolite magisterskie",wartosc:"11"},
    ],    
    
    
    instytuty: [
      {wartosc: 0, nazwa: "Instytut Biologii"},
      {wartosc: 1, nazwa: "Instytut Filologii Angielskiej"},
      {wartosc: 2, nazwa: "Instytut Filologii Polskiej"},
      {wartosc: 3, nazwa: "Instytut Filozofii i Socjologii"},
      {wartosc: 4, nazwa: "Instytut Fizyki"},
      {wartosc: 5, nazwa: "Instytut Geografii"},
      {wartosc: 6, nazwa: "Instytut Grafiki i Wzornictwa"},
      {wartosc: 7, nazwa: "Instytut Historii i Archiwistyki"},
      {wartosc: 8, nazwa: "Instytut Informatyki"},
      {wartosc: 9, nazwa: "Instytut Malarstwa i Edukacji Artystycznej"},
      {wartosc: 10, nazwa: "Instytut Matematyki"},
      {wartosc: 11, nazwa: "Instytut Nauk o Bezpieczeństwie"},
      {wartosc: 12, nazwa: "Instytut Nauk o Informacji"},
      {wartosc: 13, nazwa: "Instytut Nauk o Polityce i Administracji"},
      {wartosc: 14, nazwa: "Instytut Nauk o Wychowaniu"},
      {wartosc: 15, nazwa: "Instytut Nauk Technicznych"},
      {wartosc: 16, nazwa: "Instytut Neofilologii"},
      {wartosc: 17, nazwa: "Instytut Pedagogiki Przedszkolnej i Szkolnej"},
      {wartosc: 18, nazwa: "Instytut Pedagogiki Specjalnej"},
      {wartosc: 19, nazwa: "Instytut Prawa i Ekonomii"},
      {wartosc: 20, nazwa: "Instytut Psychologii"},
      {wartosc: 21, nazwa: "Instytut Spraw Społecznych"},
      {wartosc: 22, nazwa: "Instytut Sztuki Mediów"},
    ],

    kierunki:
      [
      {wartosc: 0, nazwa:"administracja"},
      {wartosc: 1, nazwa:"architektura informacji"},
      {wartosc: 2, nazwa:"archiwistyka, zarządzanie dokumentacją i infobrokerstwo"},
      {wartosc: 3, nazwa:"art & design"},
      {wartosc: 4, nazwa:"bezpieczeństwo międzynarodowe"},
      {wartosc: 5, nazwa:"bezpieczeństwo międzynarodowe (z językiem wykładowym angielskim)"},
      {wartosc: 6, nazwa:"bezpieczeństwo państwa"},
      {wartosc: 7, nazwa:"bezpieczeństwo zdrowotne"},
      {wartosc: 8, nazwa:"bioinformatyka"},
      {wartosc: 9, nazwa:"biologia"},
      {wartosc: 10, nazwa:"chemia-nauczyciel chemii"},
      {wartosc: 11, nazwa:"design"},
      {wartosc: 12, nazwa:"digital design"},
      {wartosc: 13, nazwa:"edukacja techniczno-informatyczna"},
      {wartosc: 14, nazwa:"ekonomia społeczna"},
      {wartosc: 15, nazwa:"etyka - mediacje i negocjacje"},
      {wartosc: 16, nazwa:"filologia angielska"},
      {wartosc: 17, nazwa:"filologia germańska"},
      {wartosc: 18, nazwa:"filologia hiszpańska"},
      {wartosc: 19, nazwa:"filologia polska"},
      {wartosc: 20, nazwa:"filologia romańska"},
      {wartosc: 21, nazwa:"filologia rosyjska"},
      {wartosc: 22, nazwa:"filologia włoska"},
      {wartosc: 23, nazwa:"filozofia"},
      {wartosc: 24, nazwa:"fizyka"},
      {wartosc: 25, nazwa:"geografia"},
      {wartosc: 26, nazwa:"gospodarka przestrzenna"},
      {wartosc: 27, nazwa:"grafika"},
      {wartosc: 28, nazwa:"historia"},
      {wartosc: 29, nazwa:"informatyka"},
      {wartosc: 30, nazwa:"inżynieria bezpieczeństwa"},
      {wartosc: 31, nazwa:"kognitywistyka"},
      {wartosc: 32, nazwa:"komunikacja wizualna"},
      {wartosc: 33, nazwa:"kulturoznawstwo i wiedza o mediach"},
      {wartosc: 34, nazwa:"logopedia"},
      {wartosc: 35, nazwa:"malarstwo"},
      {wartosc: 36, nazwa:"manager projektów społecznych"},
      {wartosc: 37, nazwa:"matematyka"},
      {wartosc: 38, nazwa:"ochrona środowiska"},
      {wartosc: 39, nazwa:"odnowa biologiczna"},
      {wartosc: 40, nazwa:"pedagogika"},
      {wartosc: 41, nazwa:"pedagogika przedszkolna i wczesnoszkolna"},
      {wartosc: 42, nazwa:"pedagogika specjalna"},
      {wartosc: 43, nazwa:"politologia"},
      {wartosc: 44, nazwa:"polityka społeczna"},
      {wartosc: 45, nazwa:"praca socjalna"},
      {wartosc: 46, nazwa:"prawo"},
      {wartosc: 47, nazwa:"psychologia"},
      {wartosc: 48, nazwa:"psychologia i biologia zwierząt"},
      {wartosc: 49, nazwa:"socjologia"},
      {wartosc: 50, nazwa:"stosunki międzynarodowe"},
      {wartosc: 51, nazwa:"studia niemcoznawcze i środkowoeuropejskie"},
      {wartosc: 52, nazwa:"sztuka i edukacja"},
      {wartosc: 53, nazwa:"sztuka i media"},
      {wartosc: 54, nazwa:"sztuka współczesna"},
      {wartosc: 55, nazwa:"turystyka historyczna i dziedzictwo kulturowe"},
      {wartosc: 56, nazwa:"turystyka i rekreacja"},
      {wartosc: 57, nazwa:"zarządzanie informacją i publikowanie cyfrowe"},
      {wartosc: 58, nazwa:"zarządzanie oświatą i organizacjami pozarządowymi"},
      {wartosc: 59, nazwa:"zarządzanie w służbach społecznych"}
      ],

    msg,
  //currentUser: "",
  is_irss: true, 
  is_new_candidate_turn_on: true,
  login_route_history: '/',
/*


var malarstwa_i_edukacji_artystycznej   = [[7,10],  [8,10]];//9

var matematyki                          = [[25,10], [27,10]];//10
var nauk_o_bezpieczeństwie              = [[29,10], [30,10]];//11
var nauk_o_informacjii                  = [[31,10], [2,11]];//12
var nauk_o_polityce_i_administracjii    = [[4,11],  [6,11]];//13
var nauk_o_wychowaniu                   = [[8,11],  [11,11]];//14

var nauk_technicznych                   = [[12,11], [13,11]];
var neofilologii                        = [[14,11], [16,11]];
var pedagogiki_przedszkolnej_i_szkolnej = [[17,11], [18,11]];
var pedagogiki_specjalnej               = [[19,11], [20,11]];
var prawa_i_ekonomii                    = [[22,11], [23,11]];

var psychologii                         = [[25,11], [26,11]];
var spraw_spolecznych                   = [[27,11], [28,11]];
var sztuki_mediow                       = [[29,11], [30,11]];





    ]*/
  },
  mutations: {
/*
    LOGOUT_USER(state, getters){
      state.currentUser = {}
      
      if(getters.localStorageSupport){
        localStorage.removeItem('JWT_TOKEN');  
        localStorage.removeItem('USER_ID');  
      } else{
        console.log("")
      }
    },
    SET_CURRENT_USER(state, {payload, getters}){
      state.currentUser = payload.username;

      console.log("setcurrentuser")

      if(getters.localStorageSupport){
        localStorage.setItem('JWT_TOKEN', payload.token);
        localStorage.setItem('USER_ID', payload.user_id);
      } else{
        console.log("")
      }
    },
    */
    /*
    CHECK_LOCAL_STORAGE(state){
      console.log("isLocalStorageChecked: "+state.isLocalStorageChecked);
      if(state.isLocalStorageChecked == false){
          state.isLocalStorageChecked = true;

      }
    },*/
    /*
    SET_CURRENT_USER_NAME(state, payload){
      state.first_name = payload.first_name;
      state.last_name = payload.last_name;

      console.log("a:");
      console.log(payload.first_name);
      console.log("b:");
      console.log(state.first_name);
    },
    */

  },
  getters:{
    getInstytutById: (state) => (id) => {
      return state.Dates.find(date => date.id === id)
    },

    /*
    isLoggedIn: (state,getters) => {

      //getter isLoggedIn nie wykonuje się ponownie, jeśli nie zmieni się state (jak rozumiem), dlatego muszę zachowywać również state.currentUser.username,
      //a nie tylko localStorage, aby funkcja isLoggedIn wykonała się ponownie i poprawnie wylogowała użytkownika. Oraz aby po zalogowaniu od razu poprawnie przekierowala stronę

        console.log("isloggedin: "+state.currentUser)

        if(state.currentUser.username != undefined){
          return true;
        }
        //if(localStorage.getItem("JWT_TOKEN")){
        if(getters.getLoggedToken){
          return true;
        }
        return false;
        
    },
*/
    is_IRSS: (state) => {
      return state.is_irss;
    },

    getMainPageLink: (state) => {
      if(state.is_irss)
        return '/';
      else
        return '/Home';
    },
    
    /*
    localStorageSupport: function () {
      console.log("localstoraesupport")
        var testKey = 'test';
        try
        {
            window.localStorage.setItem(testKey, '1');
            window.localStorage.removeItem(testKey);
            return true;
        }
        catch (error)
        {
          console.log(error)
            return false;
        }
    },

    getLoggedToken: (state, getters) => {
      if(getters.localStorageSupport){
        console.log("pobieram token z localstorage: "+window.localStorage.getItem('JWT_TOKEN'))
        return window.localStorage.getItem('JWT_TOKEN');
      } else{
        console.log("pobieram token z cookies")
      }
    },
    getLoggedUserId: (state, getters) => {
      if(getters.localStorageSupport){
        console.log("pobieram userId z localstorage")
        return window.localStorage.getItem('USER_ID');
      } else{
        console.log("pobieram userId z cookies")
      }
    },
*/
    /*
    getUserName: (state) =>{
      console.log(state.first_name);

      if(state.first_name != null && state.last_name != null){        
        return state.first_name +" " + state.last_name;
      }
        return "Nie udało się pobrać imienia i nazwiska";
    },
    */
  },

  actions: {
    /*
    logoutUser({ state, getters}){
      state.currentUser = "";
      
      if(getters.localStorageSupport){
        window.localStorage.removeItem('JWT_TOKEN');  
        window.localStorage.removeItem('USER_ID');  
      } else{
        console.log("")
      }

      //commit('LOGOUT_USER', getters);
    },
    loginUser({ state}, payload){
      state.currentUser = payload.username;



      //commit('SET_CURRENT_USER', {payload, getters});
    },*/
    //checkLocalStorage({commit}){
    //  commit("CHECK_LOCAL_STORAGE");
    //}
    //setUserName({commit}, payload){
    //  commit('SET_CURRENT_USER_NAME', payload);
    //},
  },
  modules: {},
  //plugins: [createPersistedState()] //todo del
});
