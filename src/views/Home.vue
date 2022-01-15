<template>
  <div id="home" class="animate__animated animate__fadeIn">

    <b-container id="wholepage">

      <!-- ヘッダー -->
      <b-row id="eft-header">
        <b-col>
          <EFTHeader></EFTHeader>
        </b-col>
      </b-row>

      <!-- ロゴ -->
      <b-row id="eft-logo">
        <b-col>
          <EFTLogo
            @logo-clicked="defineMainContents('home-contents')"
          ></EFTLogo>
        </b-col>
      </b-row>

      <b-row id="eft-contents">
        <!-- メニュー（PC） -->
        <!-- SPでは非表示になる -->
        <b-col md="4" id="eft-menu-pc">
          <!--
            選択したメニューを識別するイベントが発行されたら
            それぞれ指定の関数を実行する
          -->
          <!--
            変数を格納（bind（:））してEFTMainMenu.vueに渡す
            謎1がクリアされたらメニューの表示を変えるため
          -->
          <EFTMenu
            ref="eftmenupc"
            @home-contents="defineMainContents('home-contents')"
            @under-constraction="defineMainContents('under-constraction')"
            @about-author="defineMainContents('about-author')"
            @garally="defineMainContents('garally')"
            @links="defineMainContents('links')"
            @bbs="defineMainContents('bbs')"
            @escape-from-two-thousands="defineMainContents('escape-from-two-thousands')"
            :firstRiddleCleared=this.firstRiddleCleared
            :firstRiddleClearedCookieValue=this.firstRiddleClearedCookieValue
          ></EFTMenu>
        </b-col>

        <!--
          SP（eft-manu-pc非表示）では、横幅いっぱいに使うようにmdなどをここでは指定しない
        -->
        <b-col id="eft-main-sub-contents">
          <!-- コンテンツ（上段） -->
          <!-- メニューにより表示内容変更されないコンテンツ -->
          <!--
            EFTSubContent.vueの関数を使うためにref値を定義する
            （changeHeartColorOfSubcontent()関数で利用する）
          -->
          <EFTSubContent
            ref="eftsubcontent"
            id="eft-sub-content"
          ></EFTSubContent>

          <!-- コンテンツ（下段） -->
          <!-- メニューにより表示内容変更されるコンテンツ -->
          <!--
            どのメニューが選択されたか入る変数mainContentsの値を
            mainContents変数に格納（bind（:））して
            EFTMainContent.vueに渡す
            選択されたメニューに応じてメインコンテンツの表示を変えるため
          -->
          <!--
            子（EFTMainContent.vue）でイベント発行されたら
            （各謎をクリアしたら）関数を実行する
            （ハートの色付けをする）
          -->
          <EFTMainContent
            id="eft-main-content"
            ref="eftmaincontent"
            :mainContents=this.mainContents
            @first-riddle-cleared="riddleClearedStatusChangeTasks('one', 'true')"
            @second-riddle-cleared="riddleClearedStatusChangeTasks('two', 'true')"
            @third-riddle-cleared="riddleClearedStatusChangeTasks('three', 'true')"
            @fourth-riddle-cleared="riddleClearedStatusChangeTasks('four', 'true')"
            @fifth-riddle-cleared="riddleClearedStatusChangeTasks('five', 'true')"
            @to-answer-page="showAnswerPage"
          ></EFTMainContent>
        </b-col>
      </b-row>

      <!-- メニュー（SP） -->
      <!-- PCでは非表示になる -->
      <b-row id="eft-menu-sp">
        <b-col>
          <!--
            選択したメニューを識別するイベントが発行されたら
            それぞれ指定の関数を実行する
          -->
          <!--
            変数を格納（bind（:））してEFTMainMenu.vueに渡す
            謎1がクリアされたらメニューの表示を変えるため
          -->
          <EFTMenuSp
            ref="eftmenusp"
            @home-contents="defineMainContents('home-contents')"
            @under-constraction="defineMainContents('under-constraction')"
            @about-author="defineMainContents('about-author')"
            @garally="defineMainContents('garally')"
            @links="defineMainContents('links')"
            @bbs="defineMainContents('bbs')"
            @escape-from-two-thousands="defineMainContents('escape-from-two-thousands')"
            :firstRiddleCleared=this.firstRiddleCleared
            :firstRiddleClearedCookieValue=this.firstRiddleClearedCookieValue
          ></EFTMenuSp>
        </b-col>
      </b-row>

      <!-- フッター -->
      <b-row id="eft-footer">
        <b-col>
          <EFTFooter></EFTFooter>
        </b-col>
      </b-row>

      <!-- コントロール領域 -->
      <!--
        最初からボタンが押されたらeftResumed()関数を呼び出す
      -->
      <b-row id="eft-control">
        <b-col>
          <EFTControl
            @eft-resumed="eftResumed()"
            @eft-giveup="showAnswerPage()"
          ></EFTControl>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>

/* import Bootstrap */
import {
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

/* import components */
/*
  MenuはPCとSPでスクロール設定など異なるのでで分ける
*/
import EFTHeader from '@/components/EFTHeader.vue';
import EFTLogo from '@/components/EFTLogo.vue';
import EFTSubContent from '@/components/EFTSubContent.vue';
import EFTMainContent from '@/components/EFTMainContent.vue';
import EFTFooter from '@/components/EFTFooter.vue';
import EFTMenu from '@/components/EFTMenu.vue';
import EFTMenuSp from '@/components/EFTMenuSp.vue';
import EFTControl from '@/components/EFTControl.vue';

export default {
  name: 'Home',
  components: {
    EFTHeader,
    EFTLogo,
    EFTSubContent,
    EFTMainContent,
    EFTFooter,
    EFTMenu,
    EFTMenuSp,
    EFTControl,
    BContainer,
    BRow,
    BCol,
  },

  data() {
    return {
      /*
        解説ページを表示するかどうかの変数
        templeteで呼ばれる
      */
      eftCleared: 'false',

      /*
        どのメニューが選択されたか入る変数mainContentsを
        テンプレートで使えるようにする
      */
      mainContents: this.mainContents,

      /*
        謎がクリアされたか入る変数を
        テンプレートで使えるようにする
      */
      firstRiddleCleared: this.firstRiddleCleared,
      secondRiddleCleared: this.secondRiddleCleared,
      thirdRiddleCleared: this.thirdRiddleCleared,
      fourthRiddleCleared: this.fourthRiddleCleared,
      fifthRiddleCleared: this.fifthRiddleCleared,

      /*
        謎がクリアされたかのCookieの値が入る変数を
        テンプレートで使えるようにする
      */
      firstRiddleClearedCookieValue: this.firstRiddleClearedCookieValue,

      /*
        linksページが開いているかを判断する変数
        mouseStalkerControl()関数のマウスストーカーオンオフ機能で使われる
      */
      linkspageactiveflag: 'no',

    };
  },

  /* 本コンポーネントが読み込まれるたびに実行される関数 */
  mounted() {
    /*
      Cookieの'first-riddle-cleared'の値が'true'であれば
      firstRiddleClearedCookieValueの値を'true'にして
      隠しメニューを表示されたままにする
      （すでにクリアしているが画面をリロードしてしまったケースを救う）
    */
    /* EFTMenu.vueでも記載されているがこちらも必要 */
    this.firstRiddleClearedCookieValue = this.checkRiddleCookie('first-riddle-cleared');
  },

  methods: {
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

    /*
      最初からボタンが押されたら実行する関数
      // 最初からボタンが押されたらHomeコンテンツを表示する
      （隠しメニューのコンテンツが表示されたままになる状態を回避する）
      謎がクリアされた時の処理関数を呼び出す
      マウスストーカーのイベントをオフにする
      オープニングページに遷移する
    */
    eftResumed() {
      // this.defineMainContents('home-contents');
      this.riddleClearedStatusChangeTasks('one', 'false');
      this.riddleClearedStatusChangeTasks('two', 'false');
      this.riddleClearedStatusChangeTasks('three', 'false');
      this.riddleClearedStatusChangeTasks('four', 'false');
      this.riddleClearedStatusChangeTasks('five', 'false');
      this.mouseStalkerControl('home-contents');
      this.$router.push('/opening', () => {});
    },

    /*
      クリア、または諦めるボタンが押されたら実行する関数
      showAnswerPageの値をfalseにして解説ページを表示する
      マウスストーカーのイベントをオフにする
    */
    showAnswerPage() {
      this.riddleClearedStatusChangeTasks('one', 'false');
      this.riddleClearedStatusChangeTasks('two', 'false');
      this.riddleClearedStatusChangeTasks('three', 'false');
      this.riddleClearedStatusChangeTasks('four', 'false');
      this.riddleClearedStatusChangeTasks('five', 'false');
      Cookies.remove('first-riddle-cleared');
      Cookies.remove('second-riddle-cleared');
      Cookies.remove('third-riddle-cleared');
      Cookies.remove('fourth-riddle-cleared');
      Cookies.remove('fifth-riddle-cleared');
      // links以外か、しか見ていないので何でもよい、一旦'answer-page'
      this.mouseStalkerControl('answer-page');
      this.$router.push('/answer', () => {});
      this.eftCleared = 'true'; // 使っていない変数
    },

    /*
      メニューが選択されたら実行される関数
      （1）マウスストーカーのイベントのオンオフを切り替える
      （マウスストーカー自体はこの処理が無くてもコンテンツが変わったら消えるが、
      イベントが動いたままなのでこの処理で止める）
      （2）mainContents変数にどのメニューが選択されたか変数を渡す
    */
    defineMainContents(selectedMenu) {
      this.mouseStalkerControl(selectedMenu);
      this.mainContents = selectedMenu;
    },

    /*
      （1）linksがクリックされた後（this.linkspageactiveflag = 'yes'）に
      他のメニューに移ったらマウスストーカーのイベントを停止する
      （子要素EFTMainContent.vue > EFTLinks.vueの関数を呼び出す）
      defineMainContents()関数とeftResumed()関数から呼ばれる
    */
    mouseStalkerControl(selectedMenu) {
      if (selectedMenu === 'links') {
        this.linkspageactiveflag = 'yes';
        // Cookies.set('links-page-is-open', 'true', { expires: 1 });
      } else if (this.linkspageactiveflag !== 'links' && this.linkspageactiveflag !== 'no') {
        this.linkspageactiveflag = 'no';
        this.$refs.eftmaincontent.removeEventListener();
        // Cookies.set('links-page-is-open', 'false', { expires: 1 });
      }
    },

    /*
      謎がクリアされたら実行されるタスクまとめ
      各関数を呼び出す
    */
    riddleClearedStatusChangeTasks(riddleid, status) {
      /*
        謎1がクリアされた時の処理
        謎1のみ隠しメニュー表示のための処理が入る
      */
      if (riddleid === 'one') {
        // 変数にステータスを格納 // fixme：どこで使っているか確認する
        this.firstRiddleCleared = status;
        // 隠しメニュー表示のための処理
        this.$refs.eftmenupc.controlHiddenMenu(status);
        this.$refs.eftmenusp.controlHiddenMenu(status);
        // ハートに色をつけるための処理
        const color = this.defineHeartColor(status);
        this.changeHeartColorOfSubcontent('heart-one', color);
      /*
        謎2がクリアされた時の処理
      */
      } else if (riddleid === 'two') {
        // 変数にステータスを格納
        this.secondRiddleCleared = status;
        // ハートに色をつけるための処理
        const color = this.defineHeartColor(status);
        this.changeHeartColorOfSubcontent('heart-two', color);
      /*
        謎3がクリアされた時の処理
      */
      } else if (riddleid === 'three') {
        // 変数にステータスを格納
        this.thirdRiddleCleared = status;
        // ハートに色をつけるための処理
        const color = this.defineHeartColor(status);
        this.changeHeartColorOfSubcontent('heart-three', color);
      /*
        謎4がクリアされた時の処理
      */
      } else if (riddleid === 'four') {
        // 変数にステータスを格納
        this.thirdRiddleCleared = status;
        // ハートに色をつけるための処理
        const color = this.defineHeartColor(status);
        this.changeHeartColorOfSubcontent('heart-four', color);
      /*
        謎5がクリアされた時の処理
      */
      } else if (riddleid === 'five') {
        // 変数にステータスを格納
        this.fifthRiddleCleared = status;
        // ハートに色をつけるための処理
        const color = this.defineHeartColor(status);
        this.changeHeartColorOfSubcontent('heart-five', color);
      }
    },
    /*
      ステータスからハートの色を決める関数
      statusが'true'ならred、'false'ならgray
      上のriddleClearedStatusChangeTasks()で呼び出される
    */
    defineHeartColor(status) {
      let color;
      if (status === 'true') {
        color = 'red';
      } else {
        color = 'gray';
      }
      return color;
    },
    /*
      EFTSubContent.vueのchangeColor()をrefを使って呼び出し
      ハートの色を変える関数
      上のriddleClearedStatusChangeTasks()で呼び出される
    */
    changeHeartColorOfSubcontent(id, color) {
      this.$refs.eftsubcontent.changeColor(id, color);
    },

  },

};
</script>

<style>
/* フォント */
@import url('https://fonts.googleapis.com/css2?family=DotGothic16&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap'); /* modalだけこのフォント */

/* 開発用: 枠線をつける */
/*
#home > .container > .row > div > div {
  border-color: white;
  border-style: solid;
  border-width: .1em;
}
*/

html {
  /* footer下などが白くなってしまうため定義 */
  background-color: #f4c2c2; /* Baby pink */
}

/* 脱出ページ */
#home {
  font-family: 'DotGothic16', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #f4c2c2; /* Baby pink */
  overflow: hidden; /* 右側に余白ができる対策 */
}

/* container配下のdiv要素について間が空かないようにする */
.container > div > div {
  margin: 0;
  padding: 0;
}

/*
  PCの場合はSP用のメニュー非表示
  ※SPの場合メニューをFooter直前に表示したいためこの方法
*/
#eft-menu-sp {
  display: none;
}

/* Controlボタンがコ��テンツと被らないようにする */
#wholepage {
  margin: 0 auto 5em auto;
}

.col {
  margin: auto;
}

/*
  Safariでの表示崩れ対応
  Safariでは幅1216px未満だとコンテンツがメニューの下に行ってしまうので
  ブレークポイントを変える
*/
@media screen and (max-width: 1215px) and (-webkit-min-device-pixel-ratio: 0) {
  _::-webkit-full-page-media, _:future, :root #eft-menu-pc {
    display: none;
  }
  _::-webkit-full-page-media, _:future, :root #eft-menu-sp {
    display: block;
  }
}

/* SP設定 */
/* 480pxだと見づらいので768px */
/*
  ここを変えるときは
  EFTLinks.vueのjudgePcOrSp()関数
  EFTControl.vueのstyleの上へボタン表示設定
  も変える
*/
@media screen and (max-width: 768px) {

  /*
    SPの場合はPC用メニュー非表示＆SP用メニュー表示
    ※SPの場合メニューをFooter直前に表示したいためこの方法
  */
  #eft-menu-pc {
    display: none;
  }
  #eft-menu-sp {
    display: block;
  }
}

/*
  modal設定
*/
.modal-content {
  font-family: 'Kiwi Maru', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: rgba(255,240,245,0.9);
}
.modal-content .btn {
  margin: 0 10px 0 10px;
  border: transparent;
  background-color: #2c3e50;
  color: white;
}
.modal-footer {
  display: block; /* ボタンを中央に配置 */
}
.modal-header {
  text-align: center;
}
</style>
