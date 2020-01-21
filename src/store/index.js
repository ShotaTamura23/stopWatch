import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 3590,
    timerObj: null,
    saveTime: 0
  },
  mutations: {
    timerStart: function(state) {
      state.count++;
    },
    timerSave: function(state) {
      console.log(state);
      state.saveTime = state.count;
    }
  },
  actions: {
    timerStart: function(context, { stopTime }) {
      console.log(stopTime);
      this.timerObj = setInterval(() => {
        context.commit("timerStart");
      }, 1000);
    },
    timerStop: function() {
      clearInterval(this.timerObj);
    },
    timerSave({ commit }) {
      commit("timerSave");
    }
  },
  getters: {}
});
