<template>
  <b-container class="eft-menu">
      <b-row>
          <b-col>
            <b-nav vertical id="side-menu">

              <!-- Audio Player -->
              <div>
                <p>※ 音量に注意してね<br>
                「<a href="https://dova-s.jp/bgm/play14881.html" target="_blank">Orange</a>」by龍崎一</p>
                <audio
                  controls
                  controlslist="nodownload"
                  src="@/assets/Orange.mp3"
                  type="audio/mp3"
                ></audio><br>
              </div>

              <!--
                メニューがクリック発行されたら
                それぞれカスタムイベントが発行される
              -->
              <b-nav-item active class="p-3">
                <b-button
                  @click="$emit('home-contents')"
                >
                  <img src="@/../src/assets/emoji/38.gif">
                  Home
                  <img src="@/../src/assets/emoji/38.gif">
                </b-button>
              </b-nav-item>

              <b-nav-item class="p-3">
                <b-button
                  @click="$emit('under-constraction')"
                >
                  <img src="@/../src/assets/emoji/44.gif">
                  工事中
                  <img src="@/../src/assets/emoji/44.gif">
                </b-button>
              </b-nav-item>

              <!-- 工事中ページの隠ボタンが押されたら表示するメニュー -->
              <!-- vue cliではv-show非推奨のようなのでv-if -->
              <!--
                工事中ページの隠ボタンが押されたら
                （this.firstRiddleCleared === 'true'）
                あるいは、ページがリロードされた（mounted())が、隠ボタンが押されたCookieが残っていたら
                （this.firstRiddleClearedCookieValue === 'true'）
                表示する
              -->
              <div id="hidden-menu-pc">
                <b-nav-item class="p-3">
                  <b-button
                    @click="$emit('about-author')"
                  >
                    <img src="@/../src/assets/emoji/140.gif">
                    管理人について
                    <img src="@/../src/assets/emoji/140.gif">
                  </b-button>
                </b-nav-item>

                <b-nav-item class="p-3">
                  <b-button
                    @click="$emit('garally')"
                  >
                    <img src="@/../src/assets/emoji/68.gif">
                    ギャラリー
                    <img src="@/../src/assets/emoji/68.gif">
                  </b-button>
                </b-nav-item>

                <b-nav-item class="p-3">
                  <b-button
                    @click="$emit('links')"
                  >
                    <img src="@/../src/assets/emoji/136.gif">
                    リンク集
                    <img src="@/../src/assets/emoji/136.gif">
                  </b-button>
                </b-nav-item>

                <b-nav-item class="p-3">
                  <b-button
                     @click="$emit('bbs')"
                  >
                    <img src="@/../src/assets/emoji/14.gif">
                    BBS
                    <img src="@/../src/assets/emoji/14.gif">
                  </b-button>
                </b-nav-item>
              </div>

              <b-nav-item class="p-3">
                <b-button
                  @click="$emit('escape-from-two-thousands')"
                >
                  <img src="@/../src/assets/emoji/40.gif">
                  脱出ページ
                  <img src="@/../src/assets/emoji/40.gif">
                </b-button>
              </b-nav-item>

            </b-nav>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>

/* import Bootstrap */
import {
  BContainer,
  BRow,
  BCol,
  BNav,
  BNavItem,
  BButton,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTMenu',

  props: {
    /*
      親（App.vue）から受け取った変数を
      テンプレートで使えるようにする
    */
    firstRiddleCleared: String,
    firstRiddleClearedCookieValue: String,
  },

  components: {
    BContainer,
    BRow,
    BCol,
    BNav,
    BNavItem,
    BButton,
  },

  /*
    本コンポーネントが読み込まれるたびに実行される関数
    Cookieの'first-riddle-cleared'の値が'true'であれば
    firstRiddleClearedCookieValueの値を'true'にして
    隠しメニューを表示されたままにする
    （すでにクリアしているが画面をリロードしてしまったケースを救う）
  */
  /* App.vueでも記載されているがこちらも必要 */
  mounted() {
    if (this.checkRiddleCookie('first-riddle-cleared') === 'true') {
      this.controlHiddenMenu('true');
    }
  },

  methods: {

    /*
      隠しメニューを表示したり非表示したりする関数
      statusに'true'を渡せば表示、'false'を渡せば非表示
      App.vueで呼び出される（refを利用）
    */
    controlHiddenMenu(status) {
      const target = document.getElementById('hidden-menu-pc');
      if (status === 'true') {
        target.style.visibility = 'visible';
      } else {
        target.style.visibility = 'hidden';
      }
    },

    /*
      Cookieの値が'true'であれば'true'を格納し、それ以外は'false'を格納する関数
      mounted()にて、謎のクリア状況を確認するために使う
    */
    checkRiddleCookie(cookieValue) {
      if (Cookies.get(cookieValue) === 'true') {
        this.riddleClearedCookieValue = 'true';
      } else {
        this.riddleClearedCookieValue = 'false';
      }
      return this.riddleClearedCookieValue;
    },

  },

};
</script>

<style scoped>
.eft-menu {
  padding: .75em;
  margin: 1em 0 0 0; /* Logo画像と近いと変なので間を空ける */
}

/* ボタン設定 */
#side-menu .btn {
  border: 2px dashed gray;
  background: rgba(255,255,255,0.5); /* 半透明 */
  width: 90%;
}
/* ボタンの文字設定 */
#side-menu .btn-secondary {
  color: #2c3e50;
}

#side-menu img {
  width: 20px;
}

.nav-item:active {
  font-weight:bolder;
}

audio {
  width: 80%;
  margin: 0 auto 1em auto;
}

/* 隠しメニューはデフォルトで非表示 */
#hidden-menu-pc {
  visibility: hidden;
}

/* 各メニューのが均等に配置されるように高さ指定 */
li {
  height: 7em;
}
</style>
