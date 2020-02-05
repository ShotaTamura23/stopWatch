import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    count: 14398,
    manHour: 3.5,
    timerObj: null,
    saveTime: 0
  },
  mutations: {
    timerStart: function(state) {
      state.count++;
      if (state.count % 7200 == 0) {
        state.manHour = state.manHour + 0.5;
      }
    },
    timerSave: function(state) {
      state.saveTime = state.count;
    }
  },
  actions: {
    timerStart: function(context) {
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
