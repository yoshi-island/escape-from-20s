import Vue from 'vue';
import VueWait from 'vue-wait';
import App from './App.vue';
import './plugins/bootstrap-vue';
import router from './plugins/vue-router';
import './plugins/vue-scrollto';
import './plugins/vue-confetti';
import './plugins/vue-fontawesome';
import './plugins/animate';
import './plugins/vue-progressbar';
import './css/hamburgers.css';

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
  wait: new VueWait(),
}).$mount('#app');
