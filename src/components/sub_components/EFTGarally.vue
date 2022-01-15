<template>
  <b-container class="eft-garally">
    <h3>待ち受け画像</h3>
    <b-row>

      <b-col cols="4" lg="3" class="machiga">
        <!-- modal画像がsrc配下だとうまくいかなかったのでpublicに画像配置 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_1.jpg"
          alt="strawberry"
          @click="showModal('machiuke_1.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
        >これにする</b-button>
      </b-col>

      <!-- ページが長くなってしまうので一旦この画像は表示しない -->
      <!--
      <b-col cols="4" lg="3" class="machiga">
        <b-img
          thumbnail
          fluid
          src="machiuke_2.jpg"
          alt="finger-heart"
          @click="showModal('machiuke_2.jpg')"
        ></b-img>
        <b-button>これにする</b-button>
      </b-col>
      -->

      <b-col cols="4" lg="3" class="machiga">
        <!-- 相対パスだとうまくいかなかったので絶対パスでModal用の画像を指定 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_3.jpg"
          alt="雨にも負けず"
          @click="showModal('machiuke_3.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
        >これにする</b-button>
      </b-col>

      <b-col cols="4" lg="3" class="machiga">
        <!-- 相対パスだとうまくいかなかったので絶対パスでModal用の画像を指定 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_4.jpg"
          alt="我等友情永久不滅"
          @click="showModal('machiuke_4.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
        >これにする</b-button>
      </b-col>

      <b-col cols="4" lg="3" class="machiga">
        <!-- 相対パスだとうまくいかなかったので絶対パスでModal用の画像を指定 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_5.jpg"
          alt="Something-Blue"
          @click="showModal('machiuke_5.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
        >これにする</b-button>
      </b-col>

      <!-- ページが長くなってしまうので一旦この画像は表示しない -->
      <!--
      <b-col cols="4" lg="3" class="machiga">
        <b-img
          thumbnail
          fluid
          src="machiuke_6.jpg"
          alt="Start-Up"
          @click="showModal('machiuke_6.jpg')"
        ></b-img>
        <b-button>これにする</b-button>
      </b-col>
      -->

      <b-col cols="4" lg="3" class="machiga">
        <!-- 相対パスだとうまくいかなかったので絶対パスでModal用の画像を指定 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_7.jpg"
          alt="heart-ring-on-book"
          @click="showModal('machiuke_7.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
        >これにする</b-button>
      </b-col>

      <b-col cols="4" lg="3" class="machiga">
        <!-- 相対パスだとうまくいかなかったので絶対パスでModal用の画像を指定 -->
        <b-img
          thumbnail
          fluid
          src="machiuke_8.jpg"
          alt="Orange"
          @click="showModal('machiuke_8.jpg')"
        ></b-img>
        <b-button
          class="garally-button"
          @click="thirdRiddleCleared"
        >これにする</b-button>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>

/* $bvModalを使うための設定 */
import Vue from 'vue';

/* import Bootstrap */
import {
  BContainer,
  BRow,
  BCol,
  BImg,
  BModal,
  VBModal,
  ModalPlugin,
  BButton,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

/*
  $bvModalを使うための設定
  https://jun-app.com/articles/bootstrap-vue-asset-save
*/
Vue.use(ModalPlugin);
Vue.component('b-modal', BModal);
Vue.directive('b-modal', VBModal);

export default {
  name: 'EFTGarally',
  components: {
    BContainer,
    BRow,
    BCol,
    BImg,
    BButton,
  },

  methods: {

    /*
      画像をクリックしたらモーダルで画像が拡大表示される関数
      https://bootstrap-vue.org/docs/components/modal#message-box-advanced-usage
      相対パスだとうまくいかなかったので絶対パスを指定
    */
    showModal(path) {
      const h = this.$createElement;
      const messageVNode = h(
        'div', [
          h('b-img', {
            props: {
              src: path,
              center: true,
              fluid: true,
            },
          }),
        ],
      );
      this.$bvModal.msgBoxOk([messageVNode], {
        buttonSize: 'sm',
        centered: true,
        size: 'lg',
      });
    },

    /*
      正しい画像が選択されたら
      'third-riddle-cleared'イベントが発行され
      親（EFTMainContent.vue）に渡される
      Cookieの値も更新する
    */
    thirdRiddleCleared() {
      this.$emit('third-riddle-cleared');
      Cookies.set('third-riddle-cleared', 'true', { expires: 1 });
    },
  },

};
</script>

<style scaped>
.modal-content {
  max-width: 400px;
  position: absolute;
  float: left;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
.garally-button {
  margin: .5em 0 1em 0;
  background-color: rgba(255,240,245,0.9);
  color: #2c3e50;
}
</style>
