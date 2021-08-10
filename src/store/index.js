import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Dates:[
      {
      "id":  1,
      "daty": [[1,10],  [4,11]],
      },
      {
      "id":  0,
      "daty":  [[5,10],  [7,10]],
    },
    {
      "id":2,
      "daty": [[20,10], [20,10]],

    }  ,
     {
       "id":3,
       "daty":[[29,10], [5,11]],
     } ,
     {
       "id":4,
       "daty":[[29,10], [5,11]],
     },
       {
       "id":5,
       "daty":[[10,10], [11,11]],
     },
      {
       "id":6,
       "daty":[[1,10],  [2,10]],
     },
     {
       "id":7,
       "daty":[[3,10],  [4,10]],
     },
     {
       "id":8,
       "daty":[[5,10],  [6,10]],
     },
     {
       "id":9,
       "daty":[[7,10],  [8,10]],
     },
    ],
  currentUser: {},

/*

    var geografii                           = ;
var grafiki_i_wzornictwa                = [[1,10],  [2,10]];//6

var historii_i_archiwistyki             = [[3,10],  [4,10]];//7
var informatyki                         = [[5,10],  [6,10]];//8
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

    LOGOUT_USER(state){
      state.currentUser = {}
    },
    SET_CURRENT_USER(state, username){

      //console.log("a: "+username.username);
      //console.log(username.username);

      state.currentUser = username;

      //console.log("b: "+state.currentUser.username);
      //console.log(state.currentUser.username);

    },

  },
  getters:{
    getInstytutById: (state) => (id) => {
      return state.Dates.find(date => date.id === id)
    },

    isLoggedIn: (state) => {
  
      //console.log(state.currentUser.username != undefined);
      //console.log(state.currentUser.username);

        return (state.currentUser.username != undefined);
    }

  },

  actions: {
    logoutUser({commit}){
      commit('LOGOUT_USER');
    },
    loginUser({commit}, username){
      commit('SET_CURRENT_USER', username);
    }
  },
  modules: {},
  plugins: [createPersistedState()]
});