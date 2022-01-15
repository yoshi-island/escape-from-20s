<template>
  <b-container class="eft-escape-from-two-thousands">
    <h3>脱出ページ</h3>
    <b-row>
      <b-col>
        <br><br><br>

        <div id="button-door-closed">
          <p>\ 謎を解いたら来てね /</p>
          <p>
          <font-awesome-icon
          id="escape-button-closed"
          :icon="['fa', 'door-closed']"
          size="5x"
          @click="animateElements('escape-button-closed', 'animate__shakeX')"
          ></font-awesome-icon>
          </p>
        </div>

        <div id="button-door-open">
          <p>\ 脱出する？ /</p>
          <p>
            <b-button
              id="escape-button"
              v-b-modal.escaped-modal
              @click="generateConfetti"
            >
              <font-awesome-icon
              :icon="['fa', 'door-open']"
              size="5x"
              ></font-awesome-icon>
            </b-button>
          </p>
        </div>

        <!-- centered: modalを上部ではなく真ん中に表示 -->
        <!-- ok-only: cancelボタンは表示させない -->
        <b-modal
          id="escaped-modal"
          centered
          ok-only
          hide-footer
          title="脱出成功!!"
        >
          <p>
            おめでとうございます！<br>
            全ての謎をクリアしました！<br>
          </p>

          <div id="twitter-share">
            <a
              id="twitter-share-button"
              class="twitter-share-button"
              :href="twitterShareUrl"
              target="_blank"
            >
                <font-awesome-icon
                id="twitter-icon"
                :icon="['fab', 'twitter']"
                size="2x"
                alt="twitterでシェア"
                ></font-awesome-icon>
            </a>
            <b-tooltip
              target="twitter-icon"
              triggers="hover"
            >
              twitterでシェアする！
            </b-tooltip>
          </div>
          <br>
          <!--
            解説ページへボタンが押されたら
            'to-answer-page'イベントを発行して
            親（EFTMainContent.vue）に渡す
          -->
            <b-button
              @click="$emit('to-answer-page')"
            >
              解説ページへ
            </b-button>

        </b-modal>
        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
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
  BButton,
  BModal,
  BTooltip,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTEscapeFromTwoThousands',
  components: {
    BContainer,
    BRow,
    BCol,
    BButton,
    BModal,
    BTooltip,
  },

  data() {
    return {
      /* twitterShareUrlをtempleteで使うための宣言 */
      twitterShareUrl: '',
    };
  },

  mounted() {
    this.checkAllRiddleCleared();

    /*
      Twitterシェアの設定を定義
    */
    this.twitterShareUrl = 'https://twitter.com/intent/tweet?'
      + 'text=見事脱出成功！｜２０００年からの脱出'
      + '&url=https://yoshi-dev.sakura.ne.jp'
      + '&hashtags=2000年からの脱出,脱出ゲーム';
  },

  methods: {
    /*
      要素を動かす
    */
    animateElements(id, animation) {
      const element = document.getElementById(id);
      element.classList.add('animate__animated');
      element.classList.add(animation);
      /* 再度動かせるように1秒後に停止する */
      setTimeout(() => {
        element.classList.remove('animate__animated');
        element.classList.remove(animation);
      }, 1000);
    },

    /*
      confettiを表示する
    */
    generateConfetti() {
      this.$confetti.start();

      /* 8秒後に停止する */
      setTimeout(() => {
        this.$confetti.stop();
      }, 8000);
    },

    /*
      全ての謎がクリアできたかをチェックして
      脱出ボタンを表示する
      （displayEscapeButton()関数を呼ぶ）
    */
    checkAllRiddleCleared() {
      const firstRiddleClearedCookieValue = Cookies.get('first-riddle-cleared');
      const secondRiddleClearedCookieValue = Cookies.get('second-riddle-cleared');
      const thirdRiddleClearedCookieValue = Cookies.get('third-riddle-cleared');
      const fourthRiddleClearedCookieValue = Cookies.get('fourth-riddle-cleared');
      const fifthRiddleClearedCookieValue = Cookies.get('fifth-riddle-cleared');
      // 全てクリアしているか判定用の変数
      let clearedStatusBit = 0;
      // 謎1をクリアしていればビットを立てる
      if (firstRiddleClearedCookieValue === 'true') {
        clearedStatusBit += 1;
      }
      // 謎2をクリアしていればビットを立てる
      if (secondRiddleClearedCookieValue === 'true') {
        clearedStatusBit += 1;
      }
      // 謎3をクリアしていればビットを立てる
      if (thirdRiddleClearedCookieValue === 'true') {
        clearedStatusBit += 1;
      }
      // 謎4をクリアしていればビットを立てる
      if (fourthRiddleClearedCookieValue === 'true') {
        clearedStatusBit += 1;
      }
      // 謎5をクリアしていればビットを立てる
      if (fifthRiddleClearedCookieValue === 'true') {
        clearedStatusBit += 1;
      }
      /*
        全ての謎をクリアしていたら（全てのビットを足し合わせて5だったら）
        脱出ボタンを表示する（displayEscapeButton()関数を呼び出す）
      */
      if (clearedStatusBit === 5) {
        this.displayEscapeButton();
      }
    },

    /*
      脱出ボタンを表示する
    */
    displayEscapeButton() {
      const elementDoorOpen = document.getElementById('button-door-open');
      const elementDoorClosed = document.getElementById('button-door-closed');
      elementDoorOpen.style.display = 'block';
      elementDoorClosed.style.display = 'none';
    },
  },
};
</script>

<style scaped>
/* 脱出ボタンの設定 */
#button-door-open {
  display: none; /* デフォルトで非表示 */
}
#escape-button {
  margin: auto;
  background-color: transparent;
  border: none;
  color: gray;
}
#escape-button:hover {
  color: #2c3e50;
}
#escape-button-closed {
  margin: auto;
  background-color: transparent;
  border: none;
  color: gray;
}
#escape-button-closed:hover {
  color: #2c3e50;
}

/* confettiをmodalのz-index(1040)より前にする */
#confetti-canvas {
  z-index: 1041;
}

/* twitterシェアボタンtooltip用の余白を空ける */
#twitter-share {
  margin-top: 2em;
}

#escaped-modal {
  text-align: center;
}
.modal-header {
  text-align: center;
}
</style>
