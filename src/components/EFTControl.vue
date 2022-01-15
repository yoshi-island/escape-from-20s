<template>
  <b-container class="eft-control">
      <b-row>
          <b-col>
            <b-nav pills align="right">

              <b-nav-item
                v-b-modal.resume-modal
              >
                <div
                  class="control-button"
                  id="resume"
                  @mouseover="expandButton('resume')"
                >
                  最初から
                </div>
              </b-nav-item>
              <b-modal
                id="resume-modal"
                centered
                title="最初から？"
                @ok="eftResume"
              >
                <p>
                  <font-awesome-icon
                    :icon="['fa', 'question']"
                    size="3x"
                  ></font-awesome-icon>
                </p>
                <p>
                  <b>本当に最初からやり直す？</b><br>
                  <br>
                   (OKをクリックすると、<br>脱出進捗はリセットされるよ）
                </p>
              </b-modal>

              <!--
                class="sp-only"でSPのみ表示されるように
                styleタグで設定している
              -->
              <!--
                メニューがクリック発行されたら
                それぞれカスタムイベントが発行される
                コンテンツのトップまでスクロールが実行される
                （vue-scrolltoを利用）
                https://www.npmjs.com/package/vue-scrollto
                （class="sp-only"でSPに限定）
              -->
              <b-nav-item
                class="sp-only"
                v-scroll-to ="'#eft-contents'"
              >
                <div
                  class="control-button"
                  id="up-button"
                  @mouseover="expandButton('up-button')"
                >
                  上へ
                </div>
              </b-nav-item>

              <!--
                class="sp-only"でSPのみ表示されるように
                styleタグで設定している
              -->
              <b-nav-item
                class="sp-only"
                v-scroll-to ="'#side-menu-sp'"
              >
                <div
                  class="control-button"
                  id="to-menu"
                  @mouseover="expandButton('to-menu')"
                >
                  メニューへ
                </div>
              </b-nav-item>

              <b-nav-item
                v-b-modal.giveup-modal
              >
                <div
                  class="control-button"
                  id="giveup"
                  @mouseover="expandButton('giveup')"
                >
                  諦める<br>(解説へ)
                </div>
              </b-nav-item>
              <b-modal
                id="giveup-modal"
                centered
                title="諦めて解説ページを見る？"
                @ok="$emit('eft-giveup')"
              >
                <p>
                  <font-awesome-icon
                    :icon="['fa', 'question']"
                    size="3x"
                  ></font-awesome-icon>
                </p>
                <p>
                  <b>本当に諦める？</b><br>
                  <br>
                  (OKをクリックすると、<br>脱出進捗はリセットされ<br>
                  解説ページに移動するよ)<br>
                </p>
              </b-modal>

            </b-nav>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BNav,
  BNavItem,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTControl',
  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
  },

  methods: {

    /*
      上テンプレートの最初からのボタンが
      押されたら呼び出される関数
      キャッシュをクリアする
      'eft-resumed'イベントを発行し、親（App.vue）に渡す
    */
    eftResume() {
      Cookies.remove('first-riddle-cleared');
      Cookies.remove('second-riddle-cleared');
      Cookies.remove('third-riddle-cleared');
      Cookies.remove('fourth-riddle-cleared');
      Cookies.remove('fifth-riddle-cleared');
      this.$emit('eft-resumed');
    },

    /*
      マウスオーバーでボタンを上に伸ばす、不透明にする
      スマホhover効かないのでクリックでアニメーション
      @touchstart(スマホのみの機能)と
      @mouseover(PCのみの機能)から呼ばれる
      → mouseoverがスマホでも効いているみたいなので
      一旦touchstartはなし
    */
    expandButton(id) {
      const targetElement = document.getElementById(id);
      targetElement.animate({
        marginTop: ['-100%', '0%'],
        opacity: ['0.8', '1'],
      }, {
        duration: 500,
        fill: 'forwards',
      });
    },
  },
};
</script>

<style scoped>
.eft-control {
  position: fixed; /* ボタンを下に固定 */
  bottom: 0em; /* ボタンを下に固定 */
  /*
  pointer-events:none;で
  フッターと下に重なっているボタンも押せるようにする
  */
  pointer-events: none;
}
/* ボタンの配置の設定 */
.nav-link {
  padding-bottom: 0;
  width: 6em; /* これ以上大きいとモバイルで崩れる */
  padding-left: 0;
}
/* ボタンの設定 */
.control-button {
  height: 10em;
  background: rgba(255,240,245,0.8); /* 半透明 */
  border-radius: 1em 1em 0 0;
  margin-bottom: -130%; /* 上に伸ばすために下にある程度しまっておく */
  color: #2c3e50;
  box-shadow: 0 0 .3em .1em rgba(0, 0, 0, .5);
  /*
    .eft-controlのpointer-events: none;
    だけだとコンロールボタン押せなくなるので調整
  */
  pointer-events: auto;
}

/* マウスオーバーでボタンを上に伸ばす、不透明にする */
/*
  うまく動かないので一旦expandButton()で実装し、
  こちらはコメントアウト
*/
/*
@media screen and (min-width: 769px) {
  .control-button:hover{
    margin-top: 0%;
    background: rgba(255,240,245,1);
  }
}
*/

/* 上へボタンはPCでは表示しない */
.sp-only {
  display: none;
}

/* SP設定 */
/* 上へボタンはSPで表示する */
@media screen and (max-width: 768px) {
  .sp-only {
    display: block;
  }
}

/*
  横幅が小さいデバイスだとメニューが表示しきれないので幅を狭くする
*/
@media screen and (max-width: 386px) {
  .nav-link {
    width: 5em; /* これ以上大きいとモバイルで崩れる */
  }
}
</style>
