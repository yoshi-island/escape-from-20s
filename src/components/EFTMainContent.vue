<template>
  <b-container class="eft-main-content">
      <b-row>

          <!--
            どのメニューが選択されたか入る変数mainContentsを
            App.vueから受け取り
            内容によってコンテンツの表示を切り替える
          -->
          <b-col>
            <div v-if="mainContents==='home-contents'">
              <EFTHome></EFTHome>
            </div>

            <div v-else-if="mainContents==='under-constraction'">
              <!--
                first-riddle-clearedイベントを
                子（EFTUnderConstraction.vue）から受け取ったら
                （一つ目の謎クリア）
                first-riddle-clearedイベントを発行して
                親（App.vue）に渡す
              -->
              <EFTUnderConstraction
                @first-riddle-cleared="$emit('first-riddle-cleared')"
              ></EFTUnderConstraction>
            </div>

            <!-- 2つ目の謎クリアについても同様の処理 -->
            <div v-else-if="mainContents==='about-author'">
              <EFTAboutAuthor
                @second-riddle-cleared="$emit('second-riddle-cleared')"
              ></EFTAboutAuthor>
            </div>

            <!-- 3つ目の謎クリアについても同様の処理 -->
            <div v-else-if="mainContents==='garally'">
              <EFTGarally
                @third-riddle-cleared="$emit('third-riddle-cleared')"
              ></EFTGarally>
            </div>

            <!--
              4つ目の謎クリアについても同様の処理
              refはremoveEventListener()で使われる
            -->
            <div v-else-if="mainContents==='links'">
              <EFTLinks
                ref="eftlinks"
                @fourth-riddle-cleared="$emit('fourth-riddle-cleared')"
              ></EFTLinks>
            </div>

            <!-- 5つ目の謎クリアについても同様の処理 -->
            <div v-else-if="mainContents==='bbs'">
              <EFTBbs
                @fifth-riddle-cleared="$emit('fifth-riddle-cleared')"
              ></EFTBbs>
            </div>

            <div v-else-if="mainContents==='escape-from-two-thousands'">
              <!--
                解説ページへボタンが押されたら
                'to-answer-page'イベントを発行して
                親（App.vue）に渡す
              -->
              <EFTEscapeFromTwoThousands
                @to-answer-page="$emit('to-answer-page')"
              ></EFTEscapeFromTwoThousands>
            </div>

            <!-- デフォルトはホーム画面を表示する -->
            <div v-else>
              <EFTHome></EFTHome>
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

/* import components */
import EFTHome from '@/components/sub_components/EFTHome.vue';
import EFTUnderConstraction from '@/components/sub_components/EFTUnderConstraction.vue';
import EFTAboutAuthor from '@/components/sub_components/EFTAboutAuthor.vue';
import EFTGarally from '@/components/sub_components/EFTGarally.vue';
import EFTLinks from '@/components/sub_components/EFTLinks.vue';
import EFTBbs from '@/components/sub_components/EFTBbs.vue';
import EFTEscapeFromTwoThousands from '@/components/sub_components/EFTEscapeFromTwoThousands.vue';

export default {
  name: 'EFTMainContent',
  props: {
    /*
      親（App.vue）から受け取った変数mainContentsを
      テンプレートで使えるようにする
    */
    mainContents: String,
  },

  components: {
    EFTHome,
    EFTUnderConstraction,
    EFTAboutAuthor,
    EFTGarally,
    EFTLinks,
    EFTBbs,
    EFTEscapeFromTwoThousands,
    BContainer,
    BRow,
    BCol,
  },

  methods: {
    /*
      EFTLinks.vueで発生させたマウスストーカー用のイベントリスナーを
      他のメインコンテンツページと最初からボタンが呼ばれたら削除する
      refを利用
      親要素（App.vue）から呼ばれて、子要素（EFTLinks.vue）を呼ぶ橋渡し機能
    */
    removeEventListener() {
      this.$refs.eftlinks.removeEventListener();
    },
  },

};
</script>

<style scoped>
.eft-main-content {
  padding: .75em;
  background: rgba(255,255,255,0.5); /* 半透明 */
}
.row {
  margin: 0;
}
</style>
