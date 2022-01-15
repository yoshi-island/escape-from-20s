<template>
  <b-container class="eft-bbs">
    <h3>BBS</h3>
    <b-row class="kakikomi">
      <b-col>
        <div class="kakikomi-header">[1] こんにちは Hitoe 2005/06/01(Wed) 18:30</div>
        <p>こんにちは！よろしくお願いします！！</p>
      </b-col>
    </b-row>
    <b-row class="kakikomi">
      <b-col>
        <div class="kakikomi-header">[2] 初めまして Takako 2005/06/01(Wed) 18:30ル</div>
        <p>初めてのカキコです！</p>
      </b-col>
    </b-row>
    <b-row class="kakikomi">
      <b-col>
        <div class="kakikomi-header">[3] 今日は Eriko 2005/06/02(Thu) 18:30</div>
        <p>いい天気ですね</p>
      </b-col>
    </b-row>
    <b-row class="kakikomi">
      <b-col>
        <div class="kakikomi-header">[4] もうすぐ Hiro 2005/06/02(Thu) 18:30</div>
        <p> もうすぐキリ番かな・・・？</p>
      </b-col>
    </b-row>
    <b-row class="kakikomi" id="kiriban-kakikomi">
      <b-col>
        <div class="kakikomi-header">[5] こんにちは Guest 2005/06/03(Fri) 18:30</div>
        <p>キリ番踏みました</p>
      </b-col>
    </b-row>

    <b-row id="kakokomi-info">
      <b-col cols="9">
        <p>名前：<input class="input-class" type="text"></p>
        <p>合言葉：<input class="input-class" type="text"></p>
      </b-col>
      <b-col cols="3">
        <br><br>
        <b-button
          class="bbs-button"
          type="submit"
          @click="showKakikomi(text)"
        >送信</b-button>
      </b-col>

    </b-row>
    <b-row>
      <b-col>
        <b-form-textarea
          id="textarea"
          v-model="text"
          rows="3"
          max-rows="6"
        ></b-form-textarea>

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
  BFormTextarea,
} from 'bootstrap-vue';

/* import js-cookie */
import Cookies from 'js-cookie';

export default {
  name: 'EFTBbs',
  components: {
    BContainer,
    BRow,
    BCol,
    BButton,
    BFormTextarea,
  },

  data() {
    return {
      text: '',
    };
  },

  /*
    すでにクリアしている場合は、キリ番書き込みは見せたままにする
  */
  mounted() {
    if (Cookies.get('fifth-riddle-cleared') === 'true') {
      this.showKakikomi('キリ番踏みました');
    }
  },

  methods: {
    /*
      キリ番報告をしたら、キリ番書き込みを表示する
      'fifth-riddle-cleared'イベントを発行して
      親（EFTMainContent.vue）に渡す
      Cookieの値も更新する
    */
    showKakikomi(text) {
      const string = 'キリ番踏みました';
      if (text === string) {
        const target = document.getElementById('kiriban-kakikomi');
        target.style.display = 'block';
        this.$emit('fifth-riddle-cleared');
        Cookies.set('fifth-riddle-cleared', 'true', { expires: 1 });
      }
    },
  },

};
</script>

<style scoped>

/* それぞれ過去の書き込み部分の設定 */
.kakikomi {
  /* width: 90%; */
  margin: 1em auto; /* 上下要素との幅を開ける＆中央寄せ */
  background: rgba(255,255,255,0.5); /* 半透明 */;
  text-align: left;
}
.kakikomi-header {
  background: white;
  text-align: left;
  /* padding: .3em; */
  margin: 0 0 .3em 0;
}
.kakikomi p {
  margin: .3em;
}

#kakokomi-info {
  /* width: 90%; */
  margin: auto;
  text-align: left;
}

.btn {
  display: block;
  margin: 0 0 0 auto;
}

/* 書き込みエリア */
#textarea {
  width: 95%!important;
  margin: 0 auto 1em; /* 上下要素との幅を開ける＆中央寄せ */
}

/* キリ番の書き込みをデフォルトで表示しない */
#kiriban-kakikomi {
  display: none;
}

/* 名前と合言葉のエリア設定 */
.input-class {
  border-color: transparent; /* textareaと同じ色にする */
}

.input-class {
  width: 70%;
}

.bbs-button {
  background-color: rgba(255,240,245,0.9);
  color: #2c3e50;
}
</style>
