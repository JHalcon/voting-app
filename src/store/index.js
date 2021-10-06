import Vue from "vue";
import Vuex from "vuex";
import msg from "./msg";
import instytuty from "./instytuty";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {

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
    
    instytuty,

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

  },
  mutations: {},
  getters:{
    getInstytutById: (state) => (id) => {
      return state.instytuty.find(date => date.wartosc === id)
    },

    is_IRSS: (state) => {
      return state.is_irss;
    },

    getMainPageLink: (state) => {
      if(state.is_irss)
        return '/';
      else
        return '/Home';
    },
    
  },

  actions: {},
  modules: {},
});
