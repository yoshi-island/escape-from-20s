<template>
  <b-container class="eft-sub-content">
      <b-row>
          <b-col>

            <!-- アクセスカウンター -->
            <!--
            <h5>
              あなたは
              <a href="https://www.free-counter.jp/">
                <img
                  src="https://www.f-counter.net/j/46/1627750186/"
                  alt="アクセスカウンター"
                >
              </a>
              番目の訪問者
            </h5>
            -->
            <h5>
              あなたは
              <a href="https://www.free-counter.jp/">
                <img src="@/assets/kiriban.gif" alt="2000">
              </a>
              番目の訪問者
            </h5>

            <!-- 流れる文字 -->
            <div id="marquee-string">
              <Marquee scrolldelay="100">
                <h5>
                  <span>&#x1F31F;&#x1F31F;&#x1F31F;</span>
                  キリ番踏んだらBBSで「キリ番踏みました」と報告してね
                  <span>&#x1F31F;&#x1F31F;&#x1F31F;</span>
                </h5>
              </Marquee>
            </div>

            <!-- 進捗状況のハート -->
            <h1>
              <!--
                デフォルトの色はgray
                謎がクリアされたり、最初からボタンが押されたら、
                EFTSubContent.vueの関数changeColor()を呼び出して
                親App.vueでハートの色を変更する（refを利用）
              -->
              <span>
                <img
                  id="heart-one"
                  src="heart_gray.png"
                  alt="heart_gray"
                >
              </span>
              <span>
                <img
                  id="heart-two"
                  src="heart_gray.png"
                  alt="heart_gray"
                >
              </span>
              <span>
                <img
                  id="heart-three"
                  src="heart_gray.png"
                  alt="heart_gray"
                >
              </span>
              <span>
                <img
                  id="heart-four"
                  src="heart_gray.png"
                  alt="heart_gray"
                >
              </span>
              <span>
                <img
                  id="heart-five"
                  src="heart_gray.png"
                  alt="heart_gray"
                >
              </span>
            </h1>

          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTSubContent',

  components: {
    BContainer,
    BRow,
    BCol,
  },

  /* 本コンポーネントが読み込まれるたびに実行される関数 */
  mounted() {
    /*
      Cookieの'first-riddle-cleared'の値が'true'であれば
      firstRiddleClearedCookieValueの値を'true'にする
      （すでにクリアしているが画面をリロードしてしまったケースを救う）
    */
    this.firstRiddleClearedCookieValue = this.checkRiddleCookie('first-riddle-cleared');
    if (this.firstRiddleClearedCookieValue === 'true') {
      this.changeColor('heart-one', 'red');
    } else {
      this.changeColor('heart-one', 'gray');
    }

    /* 謎2についても同様の処理 */
    this.secondRiddleClearedCookieValue = this.checkRiddleCookie('second-riddle-cleared');
    if (this.secondRiddleClearedCookieValue === 'true') {
      this.changeColor('heart-two', 'red');
    } else {
      this.changeColor('heart-two', 'gray');
    }

    /* 謎3についても同様の処理 */
    this.thirdRiddleClearedCookieValue = this.checkRiddleCookie('third-riddle-cleared');
    if (this.thirdRiddleClearedCookieValue === 'true') {
      this.changeColor('heart-three', 'red');
    } else {
      this.changeColor('heart-three', 'gray');
    }

    /* 謎4についても同様の処理 */
    this.fourthRiddleClearedCookieValue = this.checkRiddleCookie('fourth-riddle-cleared');
    if (this.fourthRiddleClearedCookieValue === 'true') {
      this.changeColor('heart-four', 'red');
    } else {
      this.changeColor('heart-four', 'gray');
    }

    /* 謎5についても同様の処理 */
    this.fifthRiddleClearedCookieValue = this.checkRiddleCookie('fifth-riddle-cleared');
    if (this.fifthRiddleClearedCookieValue === 'true') {
      this.changeColor('heart-five', 'red');
    } else {
      this.changeColor('heart-five', 'gray');
    }
  },

  methods: {

    /* Cookieの値が'true'であれば'true'を格納し、それ以外は'false'を格納する関数 */
    checkRiddleCookie(cookieValue) {
      if (Cookies.get(cookieValue) === 'true') {
        this.riddleClearedCookieValue = 'true';
      } else {
        this.riddleClearedCookieValue = 'false';
      }
      return this.riddleClearedCookieValue;
    },

    /*
      ハートの色を変更する関数
      （EFTSubContent.vueのmounted()とApp.vueのrefで呼び出される）
      絵文字をだと機種によって画像が崩れるので、画像を指定する
      画像のソースは、「絵文字&#x2764;のstyle=redとstyle=gray」
      ハートの色をつける際はハートが見える位置までスクロールしてアニメーション
    */
    changeColor(id, color) {
      const target = document.getElementById(id);
      target.style.color = color;

      const elementSubContent = document.getElementById('eft-sub-content');

      if (color === 'red') {
        /* ハートが見える位置までスクロール */
        elementSubContent.scrollIntoView({ behavior: 'smooth' });

        /* ハートがプニプにするアニメーション */
        target.animate([
          { transform: 'scale(1, 1)' },
          { transform: 'scale(1.3, 0.6)' },
          { transform: 'scale(1, 1.3)' },
          { transform: 'scale(1, 1)' },
          { transform: 'scale(1.3, 0.6)' },
          { transform: 'scale(1, 1.3)' },
          { transform: 'scale(1, 1)' },
        ], {
          duration: 1000,
        });

        /*
          理由は不明だがheart_red.pngとheart_gray.pngは
          同ディレクトリに入れるとうまく動かなかったので
          redをpublic配下に配置
        */
        target.setAttribute(
          'src',
          'heart_red.png',
        );
        target.setAttribute(
          'alt',
          'heart_red',
        );
      } else {
        target.setAttribute(
          'src',
          'heart_gray.png',
        );
        target.setAttribute(
          'alt',
          'heart_gray',
        );
      }
    },

  },

};
</script>

<style scoped>
.eft-sub-content {
  padding: .75em;
  margin: 1em 0 0 0; /* Logo画像と近いと変なので間を空ける */
}

#marquee-string { padding: 0 .75rem; } /* 流れる画像が左右はみ出ないように設定 */
</style>
