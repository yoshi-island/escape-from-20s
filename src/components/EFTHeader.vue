<template>
  <b-container class="eft-header">
      <b-row>
          <b-col>
            <b-button
              id="hint-button"
              v-b-modal.hint-modal
              @click="generageHintContents()"
            >
              <div
                id="hint-button-text"
              >ヒント</div>
            </b-button>
            <b-modal
              id="hint-modal"
              centered
              title="ヒント"
              ok-only
            >{{ hintContents }}</b-modal>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BButton,
  BModal,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTHeader',
  components: {
    BContainer,
    BRow,
    BCol,
    BButton,
    BModal,
  },

  data() {
    return {
      /*
        ヒントの内容の初期値
        generageHintContents()で生成される
      */
      hintContents: '',
      firstRiddleHintContent: '「工事中」ページの中をよーく見て',
      secondRiddleHintContent: '「管理人について」ページで、順番に二つの色を押そう。\n「好き」の項目を解読するとわかるかも',
      thirdRiddleHintContent: '「ギャラリー」ページを見ながら\nサイドバーの音楽を再生してみよう',
      fourthRiddleHintContent: '「リンク集」ページに入ると\nついてくる星の色に注目してみて',
      fifthRiddleHintContent: '「BBS」ページでは何を書き込めばいいだろう。\nコンテンツの上に流れるメッセージを読んでみて',
      finalRiddleHintContent: 'クリア目前！「脱出ページ」から脱出しよう',
    };
  },

  methods: {
    /*
      ヒントボタンが押されたら呼ばれる関数
      進捗状況に合わせてヒントの内容を表示する
    */
    generageHintContents() {
      const firstRiddleClearedCookieValue = Cookies.get('first-riddle-cleared');
      const secondRiddleClearedCookieValue = Cookies.get('second-riddle-cleared');
      const thirdRiddleClearedCookieValue = Cookies.get('third-riddle-cleared');
      const fourthRiddleClearedCookieValue = Cookies.get('fourth-riddle-cleared');
      const fifthRiddleClearedCookieValue = Cookies.get('fifth-riddle-cleared');
      /* １つ目の謎がクリアできていない場合、１つ目の謎のヒントを表示する */
      if (firstRiddleClearedCookieValue !== 'true') {
        this.hintContents = this.firstRiddleHintContent;
      /* 全ての謎がクリアできている場合、脱出ボタンへの行き方を表示する */
      } else if (
        secondRiddleClearedCookieValue === 'true'
        && thirdRiddleClearedCookieValue === 'true'
        && fourthRiddleClearedCookieValue === 'true'
        && fifthRiddleClearedCookieValue === 'true'
      ) {
        this.hintContents = this.finalRiddleHintContent;
      /* そうでない場合、２ー５までの謎を進捗状況に応じてランダムに表示する */
      } else {
        /*
          進捗状況をCookieから調べて
          クリアできていない謎リスト（progressFlagList）を作る
        */
        const progressFlagList = [];
        if (secondRiddleClearedCookieValue !== 'true') {
          progressFlagList.push('2');
        }
        if (thirdRiddleClearedCookieValue !== 'true') {
          progressFlagList.push('3');
        }
        if (fourthRiddleClearedCookieValue !== 'true') {
          progressFlagList.push('4');
        }
        if (fifthRiddleClearedCookieValue !== 'true') {
          progressFlagList.push('5');
        }
        /*
          progressFlagListの中からランダムで一つ選ぶ
        */
        const hintConsentsKey = progressFlagList[
          Math.floor(Math.random() * progressFlagList.length)
        ];
        /*
          選んだ数字をもとにコンテンツを表示
        */
        if (hintConsentsKey === '2') {
          this.hintContents = this.secondRiddleHintContent;
        } else if (hintConsentsKey === '3') {
          this.hintContents = this.thirdRiddleHintContent;
        } else if (hintConsentsKey === '4') {
          this.hintContents = this.fourthRiddleHintContent;
        } else {
          this.hintContents = this.fifthRiddleHintContent;
        }
      }
    },
  },
};
</script>

<style scoped>
/*
  ヒントボタンの設定
*/
#hint-button {
  position: fixed;
  z-index: 1;
  right: 0px;
  top: 0px;
  width: 50px;
  height: 40px;
  padding: 0px;
  margin: 0px;
  color: gray;
  background: rgba(255,240,245,0.5);
  border: 0px;
  border-bottom-left-radius: 100%;
  box-shadow: 0 0 .3em .1em rgba(0, 0, 0, .3);
}
#hint-button-text {
  transform: translate(5px, -8px);
  font-size: 12px;
}
/*
  PCだけHover設定（SPだと戻らなくなるので設定しない）
*/
@media screen and (min-width: 769px) {
  #hint-button:hover {
    transform: scale(1.2);
  }
}
</style>
