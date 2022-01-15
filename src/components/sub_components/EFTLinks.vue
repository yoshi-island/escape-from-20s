<template>
  <b-container class="eft-links">
      <h3>リンク集</h3>
      <b-row>

        <!-- マウスストーカー -->
        <!--
          spanタグどうしはくっついていないと改行してしまうので
          中途半端なところで改行を入れている
        -->
        <b-col id="mouse-stalker">
          <div>
            <span
            class="kirakira" id="kirakira1">★</span><span
            class="kirakira" id="kirakira2">*</span><span
            class="kirakira" id="kirakira3">+</span><span
            class="kirakira" id="kirakira4">.</span><span
            class="kirakira" id="kirakira5">*</span><span
            class="kirakira" id="kirakira6">.</span>
          </div>
        </b-col>

        <!-- 表 -->
        <!--
          行が選択されたら、onRowHovered関数が実行される
          （モバイルでも一応動く）
          クリックされたらfourthRiddleCleared関数が実行される
        -->
        <b-col>
          <div @click="checkFourthRiddleCleared">
            <b-table
              id="links-table"
              hover
              bordered
              :fields="fields"
              :items="items"
              @row-hovered="onRowHovered"
            >

              <template #cell(link)="data">
                <!--
                  リンクの装飾のためにクラス名をつける
                  styleタグで装飾
                -->
                <!-- セル内でhtmlタグが使えるようにする -->
                <a
                  :href="data.item.link.url"
                  :alt="data.item.link.name"
                  target="_blank"
                  class="link-banner-a"
                >
                  <!--
                    idは、changeBannerColor()とrestoreBannerColor()関数から
                    この要素を呼ぶ際に使っている
                  -->
                  <div
                    class="link-banner"
                    :id="data.item.link.name"
                    @mouseover="changeBannerColor(data.item.link.name)"
                    @mouseleave="restoreBannerColor(data.item.link.name)"
                    @touchstart="changeBannerColor(data.item.link.name)"
                    @touchend="restoreBannerColor(data.item.link.name)"
                  >
                    <div
                      class="link-banner-text"
                      v-html="data.value.name"
                    >
                      <i>{{ data.item.link.name }}</i>
                    </div>
                  </div>
                </a>
              </template>

              <!-- セル内でhtmlタグが使えるようにする -->
              <template #cell(msg)="data">
                <div v-html="data.value">
                  <i>{{ data.item.link.msg }}</i>
                </div>
              </template>

            </b-table>
          </div>
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
  BTable,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTLinks',
  props: {
    /*
      親（App.vue）から受け取った変数mainContentsを
      テンプレートで使えるようにする
    */
    mainContents: String,
  },

  components: {
    BContainer,
    BRow,
    BCol,
    BTable,
  },

  data() {
    return {
      interval_id: null,
      stalker: '',

      /*
        正解の場所をクリックしたかを判別するための変数
        generageMousestalkerPcSub()とgenerageMousestalkerSpSub()
        で使う
      */
      xPos: 0,
      yPos: 0,

      /*
       表の中身
       正解行を選択したか判別のためにindexを定義している
       onRowHovered()関数で使われる
      */
      fields: [
        {
          key: 'link',
          label: '協力サイト様',
        },
        {
          key: 'msg',
          label: '紹介文',
        },
      ],
      items: [
        {
          link: {
            name: 'GIRLY DROP',
            title: 'おしゃれなフリー写真素材｜GIRLY DROP(ガーリードロップ)',
            url: 'https://girlydrop.com/',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: 'とってもおしゃれなフリー画像を配布しているサイト様。<br>'
            + 'ロゴ画像や管理人プロフィール、ギャラリー画像など、'
            + '広く使わせていただきました。',
          index: '01',
        },
        {
          link: {
            name: 'ドコモ絵文字<br>| NTTドコモ',
            title: '作ろうiモードコンテンツ：ドコモ絵文字 | サービス・機能 | NTTドコモ',
            url: 'https://www.nttdocomo.co.jp/service/developer/make/content/pictograph/',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: 'ドコモの絵文字やデコメール画像は、'
            + 'メニューボタンと工事中ページの画像で使わせていただきました。',
          index: '02',
        },
        {
          link: {
            name: 'DOVA-SYNDROME',
            title: 'フリーBGM（音楽素材）無料ダウンロード｜DOVA-SYNDROME',
            url: 'https://dova-s.jp/',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: 'フリー音楽素材の配布サイト様。<br>'
            + '本サイトのBGMに利用しているのは、龍崎一氏のOrangeです。',
          index: '03',
        },
        {
          link: {
            name: 'ぼいさん。',
            title: 'ネット声優のためのボイスサンプル用セリフ・オケ配布サイト　ぼいさん。',
            url: 'http://voicesample.org/',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: 'フリーのセリフ・オケ素材配布サイト様。<br>'
            + '歌詞を合わせて配布しているサイト様は珍しいですね。'
            + 'ギャラリーのポエム画像で使わせていただきました。',
          index: '04',
        },
        {
          link: {
            name: 'パブリック<br>ドメインQ',
            title: ' パブリックドメインQ：著作権フリー画像素材集',
            url: 'https://publicdomainq.net/',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: '3択クイズに正解したらダウンロードができる、'
            + 'ユニークなフリー画像素材配布サイト様。<br>'
            + 'なんとかクイズに正解し、'
            + 'ギャラリー画像として利用させていただきました。',
          index: '05',
        },
        /*
          正解リンクのためurlを指定しない
          （押してもどこにも飛ばない）
          （他のサイトに誘導する仕組みは良くないので）
        */
        {
          link: {
            name: '青空文庫',
            title: '青空文庫　Aozora Bunko',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: '著作権が消滅した文学作品などを掲載しているサイト様。<br>'
            + 'ギャラリーのポエム画像に利用させていただきました。',
          index: '06',
        },
        {
          link: {
            name: 'ギャル文字<br>一括変換装置',
            title: '『ギャル文字一括変換装置』',
            url: 'http://www.gal-moji.com/moji/gyaru_moji_pc_org.asp',
          },
          // 見やすさを考慮し、改行するため+でつなぐ
          msg: '管理人紹介ページで利用しました。<br>'
            + 'ギャル文字を知らない人も懐かしんでいる人も。',
          index: '07',
        },
        /* ページが長くなりすぎるので以下は一旦表示しない */
        /*
        {
          link: {
            name: 'Vue CLI',
            title: 'Vue CLI',
            url: 'https://cli.vuejs.org/',
          },
          msg: '本サイトはVueCLIを利用して作成しています。',
          index: '08',
        },
        {
          link: {
            name: 'BootstrapVue',
            title: 'BootstrapVue',
            url: 'https://bootstrap-vue.org/',
          },
          msg: '本サイトのUI周りはこちらを利用しています。',
          index: '09',
        },
        {
          link: {
            name: 'テックアカデミー',
            title: 'オンラインプログラミングスクール/受講者数No.1|テックアカデミー',
            url: 'https://techacademy.jp/?gclid=CjwKCAjwx8iIBhBwEiwA2quaq2HONQ-tXGAikuWdUWKMrzJ3jHYHcFzFIQBfUq4pNbg_czYfT1rVDBoCursQAvD_BwE',
          },
          msg: 'このスクール様で学んだ成果として本サイトを作成しました。<br>'
            + 'ありがとうございました。',
          index: '10',
        },
        */
      ],
    };
  },

  mounted() {
    /*
      マウスが動いたら
      generageMousestalkerPc()関数を呼び出して
      マウスストーカーを表示
      'mousemove'はPCのみ発動
    */
    document.addEventListener(
      'mousemove',
      this.generageMousestalkerPc,
    );
    /*
      マウスが動いたら
      generageMousestalkerSp()関数を呼び出して
      マウスストーカーを表示
      'touchmove'はPCのみ発動
    */
    document.addEventListener(
      'touchmove',
      this.generageMousestalkerSp,
    );

    /*
      ページが読み込まれたら
      マウスストーカーをキラキラさせる関数を呼び出す
      時間（setInterval）で発火する
    */
    try {
      this.interval_id = this.generateStalkerKiraKira('yellow', 'skyblue', 'springgreen', '500');
    } catch (error) {
      console.log(error);
    }
  },

  methods: {
    /*
      表のリンク先をクリックしたら別タブで開くように設定
    */
    openLinkInNewTab(url) {
      window.open(url, '_blank');
    },

    /*
      正解の行をクリックしたか判別する
    */
    onRowHovered(item) {
      if (item.index === '06') {
        this.changeStalkerStyle();
      }
    },
    /*
      正解の行をクリックしたら、5秒間、
      ストーカーの色とキラキラスピードを変える
      onRowClicked()関数から呼ばれる
    */
    changeStalkerStyle() {
      const changestyle = ['red', 'green', 'blue', '100'];
      const originalstyle = ['yellow', 'skyblue', 'springgreen', '500'];

      /* キラキラのスタイルを変更する */
      clearInterval(this.interval_id); // 一旦今のキラキラを止める
      this.interval_id = this.generateStalkerKiraKira(
        changestyle[0], changestyle[1], changestyle[2], changestyle[3],
      );

      /* 1秒経ったら元に戻す */
      setTimeout(() => {
        clearInterval(this.interval_id); // 今のキラキラを止める
        this.generateStalkerKiraKira( // 色を変える
          originalstyle[0], originalstyle[1], originalstyle[2], originalstyle[3],
        );
      }, 1000);
    },

    /*
      EcventListener'mousemove'で呼ばれる関数
      マウスストーカーを作る（PC）
    */
    /*
      if (this.stalker !== null)で、
      リンク集以外のページでエラーを吐かないようにする（不要かも）
    */
    generageMousestalkerPc(e) {
      this.stalker = document.getElementById('mouse-stalker');
      // console.log('MousestalkerPc is active'); // 開発用：EcventListener'mousemove'が動いているか確認する
      if (this.stalker !== null) {
        window.addEventListener(
          'DOMContentLoaded',
          this.generageMousestalkerPcSub(
            e.clientX,
            e.clientY,
          ),
        );
      }
    },
    /*
      generageMousestalkerPc()関数から呼ばれるサブ関数
      addEventListenerで複数の関数実行できないためまとめる
      x,yの定義（正解判定で使う）と
      defineMouseStalkerTransition()を呼ぶ
    */
    generageMousestalkerPcSub(x, y) {
      this.defineMouseStalkerTransition(x, y);
      this.xPos = x;
      this.yPos = y;
    },
    /*
      EcventListener'touchemove'で呼ばれる関数
      マウスストーカーを作る（SP）
    */
    /*
      if (this.stalker !== null)で、
      リンク集以外のページでエラーを吐かないようにする（不要かも）
    */
    generageMousestalkerSp(e) {
      this.stalker = document.getElementById('mouse-stalker');
      // console.log('MousestalkerSp is active'); // 開発用：EcventListener'touchmove'が動いているか確認する
      if (this.stalker !== null) {
        this.generageMousestalkerSpSub(
          e.changedTouches[0].clientX,
          e.changedTouches[0].clientY,
        );
      }
    },
    /*
      generageMousestalkerSp()関数から呼ばれるサブ関数
      addEventListenerで複数の関数実行できないためまとめる
      x,yの定義（正解判定で使う）と
      defineMouseStalkerTransition()を呼ぶ
    */
    generageMousestalkerSpSub(x, y) {
      this.defineMouseStalkerTransition(x, y);
      this.xPos = x;
      this.yPos = y;
    },
    /*
      マウスストーカーをポインタの部分へ動かす関数
      generageMousestalkerSp()とgenerageMousestalkerPc()の関数で呼ばれる
    */
    defineMouseStalkerTransition(x, y) {
      const targetX = x;
      const targetY = y;
      this.stalker.style.transform = `translate(${targetX}px, ${targetY}px)`;
    },

    /*
      マウスストーカーのキラキラ処理
      speedはキラキラするスピード（string, ms）
    */
    generateStalkerKiraKira(color1, color2, color3, speed) {
      const clr1 = color1;
      const clr2 = color2;
      const clr3 = color3;
      const kira1 = document.getElementById('kirakira1');
      const kira2 = document.getElementById('kirakira2');
      const kira3 = document.getElementById('kirakira3');
      const kira4 = document.getElementById('kirakira4');
      const kira5 = document.getElementById('kirakira5');
      const kira6 = document.getElementById('kirakira6');
      const spd = speed;
      let flag = 1;
      /*
        画面推移して、遅れて発生するchangeStalkerStyle()のイベントが
        removeEventListener()によって止められるまでの
        「TypeError: Cannot read property 'style' of null」を回避するため
        if (kira5 !== null)を入れている
      */
      let returnValue;
      if (kira5 !== null) {
        this.interval_id = setInterval(() => {
          // console.log(`kirakira #${this.interval_id} is active`); // 開発用：余計なiterval止め忘れ防止
          if (flag === 1) {
            kira5.style.color = clr1;
            kira1.style.color = clr2;
            kira3.style.color = clr3;
            flag = 2;
          } else if (flag === 2) {
            kira6.style.color = clr1;
            kira2.style.color = clr2;
            kira4.style.color = clr3;
            flag = 3;
          } else if (flag === 3) {
            kira1.style.color = clr1;
            kira3.style.color = clr2;
            kira5.style.color = clr3;
            flag = 4;
          } else if (flag === 4) {
            kira2.style.color = clr1;
            kira4.style.color = clr2;
            kira6.style.color = clr3;
            flag = 5;
          } else if (flag === 5) {
            kira3.style.color = clr1;
            kira5.style.color = clr2;
            kira1.style.color = clr3;
            flag = 6;
          } else if (flag === 6) {
            kira4.style.color = clr1;
            kira6.style.color = clr2;
            kira2.style.color = clr3;
            flag = 1;
          }
        }, spd);
        returnValue = this.interval_id;
      } else { // 画面推移してchangeStalkerStyle()発生している間はここに引っかかる
        returnValue = '';
      }
      return returnValue;
    },

    /*
      マウスストーカー用のイベントリスナーを
      他のメインコンテンツページと最初からボタンが呼ばれたら削除する
      親要素（App.vue > EFTMainContent.vue）からrefで呼ばれる
    */
    removeEventListener() {
      // PCでのマウスストーカー(mousemoveイベント)を止める
      try {
        document.removeEventListener(
          'mousemove',
          this.generageMousestalkerPc,
        );
      } catch (error) {
        console.error(error);
      }
      // SPでのマウスストーカー(touchmoveイベント)を止める
      try {
        document.removeEventListener(
          'touchmove',
          this.generageMousestalkerSp,
        );
      } catch (error) {
        console.error(error);
      }
      // マウスストーカーのキラキラ処理を止める
      /*
        changeStalkerStyle()関数が呼ばれて数秒後に発火するイベントも止めたいので
        4秒後に止める処理を発火する
      */
      setTimeout(() => {
        try {
          clearInterval(this.interval_id);
        } catch (error) {
          console.error(error);
        }
      }, 4000);
    },

    /*
      正解のセルがクリックされたかを判断する
      @row-clickedで表がクリックされたかを拾い、
      正解のボタンが押されたかを判別し、
      正解であればfourthRiddleCleared()関数に渡す
      （v-tableにセルを選択する機能はないのでこのやり方）
    */
    checkFourthRiddleCleared() {
      // カーソルの位置を取得
      const pointerX = this.xPos;
      const pointerY = this.yPos;

      // 正解のバナーの要素を取得（IDをつけるのが難しかったので番号[5]で指定）
      const targetElement = document.getElementsByClassName('link-banner')[5];
      const targetRect = targetElement.getBoundingClientRect();
      const targetLeft = window.pageXOffset + targetRect.left;
      const targetRight = window.pageXOffset + targetRect.right;
      const targetTop = targetRect.top;
      const targetBottom = targetRect.bottom;

      if (pointerX >= targetLeft && pointerX <= targetRight) {
        if (pointerY >= targetTop && pointerY <= targetBottom) {
          this.fourthRiddleCleared();
        }
      }
    },

    /*
      4つ目の謎がクリアされたら呼ばれる関数
    */
    fourthRiddleCleared() {
      this.$emit('fourth-riddle-cleared');
      Cookies.set('fourth-riddle-cleared', 'true', { expires: 1 });
    },

    /*
      バナーの上にマウスが乗ったら色を変える
      バナーの上からマウスが離れたら色を戻す
      （hoverがbuildするとうまく動かなかったのでこちらで対処）
      .link-bannerの、@mouseoverと@mouseleaveから呼ばれる
    */
    changeBannerColor(bannertext) {
      const targetElement = document.getElementById(bannertext);
      targetElement.style.borderColor = 'deeppink mediumaquamarine deepskyblue darkmagenta';
    },
    restoreBannerColor(bannertext) {
      const targetElement = document.getElementById(bannertext);
      targetElement.style.borderColor = 'lightpink aquamarine skyblue magenta';
    },

  },
};
</script>

<style scoped>

/* マウスストーカーの設定 */
/*
  translate要素をgenerageMousestalkerPc()と
  generageMousestalkerSp()関数で追加している
*/
#mouse-stalker {
  pointer-events: none;
  position: fixed;
  top: -8px;
  left: -8px;
  width: 16px;
  height: 16px;
  transform: translate(0,0);
  transition: transform 0.2s;
  transition-timing-function: ease-out;
  z-index: 999; /* 最前面に表示する */
}

.kirakira {
  display: inline;
  font-size: 2em;
  color: yellow;
}

.kirakira1, .kirakira2, .kirakira3, .kirakira4, .kirakira5, .kirakira6 {
  pointer-events: none;
  position: fixed;
  top: -8px;
  left: -8px;
  width: 16px;
  height: 16px;
  transform: translate(0,0);
  transition: transform 0.2s;
  transition-timing-function: ease-out;
  z-index: 999; /* 最前面に表示する */
}

.table{
  background: rgba(255,255,255,0.5); /* 半透明 */
}

/*
  協力サイト様のLink部分のセルを指定
*/
/* 文字のリンクのデフォルト装飾を消す */
.link-banner-a {
  text-decoration: none;
  color: #2c3e50;
}
.link-banner {
  width: 10em;
  height: 5em;
  border: 1px solid gray;
  border-width: 10px;
  background-color: pink;
  border-color: lightpink aquamarine skyblue magenta;
  position: relative; /* .link-banner-text中央配置するための設定 */
}
/* テキストを上下中央配置させる */
.link-banner-text {
  position:absolute;
  top: 50%;
  left: 50%;
  transform:translate(-50%,-50%);
  width: 100%;
}

/*
  hoverがbuildするとうまく動かなかったので
  @mouseover／@mouseleave=で対処する
*/
/*
.link-banner:ontouchstart {
  background-color: pink;
  border-color: deeppink mediumaquamarine deepskyblue darkmagenta;
}
.link-banner:hover {
  background-color: pink;
  border-color: deeppink mediumaquamarine deepskyblue darkmagenta;
}
*/
</style>
