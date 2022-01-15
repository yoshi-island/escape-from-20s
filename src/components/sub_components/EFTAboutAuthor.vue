<template>
  <b-container class="eft-about-author">
    <b-row>
      <b-col>
        <h3>管理人について</h3>
        <div>

          <img
            src="@/assets/about-author.jpg"
            alt="プロフィール画像"
            width=30%
          >

          <b-list-group>
            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: gray"
            >
              <!--
                hoverがうまく動かないので、mouseoverr／mouseleaveで定義
                一つ上のb-list-group-itemの階層で
                mouseover／mouseleaveを呼び出すと子要素divにも適用されて
                2回呼び出されてしまうので、divの方に設定する
              -->
              <span
                class="item"
                @click="otherClick"
                id="itemone"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                管理人： ょ  ι
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: fuchsia"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemtwo"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                誕生日：｜qqｏ年ﾌ月｜日
              </span>
            </b-list-group-item>

            <!-- クリックされたらsecondClick関数が実行される -->
            <b-list-group-item
              style="color: purple"
            >
              <span
                class="item"
                @click="secondClick"
                id="itemthree"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                血液型：B型
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: green"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemfour"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                生息地： 木黄  シ兵
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: orange"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemfive"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                動物占い： ∧° ヵ″ 廾  ｽ
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: red"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemsix"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                職業：女 孑 高生
              </span>
            </b-list-group-item>

            <!-- クリックされたらfirstClick関数が実行される -->
            <b-list-group-item
              style="color: blue"
            >
              <span
                class="item"
                @click="firstClick"
                id="itemseven"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                好き： 了  才 、 ン欠  ﾚﾆ  厶  ﾗ  廾  ≠  ｶゞ  女子  ､ｷ
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: fuchsia"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemeight"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                嫌い： 免力 強
              </span>
            </b-list-group-item>

            <!-- クリックされたらotherClick関数が実行される -->
            <b-list-group-item
              style="color: gray"
            >
              <span
                class="item"
                @click="otherClick"
                id="itemnine"
                @mouseover="changeItemStyle($event)"
                @mouseleave="restoreItemStyle($event)"
                @touchstart="changeItemStyle($event)"
                @touchend="restoreItemStyle($event)"
                @mousedown="changeItemBold($event)"
                @mouseup="restoreItemBold($event)"
              >
                ょ з ι く ぉ 原頁 ιゝ ι ま す 。
              </span>
            </b-list-group-item>
          </b-list-group>
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
  BListGroup,
  BListGroupItem,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTAboutAuthor',
  components: {
    BContainer,
    BRow,
    BCol,
    BListGroup,
    BListGroupItem,
  },

  methods: {

    /*
      firstClick関数の次にsecondClick関数が実行されたら
      （青いテキストの次に紫のテキストがクリックされたら）
      'second-riddle-cleared'イベントを発行して
      親（EFTMainContent.vue）に渡す
      Cookieの値も更新する
      firstClickの後に他の要素がクリックされたらリセットする
      （otherClick()関数）
    */
    firstClick() {
      this.firstclicked = 'true';
      return this.firstclicked;
    },
    otherClick() {
      this.firstclicked = 'false';
      return this.firstclicked;
    },
    secondClick() {
      if (this.firstclicked === 'true') {
        this.secondRiddleCleared();
      }
    },
    secondRiddleCleared() {
      this.$emit('second-riddle-cleared');
      Cookies.set('second-riddle-cleared', 'true', { expires: 1 });
    },

    /*
      テキストがクリックされたら太字にする
      （:activeがbuildするとうまく動かなかったのでこちらで対処）
      b-list-group-itemの、@mousedownと@mouseupから呼ばれる
    */
    changeItemBold(event) {
      const targetElement = document.getElementById(event.target.id);
      targetElement.style.fontWeight = 'bold';
    },
    restoreItemBold(event) {
      const targetElement = document.getElementById(event.target.id);
      targetElement.style.fontWeight = 'normal';
    },

    /*
      テキストの上にマウスが乗ったら下線を引く
      テキスト上からマウスが離れたら戻す
      （hoverがbuildするとうまく動かなかったのでこちらで対処）
      b-list-group-itemの、@mouseoverと@mouseleaveから呼ばれる
    */
    changeItemStyle(event) {
      const targetElement = document.getElementById(event.target.id);
      targetElement.style.textDecoration = 'underline';
      targetElement.style.cursor = 'pointer';
    },
    restoreItemStyle(event) {
      const targetElement = document.getElementById(event.target.id);
      targetElement.style.textDecoration = 'none';
      targetElement.style.cursor = 'auto';
    },
  },

};

</script>

<style scoped>
/* ulのデフォルトの装飾を解除 */
ul {
  list-style: none;
}

/* <b-list-group-item>のデフォルトのCSS設定を変更 */
.list-group-item {
  background-color: transparent;
  border: transparent;
}
/*
  クリックできる範囲が広すぎてしまうので
  display: tableでテキストの長さに合わせる
  中央に文字を寄せる
*/
/*
.item {
  display: table;
  margin: auto;
}
*/

/*
  hoverがbuildするとうまく動かなかったので
  @mouseover／@mouseleave=で対処する
*/
/* マウスオーバーで文字を拡大させる時間の設定 */
/*
.item {
  transition: 0.2s;
  width: auto;
  padding-left: auto;
  display: inline-block;
}
*/
/* マウスオーバーで文字を1.1倍に拡大 */
/*
.item:ontouchstart {
  transform: scale(1.1);
  cursor : pointer;
}
.item:hover {
  transform: scale(1.1);
  cursor : pointer;
}
*/
/* クリックされたら太字にする */
/*
.list-group-item:active {
  font-weight:bolder;
}
*/
</style>
