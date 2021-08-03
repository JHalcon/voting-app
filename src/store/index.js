import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    Dates:[
      {"month":1,
      "daty": [[1,10],  [4,11]],
    },
    {
      "month":0,
      "daty":  [[5,10],  [7,10]],
    }
    ]
  },
  mutations: {},
  actions: {},
  modules: {},
});
