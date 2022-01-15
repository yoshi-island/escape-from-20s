<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  created() {
    /* 読み込まれたらオープニングページへ飛ぶ */
    /*
      最初の謎がクリアされている、もしくは解答ページであれば
      リフレッシュしてもオープニング表示しない
    */
    const currentPath = this.$route.path;
    const cookieValue = Cookies.get('first-riddle-cleared');
    if (!cookieValue) {
      if (currentPath !== '/answer') {
        this.showOpeningPage = false;
        // /openingでリロードした時にエラーを吐くのでcatchする
        this.$router.push('/opening').catch(() => {});
      }
    }
  },
};
</script>
