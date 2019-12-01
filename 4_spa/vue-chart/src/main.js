import Vue from 'vue';
import App from './App.vue';
import ChartPlugin from './plugins/ChartPlugin';

Vue.use(ChartPlugin);
// Vue.use(ValidationPlugin);
// Vue.use(DatePikcerPlugin);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')