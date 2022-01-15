<template>
  <div id="opening">
    <vue-progress-bar></vue-progress-bar>

    <b-button
      id="skip-button"
      @click="skipOpening"
    >
      <div>skip</div>
      <font-awesome-icon
      id="forward-icon"
      :icon="['fas', 'forward']"
      size="2x"
      ></font-awesome-icon>
    </b-button>

    <div id="openingOne">
      <div
        id="line1"
        class="animate__animated animate__fadeIn"
        hidden
       >かつて少女だった</div>
      <div
        id="line2"
        class="animate__animated animate__fadeIn"
        hidden
      >全ての大人たちへ捧ぐ</div>

      <!-- SPの場合はタイトルの改行の位置を変える -->
      <div
        id="title"
        class="animate__animated animate__fadeInUp animate__slower"
        hidden
      >2000年からの脱出</div>
      <br>
      <div
        id="title-sp"
        class="animate__animated animate__fadeInUp animate__slower"
        hidden
      >2000年から<br>の脱出</div>
      <br>

      <font-awesome-icon
      class="animate__animated animate__fadeIn"
      id="door-icon-closed"
      :icon="['fas', 'door-closed']"
      size="3x"
      hidden
      ></font-awesome-icon>

      <font-awesome-icon
      id="door-icon-open"
      :icon="['fas', 'door-open']"
      size="3x"
      hidden
      ></font-awesome-icon>
    </div>

    <div id="openingTwo" hidden>
      <h1>遊び方</h1>
      <p>
        本ページは<span class="emphasized-letter-big">「脱出ゲーム」</span>になっています。<br>
        あなたは2000年ごろのWebページに閉じ込められました。<br>
        5つの謎をクリアして現代へ脱出してください。<br>
      </p>
      <p>
        ※ 途中で現代へ戻る場合は、右下に表示される「諦める」ボタンをクリックしてね。<br>
        解説ページが表示されるよ。<br>
      </p>
    </div>

  </div>
</template>

<script>

/* import Bootstrap */
import {
  BButton,
} from 'bootstrap-vue';

export default {
  name: 'Opening',
  components: {
    BButton,
  },

  data() {
    return {
      /*
        オープニングページを開くか判定する変数
      */
      showOpeningPage: true,
    };
  },

  created() {
    /* progressbarをスタートと設定 */
    this.$Progress.setTransition({
      speed: '18.0s',
      opacity: '30.0s',
      termination: 18000,
    });
    this.$Progress.start();
  },

  mounted() {
    const elementLine1 = document.getElementById('line1');
    const elementLine2 = document.getElementById('line2');
    const elementTitle = document.getElementById('title');
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    const elementTitleSp = document.getElementById('title-sp');
    const elementDoorIconClosed = document.getElementById('door-icon-closed');
    const elementDoorIconOpen = document.getElementById('door-icon-open');
    const elementOpeningOne = document.getElementById('openingOne');
    const elementOpeningTwo = document.getElementById('openingTwo');

    setTimeout(() => {
      this.$Progress.set(30);
      elementLine1.removeAttribute('hidden');
    }, 1000);

    setTimeout(() => {
      elementLine2.removeAttribute('hidden');
    }, 2000);

    /*
      SPの場合はタイトルの改行の位置を変える
    */
    setTimeout(() => {
      if (mediaQuery.matches) {
        elementTitleSp.removeAttribute('hidden');
      } else {
        elementTitle.removeAttribute('hidden');
      }
    }, 3500);

    setTimeout(() => {
      elementDoorIconClosed.removeAttribute('hidden');
    }, 6500);

    setTimeout(() => {
      elementDoorIconClosed.setAttribute('hidden', 'true');
      elementDoorIconOpen.removeAttribute('hidden');
    }, 7500);

    setTimeout(() => {
      elementOpeningOne.setAttribute('hidden', 'true');
      elementOpeningTwo.removeAttribute('hidden', 'hidden');
    }, 9500);

    setTimeout(() => {
      /* progressbarをStop */
      this.$Progress.finish();
      /* ホーム画面へ飛ぶ */
      this.$router.push('/', () => {});
    }, 24000);
  },

  methods: {
    /* Skipボタンが押されたら呼ばれる関数 */
    skipOpening() {
      /* progressbarをStop */
      this.$Progress.finish();
      /* ホーム画面へ飛ぶ */
      this.$router.push('/', () => {});
    },

  },
};
</script>

<style scoped>

/* フォント */
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap');
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');

/* ==============================
  全体の設定
============================== */
html {
  /* footer下などが白くなってしまうため定義 */
  background-color: silver;
}
#opening {
  font-family: 'Kiwi Maru', serif;
  text-align: center;
  color: #2c3e50;
  background-color: #f4c2c2;
  overflow: hidden; /* 右側に余白ができる対策 */
  margin-top: 7em;
}

/* 余計な余白を削除 */
.container {
  padding: 0;
}
.col {
  padding: 0;
}

/* ==============================
  文字設定
============================== */
#line1 {
  font-size: 30px;
}
#line2 {
  font-size: 30px;
}
#title {
  font-size: 50px;
  font-family: 'DotGothic16', sans-serif;
}
#title-sp {
  font-size: 50px;
  font-family: 'DotGothic16', sans-serif;
}
#openingTwo {
  font-family: 'DotGothic16', sans-serif;
}
.emphasized-letter-big {
  font-size: 20px;
  color: red;
}

/* ==============================
  固定スキップボタン
============================== */
#skip-button {
  position: fixed;
  bottom: 0;
  right: 0;
  padding: 0;
  margin: 0 10px 5px 0;
  color: gray;
  background: transparent;
  border: transparent;
}
</style>
