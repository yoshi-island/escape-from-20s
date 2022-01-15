<template>
  <b-container class="eft-home">
    <b-row>
      <b-col>
        <div class="eft-introduction">
          <h3>このサイトの説明</h3>
          <p>
            ガラケー、デコメ、携帯小説など、<br>
            懐かしさのあまり、30代女子()がむせび泣く、<br>
            2000年くらいのWebの世界
          </p>
          <p>
            当時の世界を<br>
            わざわざ現代の技術<sup>※</sup>で表現したらどうなるだろう<br>
            という思いから本ページを作成しました<br>
          </p>
          <p>
            脱出ゲームとなっているので<br>
            時間の許す限り、懐かしい世界に迷い込んでください<br>
          </p>
          <p>
            上のハートを全て灯したらクリアです<br>
          </p>
          <p>
            作者の記憶を頼りに作っているので、<br>
            少々の時代錯誤はご容赦ください<br>
          </p>
          <hr>
          <p><sup>※</sup>現代の技術：レスポンシブデザイン</p>
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
} from 'bootstrap-vue';

export default {
  name: 'EFTHome',
  components: {
    BContainer,
    BRow,
    BCol,
  },

};
</script>

<style scoped>
</style>
