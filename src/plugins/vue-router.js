// https://router.vuejs.org/ja/guide/#javascript

import Vue from 'vue';
import Router from 'vue-router';
import Opening from '../views/Opening.vue';
import Home from '../views/Home.vue';
import Answer from '../views/Answer.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      component: Home,
      params: { name: 'showOpeningPage' },
    },
    {
      path: '/opening/',
      component: Opening,
      params: { name: 'showOpeningPage' },
      /* vue-progressbarの設定 */
      meta: {
        progress: {
          func: [
            { call: 'color', modifier: 'temp', argument: '#ffb000' },
            { call: 'fail', modifier: 'temp', argument: '#6e0000' },
            { call: 'location', modifier: 'temp', argument: 'top' },
            { call: 'transition', modifier: 'temp', argument: { speed: '1.5s', opacity: '0.6s', termination: 400 } },
          ],
        },
      },
    },
    {
      path: '/answer',
      component: Answer,
    },
  ],
});
