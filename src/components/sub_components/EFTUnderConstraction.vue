<template>
  <b-container class="eft-under-constraction">
    <b-row>
      <b-col>

        <div>
          <h3>工事中</h3>
          <p>
            <img src="@/assets/gomenne.gif" alt="ごめんね">
          </p>
        </div>

        <br><br><br><br><br><br><br><br><br><br><br><br><br><br><br>
        <!--
          隠ボタンがクリックされたら
          'first-riddle-cleared'イベントが発行され
          親（EFTMainContent.vue）に渡される
        -->
        <b-button
          variant="link"
          @click="firstRiddleCleared"
        >Enter?</b-button>
        <br><br><br>

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
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTUnderConstraction',
  components: {
    BContainer,
    BRow,
    BCol,
    BButton,
  },

  methods: {

    /*
      隠ボタンがクリックされたら
      'first-riddle-cleared'イベントが発行され
      親（EFTMainContent.vue）に渡される
      Cookieの値も更新する
      ハートが見える位置までスクロールする
    */
    firstRiddleCleared() {
      this.$emit('first-riddle-cleared');
      Cookies.set('first-riddle-cleared', 'true', { expires: 1 });
    },
  },

};
</script>

<style scoped>

/*
  隠ボタンを表示しない
  hover時のみ表示する
*/
button {
  color: pink;
  font-weight: bold;
}
button:link,
button:visited,
button:active {
  color: transparent;
}
button:hover {
  color: white;
}
</style>
