import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex';

// npm 모듈 기반 일 때
Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    num: 10,
  },
  getters: {
    doubleNum(state) {
      return state.num * 2;
    }
  },
  mutations: {
    addNumber(state) {
      // this.num += 1;
      state.num += 1;
    }
  }
});

Vue.config.productionTip = false;

new Vue({
  store,
  render: h => h(App),
}).$mount('#app')