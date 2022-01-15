// https://www.npmjs.com/package/vue-scrollto
// https://qiita.com/SenK/items/1475b6b9ff07706951a6

import Vue from 'vue';
import VueScrollTo from 'vue-scrollto';

Vue.use(VueScrollTo, {
  duration: 500, // 早すぎないように遅くする
  offset: -50, // オフセットで遷移先の要素がヘッダーに隠れるのを対策
  easing: 'ease-out', // ease-outが直感的かと思い採用
});

export default new Vue({
});
