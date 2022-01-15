<!--
  ############################################################
  HTML
  ############################################################
-->
<template>
  <!--
    クリックするたびに、controlHumbergerIsActive関数で、
    ハンバーガーアイコンの形を定義する
  -->
  <div id="answer"
    class="animate__animated animate__fadeIn"
    @click="controlHumbergerIsActive"
  >

  <!--
    ==============================================
    コンテンツページ
    ==============================================
  -->
  <b-container
    id="eft-answer-id"
    class="eft-answer"
  >

    <!--
      ==============================================
      固定ボタン
      ==============================================
    -->
    <div class="fixed-buttons">

      <b-button
        class="btn-back-to-top"
        v-scroll-to="'#eft-answer-header'"
      >
        <font-awesome-icon
        :icon="['fa', 'arrow-up']"
        size="2x"
        ></font-awesome-icon>
      </b-button>
      <br>

      <b-button
        class="btn-twitter-fixed"
        :href="twitterShareUrl"
        target="_blank"
      >
        <font-awesome-icon
        :icon="['fab', 'twitter']"
        size="2x"
        ></font-awesome-icon>
      </b-button>
      <br>

      <b-button
        class="btn-escape-fixed"
        v-b-modal.restart-modal
      >
        <font-awesome-icon
        :icon="['fa', 'door-open']"
        size="2x"
        ></font-awesome-icon>
      </b-button>

    </div>

    <!--
      ==============================================
      ハンバーガーメニュー
      ==============================================
    -->
    <button
      id="hamburger-button"
      class="hamburger btn-bars hamburger--collapse"
      type="button"
      v-b-toggle.sidebar-1
      @click="hamburgerChangeShape"
    >
      <span class="hamburger-box">
        <span class="hamburger-inner"></span>
      </span>
    </button>

    <!--
      ==============================================
      サイドバー
      ==============================================
    -->
    <!-- サイドバー -->
    <div id="eft-answer-sidemenu">
      <b-sidebar
        id="sidebar-1"
        title="目次"
        bg-variant="dark"
        text-variant="light"
        z-index='100'
        no-header
        backdrop
        shadow
      >
        <template #default="{ hide }">
          <div class="px-3 py-2">

            <hr>
            <h3>リトライ</h3>
            <p>
            もう一度迷い込みたい方は<br>
            以下のボタンをクリック<br>
            </p>
            <b-button
              class="btn-escape"
              v-b-modal.restart-modal
              @click="hide"
            >
              脱出する
              <font-awesome-icon
              :icon="['fa', 'door-open']"
              size="2x"
              ></font-awesome-icon>
            </b-button>

            <hr>
            <h3>解説</h3>
            <nav class="mb-3">
              <b-nav vertical>
                <b-nav-item
                  v-scroll-to="'#answer_1'"
                  @click="hide"
                >謎１：永遠の工事中
                </b-nav-item>

                <b-nav-item
                  v-scroll-to="'#answer_2'"
                  @click="hide"
                >謎２：難読ギャル文字</b-nav-item>

                <b-nav-item
                  v-scroll-to="'#answer_3'"
                  @click="hide"
                >謎３：ポエム待ち画</b-nav-item>

                <b-nav-item
                  v-scroll-to="'#answer_4'"
                  @click="hide"
                >謎４：マウスストーカー</b-nav-item>

                <b-nav-item
                  v-scroll-to="'#answer_5'"
                  @click="hide"
                >謎５：キリ番報告</b-nav-item>
              </b-nav>
            </nav>

            <hr>
            <b-button
              class="button-black-back"
              variant="primary"
              @click="hide"
            >
              <font-awesome-icon
              :icon="['fa', 'angle-left']"
              ></font-awesome-icon>
              目次を閉じる</b-button>
          </div>
        </template>
      </b-sidebar>
    </div>

    <!--
      ==============================================
      ヘッダー
      ==============================================
    -->
    <div id="eft-answer-header">
      <b-row>
        <b-col>
          <b-jumbotron
            id="eft-answer-logo"
          >
            <template #header>2000年からの脱出</template>
            <template #lead>
              解説ページ。
              2000年ごろのWeb文化に触れながら脱出ゲームの解説をします。
            </template>
            <hr class="my-4">
              <div class="button-decoration-text">
              もう一度迷い込みたい方は<br>以下のボタンをクリック
              </div>
               <br>
            <b-button
              class="btn-escape"
              v-b-modal.restart-modal
            >
              脱出する
              <font-awesome-icon
              :icon="['fa', 'door-open']"
              size="2x"
              ></font-awesome-icon>
            </b-button>
            <b-modal
              id="restart-modal"
              centered
              title="脱出ゲームページに移動する？"
              @ok="restartButtonClicked"
            >
              <p>
                <font-awesome-icon
                  :icon="['fa', 'question']"
                  size="3x"
                ></font-awesome-icon>
              </p>
              <p>
                <b>脱出ゲームページに移動する？</b><br>
                <br>
                OKをクリックすると、<br>
                脱出ゲームページに移動するよ。<br>
                <br>
                （解説ページに戻るには、<br>
                右下の「諦める？」ボタンを<br>
                クリックして戻ってね）
              </p>
              </b-modal>
          </b-jumbotron>
        </b-col>
      </b-row>
    </div>

    <!--
      ==============================================
      コンテンツ
      ==============================================
    -->
    <div id="eft-answer-contents">

      <!--
        ----------------------------------------------
        間の背景
        ----------------------------------------------
      -->
      <div class="parallax-bg img-bg-01">
      </div>

      <!--
        ----------------------------------------------
        コンテンツ１
        ----------------------------------------------
      -->
      <div
        class="answer-contents"
        id="answer_1"
      >

        <!-- ハートのアイコンの上に文字を重ねる（CSSで指定） -->
        <span>
          <font-awesome-icon
            class="riddle-header-back-icon"
            :icon="['fa', 'heart']"
            size="10x"
          ></font-awesome-icon>
        </span>
        <div class="riddle-header">謎1</div>

        <!-- タイトル部分 -->
        <!--
          SPで複数行になった時に
          囲み枠が崩れないようにh3にクラス指定
        -->
        <!--
          riddle-answer-header-h3-dummyは、上下の枠線
        -->
        <h3 id="riddle-answer-header-h3-dummy-top-1"></h3>
        <h3 class="riddle-answer-header-h3" id="riddle-answer-header-h3-1">
          <div id="riddle-answer-header-1">
            <span class="big-letter">永</span>遠の工事中<br>
            と<br>
            隠しページへの入口
          </div>
        </h3>
        <h3 id="riddle-answer-header-h3-dummy-bottom-1"></h3>

        <div class="answer-contents-text answer-contents-text-1">
          <p id="riddle1-contents-p-1">
            <span class="marker-yellow">当時、なぜか多く存在した「工事中」ページ。</span><br>
            その多くは永遠に工事中でした。<br>
          </p>
          <p id="riddle1-contents-p-2">
            また、<span class="marker-yellow">隠しページへの入り口ボタンを作るのも流行りました。</span><br>
          </p>
          <p id="riddle1-contents-p-3">
            あなたも、タブボタンを連打して探した覚えがあるのではないでしょうか。<br>
          </p>
          <b-img
            class="answer_pics"
            src="1_eft_answer_pic_riddle.png"
            alt="answer_pic_1"
          ></b-img>
          <p id="riddle1-contents-p-4">
            <br>
            <span class="marker-yellow">今回の一つ目の謎の答えは、工事中ページの中にあります。</span><br>
            <br>
          </p>
          <p id="riddle1-contents-p-5">
            <span class="marker-pink">工事中ページの下の方に薄く「Enter？」と書かれた文字があるので<br>
            クリックして先に進みましょう。</span>
          </p>
        </div>
      </div>

      <!--
        ----------------------------------------------
        間の背景
        ----------------------------------------------
      -->
      <div class="parallax-bg img-bg-02">
      </div>

      <!--
        ----------------------------------------------
        コンテンツ２
        ----------------------------------------------
      -->
      <div
        class="answer-contents"
        id="answer_2"
      >

        <!-- ハートのアイコンの上に文字を重ねる（CSSで指定） -->
        <span>
          <font-awesome-icon
            class="riddle-header-back-icon"
            :icon="['fa', 'heart']"
            size="10x"
          ></font-awesome-icon>
        </span>
        <div class="riddle-header">謎2</div>

        <!-- タイトル部分 -->
        <!--
          SPで複数行になった時に
          囲み枠が崩れないようにh3にクラス指定
        -->
        <!--
          riddle-answer-header-h3-dummyは、上下の枠線
        -->
        <h3 id="riddle-answer-header-h3-dummy-top-2"></h3>
        <h3 class="riddle-answer-header-h3" id="riddle-answer-header-h3-2">
          <div id="riddle-answer-header-2">
            <span class="big-letter">難</span>読ギャル文字<br>
            と<br>
            プロフ文化
          </div>
        </h3>
        <h3 id="riddle-answer-header-h3-dummy-bottom-2"></h3>

        <div class="answer-contents-text answer-contents-text-2">
          <p id="riddle2-contents-p-1">
            <span class="marker-yellow">「ギャル文字」と言われる暗号が流行ったのは覚えているでしょうか。</span><br>
          </p>
          <p id="riddle2-contents-p-2">
            <span class="marker-yellow">「好き」→「女子、ｷ」など記号を組み合わせて日本語の文字を作ります。</span><br>
          </p>
          <p id="riddle2-contents-p-3">
            作者は、覚えられないので、携帯に辞書登録をしていました。<br>
          </p>
          <p id="riddle2-contents-p-4">
            単に、半角カタカナを使うだけでも雰囲気が出ましたね。<br>
          </p>
          <p id="riddle2-contents-p-5">
            <span class="marker-yellow">また、「プロフ」といって、いくつかの質問に回答することで<br>
            自分のことを紹介する文化がありました。</span><br>
            <br>
          </p>
          <p id="riddle2-contents-p-6">
            作者は、紙のプロフの方が記憶に残っていますが、<br>
            ネット上のプロフサイトも流行っていましたね。<br>
          </p>
          <p id="riddle2-contents-p-7">
            <span class="marker-yellow">
              ホームページののオーナーのことを「管理人」と言うのもこの頃からでしょうか。
            </span><br>
          </p>
          <b-img
            class="answer_pics"
            src="2_eft_answer_pic_riddle.png"
            alt="answer_pic_2"
          ></b-img>
          <p id="riddle2-contents-p-8">
            <br>
            <span class="marker-yellow">二つ目の謎の答えは、「管理人について」ページ。</span><br>
            <br>
          </p>
          <p id="riddle2-contents-p-9">
            <span class="marker-pink">青いギャル文字の文章を解読すると、「アオ、次にムラサキが好き」となります。</span><br>
          </p>
          <p id="riddle2-contents-p-10">
            <span class="marker-pink">したがって、青い文章→紫色の文章の順番でクリックするとクリアです。</span>
          </p>
        </div>
      </div>

      <!--
        ----------------------------------------------
        間の背景
        ----------------------------------------------
      -->
      <div class="parallax-bg img-bg-01">
      </div>

      <!--
        ----------------------------------------------
        コンテンツ３
        ----------------------------------------------
      -->
      <div
        class="answer-contents"
        id="answer_3"
      >
        <!-- ハートのアイコンの上に文字を重ねる（CSSで指定） -->
        <span>
          <font-awesome-icon
            class="riddle-header-back-icon"
            :icon="['fa', 'heart']"
            size="10x"
          ></font-awesome-icon>
        </span>
        <div class="riddle-header">謎3</div>

        <!-- タイトル部分 -->
        <!--
          SPで複数行になった時に
          囲み枠が崩れないようにh3にクラス指定
        -->
        <!--
          riddle-answer-header-h3-dummyは、上下の枠線
        -->
        <h3 id="riddle-answer-header-h3-dummy-top-3"></h3>
        <h3 class="riddle-answer-header-h3" id="riddle-answer-header-h3-3">
          <div id="riddle-answer-header-3">
            ポエム<span class="big-letter">待</span>ち画<br>
            と<br>
            突然流れる音楽
          </div>
        </h3>
        <h3 id="riddle-answer-header-h3-dummy-bottom-3"></h3>

        <div class="answer-contents-text answer-contents-text-3">
          <p id="riddle3-contents-p-1">
            <span class="marker-yellow">ガラケーの待ち画と言えば、</span><br>
          </p>
          <p id="riddle3-contents-p-2">
            <span class="marker-yellow">「カナヘイ」さんのディズニーキャラクターの待ち画を
            設定している人は多かったのではないでしょうか。</span><br>
          </p>
          <p id="riddle3-contents-p-3">
            作者も様々なポエム画像を大量にガラケーに保存をしていたものです。<br>
            <br>
          </p>
          <p id="riddle3-contents-p-4">
            カラフルなものや、黒背景に白地のシンプルなものや、<br>
            本の間にリングが置かれて影がハートに見えるやつ、など、
          </p>
          <p id="riddle3-contents-p-5">
            色々な待ち画が流行りました。<br>
          </p>
          <p id="riddle3-contents-p-6">
            待ち画を自作しようとした時、<br>
            <span class="marker-yellow">今のようなスマホの便利なお絵かきツールは無かったので、</span><br>
          </p>
          <p id="riddle3-contents-p-7">
            <span class="marker-yellow">GIMPやPictbearなどの、普通のお絵かきツールの「範囲選択」や「ぼかし」機能を駆使して<br>
            ネオンペンを自作したものです。</span><br>
          </p>
          <p id="riddle3-contents-p-8">
            （気になる方は「PictBear  ネオンペン  作り方」などでググってください）<br>
          </p>
          <p id="riddle3-contents-p-9">
            <span class="marker-yellow">また、当時の個人ホームページでは、音楽を流すことが流行りました。</span><br>
            サイトを開くと突然流れる音楽。<br>
          </p>
          <p id="riddle3-contents-p-10">
            スマホでWebページを見ることが普通になった現代では、<br>
            電車の中や公共の場で閲覧していることも多いので、迷惑ですね。<br>
          </p>
          <p id="riddle3-contents-p-11">
            （この脱出ゲームでは、自動的には音楽は流れないようになっています）<br>
          </p>
          <b-img
            class="answer_pics"
            src="3_eft_answer_pic_riddle.png"
            alt="answer_pic_3"
          ></b-img>
          <p id="riddle3-contents-p-12">
            <br>
            <span class="marker-yellow">
              さて、前置きが長くなりましたが、三つ目の謎は「ギャラリー」ページです。
            </span><br>
            <br>
          </p>
          <p id="riddle3-contents-p-13">
            <span class="marker-pink">いくつか待ち画が並んでいますが、
            サイドバーの音楽を再生すると流れる歌詞が書かれている待ち画が正解です。</span><br>
          </p>
          <p id="riddle3-contents-p-14">
            <span class="marker-pink">「これにする」ボタンをクリックして先に進みましょう。</span>
          </p>
        </div>
      </div>

      <!--
        ----------------------------------------------
        間の背景
        ----------------------------------------------
      -->
      <div class="parallax-bg img-bg-02">
      </div>

      <!--
        ----------------------------------------------
        コンテンツ４
        ----------------------------------------------
      -->
      <div
        class="answer-contents"
        id="answer_4"
      >

        <!-- ハートのアイコンの上に文字を重ねる（CSSで指定） -->
        <span>
          <font-awesome-icon
            class="riddle-header-back-icon"
            :icon="['fa', 'heart']"
            size="10x"
          ></font-awesome-icon>
        </span>
        <div class="riddle-header">謎4</div>

        <!-- タイトル部分 -->
        <!--
          SPで複数行になった時に
          囲み枠が崩れないようにh3にクラス指定
        -->
        <!--
          riddle-answer-header-h3-dummyは、上下の枠線
        -->
        <h3 id="riddle-answer-header-h3-dummy-top-4"></h3>
        <h3 class="riddle-answer-header-h3" id="riddle-answer-header-h3-4">
          <div id="riddle-answer-header-4">
            マウスストーカー<br>
            と<br>
            リンク<span class="big-letter">集</span>
          </div>
        </h3>
        <h3 id="riddle-answer-header-h3-dummy-bottom-4"></h3>

        <div class="answer-contents-text answer-contents-text-4">
          <br><br>
          <p id="riddle4-contents-p-1">
            <span class="marker-yellow">モバイル端末の普及とともに、いつしか見なくなったマウスストーカー。</span><br>
          </p>
          <p id="riddle4-contents-p-2">
            キラキラとポインターを追い回す様子は、ホームページをより一層華やかにしました。<br>
          </p>
          <p id="riddle4-contents-p-3">
            <span class="marker-yellow">また、この時代リンク集（相互リンク）のページを作成するのが慣例でした。</span><br>
          </p>
          <p id="riddle4-contents-p-4">
            「●●同盟」や「◯◯の部屋」など独特の名前のホームページが並んでいました。<br>
          </p>
          <p id="riddle4-contents-p-5">
            今で言うSNSの友達（相互フォロワー）リストのようなものかもしれません。<br>
          </p>
          <b-img
            class="answer_pics"
            src="4_eft_answer_pic_riddle.png"
            alt="answer_pic_4"
          ></b-img>
          <p id="riddle4-contents-p-6">
            <br>
            <span class="marker-yellow">４つ目の謎は「リンク集」です。</span><br>
          </p>
          <p id="riddle4-contents-p-7">
            スマホだと少しわかりにくいですが、「リンク集」ページへ入ると<br>
            ポインターを、星のマウスストーカーがキラキラと追い回します。<br>
            <br>
          </p>
          <p id="riddle4-contents-p-8">
            <span class="marker-pink">マウスストーカーの星の色が変わったリンクが答えとなります。</span><br>
          </p>
          <p id="riddle4-contents-p-9">
            <span class="marker-pink">リンクをクリックして、４つ目の謎はクリアです。</span>
          </p>
        </div>
      </div>

      <!--
        ----------------------------------------------
        間の背景
        ----------------------------------------------
      -->
      <div class="parallax-bg img-bg-01">
      </div>

      <!--
        ----------------------------------------------
        コンテンツ５
        ----------------------------------------------
      -->
      <div
        class="answer-contents"
        id="answer_5"
      >

        <!-- ハートのアイコンの上に文字を重ねる（CSSで指定） -->
        <span>
          <font-awesome-icon
            class="riddle-header-back-icon"
            :icon="['fa', 'heart']"
            size="10x"
          ></font-awesome-icon>
        </span>
        <div class="riddle-header">謎5</div>

        <!-- タイトル部分 -->
        <!--
          SPで複数行になった時に
          囲み枠が崩れないようにh3にクラス指定
        -->
        <!--
          riddle-answer-header-h3-dummyは、上下の枠線
        -->
        <h3 id="riddle-answer-header-h3-dummy-top-5"></h3>
        <h3 class="riddle-answer-header-h3" id="riddle-answer-header-h3-5">
          <div id="riddle-answer-header-5">
            BBS<br>
            と<br>
            <span class="big-letter">謎</span>のキリ番報告
          </div>
        </h3>
        <h3 id="riddle-answer-header-h3-dummy-bottom-5"></h3>

        <div class="answer-contents-text answer-contents-text-5">
          <p id="riddle5-contents-p-1">
            <br><br>
            <span class="marker-yellow">匿名の「BBS（掲示板）」というページは、
            ホムペに訪れた人の唯一の交流の場となっていました。</span><br>
            <br>
          </p>
          <p id="riddle5-contents-p-2">
            今の若い世代には、SNSの実名文化だ普及していますが、<br>
          </p>
          <p id="riddle5-contents-p-3">
            この頃は、匿名BBSが主流だったため、<br>
            アラサー世代は実名に抵抗があるのかもしれません。<br>
          </p>
          <p id="riddle5-contents-p-4">
             <span class="marker-yellow">「キリ番報告」と言う謎の文化が生まれたのもこの頃。</span><br>
          </p>
          <p id="riddle5-contents-p-5">
             各ホムペには、アクセス数をカウントするカウンターが配置され、
          </p>
          <p id="riddle5-contents-p-6">
             キリの良い番号でアクセスすると、<br>
             BBSで報告する慣習がありました。<br>
          </p>
          <b-img
            class="answer_pics"
            src="5_eft_answer_pic_riddle.png"
            alt="answer_pic_5"
          ></b-img>
          <p id="riddle5-contents-p-7">
            <br>
            <span class="marker-yellow">５つ目の謎は、「BBS」ページです。</span><br>
            <br>
          </p>
          <p id="riddle5-contents-p-8">
            <span class="marker-pink">コンテンツの上部を見ると「あなたは2000番目の訪問者」と書かれています。</span><br>
          </p>
          <p id="riddle5-contents-p-9">
            <span class="marker-pink">キリ番なので、BBSで「キリ番踏みました」と報告すると、謎5はクリアです。</span><br>
          <br><br>
          </p>
          <p id="riddle5-contents-p-10">
            <span class="marker-pink">
              <font size='5px'>
                <b>全ての謎をクリアしたら、「脱出ページ」に脱出ボタンが現れます。</b><br>
              </font>
            </span>
          </p>
          <p id="riddle5-contents-p-11">
            <span class="marker-pink">
              <font size='5px'>
                <b>クリックして脱出成功です。</b>
              </font>
            </span>
          </p>
        </div>
      </div>

      <div class="parallax-bg img-bg-02">
      </div>

    </div>

    <!-- フッター -->
    <b-row id="eft-footer">
      <b-col>
        <EFTFooter></EFTFooter>
      </b-col>
    </b-row>

  </b-container>
  </div>
</template>

<!--
  ############################################################
  スクリプト
  ############################################################
-->
<script>
import {
  BContainer,
  BRow,
  BCol,
  BJumbotron,
  BButton,
  BSidebar,
  BImg,
  BNav,
  BNavItem,
  VBToggle,
} from 'bootstrap-vue';

/* footerテンプレ読み込み */
import EFTFooter from '@/components/EFTFooter.vue';

/*
  Headerのbefore,afterを動かすためのCSS
  scrollAnimationHeaderBorder()で動的に編集される
  外出しするとうまく動かなくなったのでコメントアウト
*/
/* import '../css/keyframes.css'; */

/*
  VBToggleを使えるようにする
  importの後は一行開ける必要がある
*/
import Vue from 'vue';

Vue.directive('b-toggle', VBToggle);

export default {
  name: 'Answer',
  components: {
    EFTFooter,
    BContainer,
    BRow,
    BCol,
    BJumbotron,
    BButton,
    BSidebar,
    BImg,
    BNav,
    BNavItem,
  },

  data() {
    return {

      /* twitterShareUrlをtempleteで使うための宣言 */
      twitterShareUrl: '',

      /* scrollAnimationHeaderBorder()で使われるフラグ */
      scrollAnimationHeaderBorderFlag1: 0,
      scrollAnimationHeaderBorderFlag2: 0,
      scrollAnimationHeaderBorderFlag3: 0,
      scrollAnimationHeaderBorderFlag4: 0,
      scrollAnimationHeaderBorderFlag5: 0,

    };
  },

  mounted() {
    /*
      スクロールに合わせてコンテンツをアニメーションする
      (元々EventListenerが動いていたら動作がおかしくなるので止めておく)
    */
    try {
      window.removeEventListener(
        'scroll',
        this.defineScrollAnimation,
      );
    } catch (error) {
      console.error(error);
    }
    window.addEventListener(
      'scroll',
      this.defineScrollAnimation,
    );

    /*
      ページが読み込まれた時に一番上を表示する
    */
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });

    /*
      Twitterシェアの設定を定義
    */
    this.twitterShareUrl = 'https://twitter.com/intent/tweet?'
      + 'text=「２０００年からの脱出」に挑戦しよう'
      + '&url=https://yoshi-dev.sakura.ne.jp'
      + '&hashtags=2000年からの脱出,脱出ゲーム';
  },

  methods: {
    /*
      スクロールに合わせてコンテンツをアニメーションする
    */
    defineScrollAnimation() {
      /* スクロールに合わせて動かす要素 */
      this.scrollAnimation('riddle-answer-header-1');
      this.scrollAnimation('riddle-answer-header-2');
      this.scrollAnimation('riddle-answer-header-3');
      this.scrollAnimation('riddle-answer-header-4');
      this.scrollAnimation('riddle-answer-header-5');
      this.scrollAnimation('riddle1-contents-p-1');
      this.scrollAnimation('riddle1-contents-p-2');
      this.scrollAnimation('riddle1-contents-p-3');
      this.scrollAnimation('riddle1-contents-p-4');
      this.scrollAnimation('riddle1-contents-p-5');
      this.scrollAnimation('riddle2-contents-p-1');
      this.scrollAnimation('riddle2-contents-p-2');
      this.scrollAnimation('riddle2-contents-p-3');
      this.scrollAnimation('riddle2-contents-p-4');
      this.scrollAnimation('riddle2-contents-p-5');
      this.scrollAnimation('riddle2-contents-p-6');
      this.scrollAnimation('riddle2-contents-p-7');
      this.scrollAnimation('riddle2-contents-p-8');
      this.scrollAnimation('riddle2-contents-p-9');
      this.scrollAnimation('riddle2-contents-p-10');
      this.scrollAnimation('riddle3-contents-p-1');
      this.scrollAnimation('riddle3-contents-p-2');
      this.scrollAnimation('riddle3-contents-p-3');
      this.scrollAnimation('riddle3-contents-p-4');
      this.scrollAnimation('riddle3-contents-p-5');
      this.scrollAnimation('riddle3-contents-p-6');
      this.scrollAnimation('riddle3-contents-p-7');
      this.scrollAnimation('riddle3-contents-p-8');
      this.scrollAnimation('riddle3-contents-p-9');
      this.scrollAnimation('riddle3-contents-p-10');
      this.scrollAnimation('riddle3-contents-p-11');
      this.scrollAnimation('riddle3-contents-p-12');
      this.scrollAnimation('riddle3-contents-p-13');
      this.scrollAnimation('riddle3-contents-p-14');
      this.scrollAnimation('riddle4-contents-p-1');
      this.scrollAnimation('riddle4-contents-p-2');
      this.scrollAnimation('riddle4-contents-p-3');
      this.scrollAnimation('riddle4-contents-p-4');
      this.scrollAnimation('riddle4-contents-p-5');
      this.scrollAnimation('riddle4-contents-p-6');
      this.scrollAnimation('riddle4-contents-p-7');
      this.scrollAnimation('riddle4-contents-p-8');
      this.scrollAnimation('riddle4-contents-p-9');
      this.scrollAnimation('riddle5-contents-p-1');
      this.scrollAnimation('riddle5-contents-p-2');
      this.scrollAnimation('riddle5-contents-p-3');
      this.scrollAnimation('riddle5-contents-p-4');
      this.scrollAnimation('riddle5-contents-p-5');
      this.scrollAnimation('riddle5-contents-p-6');
      this.scrollAnimation('riddle5-contents-p-7');
      this.scrollAnimation('riddle5-contents-p-8');
      this.scrollAnimation('riddle5-contents-p-9');
      this.scrollAnimation('riddle5-contents-p-10');
      this.scrollAnimation('riddle5-contents-p-11');
      this.scrollAnimation('riddle-answer-header-1');
      this.scrollAnimation('riddle-answer-header-2');
      this.scrollAnimation('riddle-answer-header-3');
      this.scrollAnimation('riddle-answer-header-4');
      this.scrollAnimation('riddle-answer-header-5');
      this.scrollAnimationHeaderBorder('1');
      this.scrollAnimationHeaderBorder('2');
      this.scrollAnimationHeaderBorder('3');
      this.scrollAnimationHeaderBorder('4');
      this.scrollAnimationHeaderBorder('5');
    },

    /*
      スクロールに合わせて見出しの枠線をアニメーションする関数
      defineScrollAnimation()から呼ばれる
    */
    scrollAnimationHeaderBorder(headerNo) {
      /*
        上下の横線の要素のIDを定義
      */
      let topElementId = '';
      topElementId = topElementId.concat('riddle-answer-header-h3-dummy-top-', headerNo);
      let bottomElementId = '';
      bottomElementId = bottomElementId.concat('riddle-answer-header-h3-dummy-bottom-', headerNo);
      /*
        左右の縦線のアニメーションするために追加するkeyframeを定義
        疑似要素を動かすため、CSSを追加する方式を採用
      */
      const styleSheet = document.styleSheets[1];
      let keyFramesLeftRight = '';
      keyFramesLeftRight = keyFramesLeftRight.concat('@keyframes border_anim_rightleft', headerNo, ' {0% {transform: scaleY(0);} 100% {transform: scaleY(1);}}');

      // 「dummy」という文字列が含まれるIDであれば実行
      if (topElementId.indexOf('dummy') > 0) {
        const targetTop = document.getElementById(topElementId);
        const targetBottom = document.getElementById(bottomElementId);
        /*
          上のボーダーをスクロールアニメーションの基準にする
          （上としたバラバラではなく一緒にアニメーション）
        */
        const elementPoint = targetTop.getBoundingClientRect().top;
        const targetPoint = window.innerHeight * 1.0;

        const keyframes = [
          {
            transform: 'translate(0, -340%) scaleX(0)',
          }, {
            transform: 'translate(0, -340%) scaleX(1)',
          },
        ];
        const options = {
          duration: 1000,
          // easing: 'linear',
          delay: 0,
          fill: 'forwards',
        };

        /*
          スクロールする時の処理
          (scrollAnimationFlagを共通化が難しかったのでヘッダ要素ごとの処理)
        */
        if (headerNo === '1') {
          // 下にスクロールした時にアニメーション
          if (elementPoint < targetPoint && this.scrollAnimationHeaderBorderFlag1 === 0) {
            // 動かした結果を戻すか判断するフラグを立てる
            this.scrollAnimationHeaderBorderFlag1 = 1;
            // 上の横線を動かす
            targetTop.animate(keyframes, options);
            // 下の横線を動かす
            targetBottom.animate(keyframes, options);
            // 左右の縦線を動かす（keyframeルールの追加）
            styleSheet.insertRule(keyFramesLeftRight, 0);
          // 上にスクロールしたらアニメーションをもとに戻す
          // targetTopとtargetBottomはスクロールしたら勝手にもと（CSSで定義されている状態）に戻る（理由は不明）
          } else if (elementPoint > targetPoint && this.scrollAnimationHeaderBorderFlag1 === 1) {
            this.scrollAnimationHeaderBorderFlag1 = 0;
            styleSheet.deleteRule(0);
          }
        } else if (headerNo === '2') {
          if (elementPoint < targetPoint && this.scrollAnimationHeaderBorderFlag2 === 0) {
            this.scrollAnimationHeaderBorderFlag2 = 1;
            targetTop.animate(keyframes, options);
            targetBottom.animate(keyframes, options);
            styleSheet.insertRule(keyFramesLeftRight, 1);
          } else if (elementPoint > targetPoint && this.scrollAnimationHeaderBorderFlag2 === 1) {
            this.scrollAnimationHeaderBorderFlag2 = 0;
            styleSheet.deleteRule(1);
          }
        } else if (headerNo === '3') {
          if (elementPoint < targetPoint && this.scrollAnimationHeaderBorderFlag3 === 0) {
            this.scrollAnimationHeaderBorderFlag3 = 1;
            targetTop.animate(keyframes, options);
            targetBottom.animate(keyframes, options);
            styleSheet.insertRule(keyFramesLeftRight, 2);
          } else if (elementPoint > targetPoint && this.scrollAnimationHeaderBorderFlag3 === 1) {
            this.scrollAnimationHeaderBorderFlag3 = 0;
            styleSheet.deleteRule(2);
          }
        } else if (headerNo === '4') {
          if (elementPoint < targetPoint && this.scrollAnimationHeaderBorderFlag4 === 0) {
            this.scrollAnimationHeaderBorderFlag4 = 1;
            targetTop.animate(keyframes, options);
            targetBottom.animate(keyframes, options);
            styleSheet.insertRule(keyFramesLeftRight, 3);
          } else if (elementPoint > targetPoint && this.scrollAnimationHeaderBorderFlag4 === 1) {
            this.scrollAnimationHeaderBorderFlag4 = 0;
            styleSheet.deleteRule(3);
          }
        } else if (headerNo === '5') {
          if (elementPoint < targetPoint && this.scrollAnimationHeaderBorderFlag5 === 0) {
            this.scrollAnimationHeaderBorderFlag5 = 1;
            targetTop.animate(keyframes, options);
            targetBottom.animate(keyframes, options);
            styleSheet.insertRule(keyFramesLeftRight, 4);
          } else if (elementPoint > targetPoint && this.scrollAnimationHeaderBorderFlag5 === 1) {
            this.scrollAnimationHeaderBorderFlag5 = 0;
            styleSheet.deleteRule(4);
          }
        }
      }
    },

    /*
      スクロールに合わせてコンテンツの中身を表示する関数
      （文字をふわっと表示、マーカーを表示）
      defineScrollAnimation()から呼ばれる
    */
    scrollAnimation(targetId) {
      const target = document.getElementById(targetId);
      const elementPoint = target.getBoundingClientRect().top;
      const targetPoint = window.innerHeight * 1.0;
      const animation = 'animate__fadeInUp';

      /*
        下にスクロールする時の処理
      */
      if (elementPoint < targetPoint) {
        // コンテンツをふわっと表示する
        target.classList.add('animate__animated');
        target.classList.add(animation);
        target.classList.add('animate__faster');
        target.style.color = '#2c3e50';

        // 'marker-yellow'か、'marker-pink'がついた要素があればハイライトする
        // 1パラグラフにハイライト部分は1箇所未満の前提
        if (target.getElementsByClassName('marker-yellow').length !== 0) {
          const highLightTarget = target.getElementsByClassName('marker-yellow')[0];
          highLightTarget.style.background = 'linear-gradient(transparent 50%, yellow 0%)';
        }
        if (target.getElementsByClassName('marker-pink').length !== 0) {
          const highLightTarget = target.getElementsByClassName('marker-pink')[0];
          highLightTarget.style.background = 'linear-gradient(transparent 50%, pink 0%)';
        }
      } else {
        /*
          上にスクロールしたら元に戻す
        */
        // コンテンツをふわっと表示する（戻し）
        target.classList.remove('animate__animated');
        target.classList.remove(animation);
        target.classList.remove('animate__faster');
        target.style.color = 'transparent';

        // 'marker-yellow'か、'marker-pink'がついた要素があればハイライトする（戻し）
        if (target.getElementsByClassName('marker-yellow').length !== 0) {
          const highLightTarget = target.getElementsByClassName('marker-yellow')[0];
          highLightTarget.style.background = 'linear-gradient(transparent 50%, transparent 0%)';
        }
        if (target.getElementsByClassName('marker-pink').length !== 0) {
          const highLightTarget = target.getElementsByClassName('marker-pink')[0];
          highLightTarget.style.background = 'linear-gradient(transparent 50%, transparent 0%)';
        }
      }
    },

    /*
      画面をクリックする際に、サイドメニューが
      開いているか（'aria-expanded'クラスが付与されているか）を確認し
      ハンバーガーメニューの形を変える
    */
    controlHumbergerIsActive() {
      const elementHamburger = document.getElementById('hamburger-button');
      const elementAria = elementHamburger.getAttribute('aria-expanded');
      if (elementAria === 'true') {
        elementHamburger.classList.add('is-active');
      } else if (elementAria === 'false') {
        elementHamburger.classList.remove('is-active');
      }
    },
    /*
      クリックするたびにハンバーガーメニューのアイコンを動かす
    */
    hamburgerChangeShape() {
      const elementHamburger = document.getElementById('hamburger-button');
      if (elementHamburger.classList.contains('is-active') === false) {
        elementHamburger.classList.add('is-active');
      } else {
        elementHamburger.classList.remove('is-active');
      }
    },

    /*
      脱出するボタンが押されたら、restart-button-clicked
      // イベントを発行して親（App.vue）に渡す
      オープニングページに遷移する
    */
    restartButtonClicked() {
      this.removeEventListener();
      // this.$emit('restart-button-clicked');
      this.$router.push('/opening', () => {});
    },

    /*
      脱出するボタンが押されたらイベントリスナーを止める
    */
    removeEventListener() {
      try {
        window.removeEventListener(
          'scroll',
          this.defineScrollAnimation,
        );
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<!--
  ############################################################
  スタイルシート
  ############################################################
-->
<style scoped>

/* フォント */
@import url('https://fonts.googleapis.com/css2?family=Kiwi+Maru:wght@300&display=swap');

/* ==============================
  全体の設定
============================== */
html {
  /* footer下などが白くなってしまうため定義 */
  background-color: silver;
}
#answer {
  font-family: 'Kiwi Maru', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: whitesmoke;
  overflow: hidden; /* 右側に余白ができる対策 */
}

/* 余計な余白を削除 */
.container {
  padding: 0;
}
.col {
  padding: 0;
}

/* ==============================
  ロゴ部分
============================== */
/* ロゴの部分 */
.jumbotron {
  background:
    linear-gradient(to bottom, transparent 0%, transparent 70%, whitesmoke 100%),
    url("../assets/eft-logo-background.jpg") center center no-repeat;
  background-size: cover;
  height: 100%;
  color: white;
}
/* jumbotronの中の文字 */
.jumbotron .display-3 {
  color: white;
  text-align: left;
}

/*
  ヘッダーの脱出するボタンの説明文装飾
*/
.button-decoration-text::before {
  content: "＼";
}
.button-decoration-text::after {
  content: "／";
}

/* ハンバーガーアイコンに被らないようにする */
#eft-answer-logo {
padding-top: 65px;
margin-bottom: 0;
}

/* ==============================
  脱出ボタン
  （ヘッダーとサイドバーで利用）
============================== */
/*
  脱出ボタンの装飾
*/
.btn-escape {
  background: transparent;
  border: 1px solid white;
  height: 100px;
  width: 100px;
  border-radius: 20%;
}
.btn-escape:hover {
  background: rgba(255, 255, 255, 1);
  color: gray;
}

/*
  背景がdarkの時のボタン
  （他に流用できるかもしれないので別にする）
*/
.button-black-back {
  background: transparent;
  border: 1px solid white;
}
.button-black-back:hover {
  background: rgba(255, 255, 255, 1);
  color: gray;
}

/* ==============================
  コンテンツ
============================== */
/* コンテンツの画像 */
.answer_pics {
  width: 30em;
}
@media screen and (max-width: 768px) {
  .answer_pics {
    width: 90%;
  }
}

/*
  見出しの大文字装飾
*/
.big-letter {
  font-size: 50px;
}

/* 本文内黄色マーカー */
.marker-yellow {
  /* 最初は非表示にしておく、非表示だとレイアウト崩れるので背景と同じ色 */
  background: linear-gradient(transparent 50%, transparent 0%);
}
/* 本文内ピンクマーカー */
.marker-pink {
  /* 最初は非表示にしておく、非表示だとレイアウト崩れるので背景と同じ色 */
  background: linear-gradient(transparent 50%, transparent 0%);
  font-size: 18px;
}

/* 本文見出し */
/*
  ハートアイコンの上に「謎１」などの文字（riddle-answer-header-h1）
  を重ねるために、上に動かす
  上に動かした分、タイトル（riddle-answer-header-h3）と
  コンテンツ（answer-contents-text）を上に動かす
*/
.riddle-answer-header-h1 {
  position: relative;
  z-index: 2;
}
.riddle-header {
  z-index: 5;
  color: white;
  font-size: 50px;
  transform: translate(0%, -260%);
}
.riddle-header-back-icon {
  transform: translate(0%, -40%);
  color: rgba(0, 0, 0, 0.80);
}
.answer-contents-text {
  color: transparent; /* 最初は非表示にしておく、非表示だとレイアウト崩れるので背景と同じ色 */
}
.answer-contents-text-1 {
  transform: translate(0, -10%);
}
.answer-contents-text-2 {
  transform: translate(0, -5%);
}
.answer-contents-text-3 {
  transform: translate(0, -5%);
}
.answer-contents-text-4 {
  transform: translate(0, -10%);
}
.answer-contents-text-5 {
  transform: translate(0, -10%);
}

/*
  ヘッダーの共通設定
*/
.riddle-answer-header-h3,
#riddle-answer-header-h3-dummy-top-1,
#riddle-answer-header-h3-dummy-bottom-1,
#riddle-answer-header-h3-dummy-top-2,
#riddle-answer-header-h3-dummy-bottom-2,
#riddle-answer-header-h3-dummy-top-3,
#riddle-answer-header-h3-dummy-bottom-3,
#riddle-answer-header-h3-dummy-top-4,
#riddle-answer-header-h3-dummy-bottom-4,
#riddle-answer-header-h3-dummy-top-5,
#riddle-answer-header-h3-dummy-bottom-5 {
  background: transparent;
  transform: translate(0, -65%);
  padding: .5em;
  max-width: 800px;
  margin: auto;
  color: transparent; /* 最初は非表示にしておく、非表示だとレイアウト崩れるので背景と同じ色 */
}

/*
  ヘッダーの囲み線
*/
/*
  Javascriptでバラバラのタイミングで動かすように
  指定する都合上、細かくクラスを分けている
*/
#riddle-answer-header-h3-dummy-top-1,
#riddle-answer-header-h3-dummy-top-2,
#riddle-answer-header-h3-dummy-top-3,
#riddle-answer-header-h3-dummy-top-4,
#riddle-answer-header-h3-dummy-top-5 {
  border-bottom: 1px solid gray;
  transform-origin: left;
}
#riddle-answer-header-h3-dummy-bottom-1,
#riddle-answer-header-h3-dummy-bottom-2,
#riddle-answer-header-h3-dummy-bottom-3,
#riddle-answer-header-h3-dummy-bottom-4,
#riddle-answer-header-h3-dummy-bottom-5 {
  border-top: 1px solid gray;
  transform-origin: right;
}
#riddle-answer-header-h3-dummy-top-1,
#riddle-answer-header-h3-dummy-top-2,
#riddle-answer-header-h3-dummy-top-3,
#riddle-answer-header-h3-dummy-top-4,
#riddle-answer-header-h3-dummy-top-5,
#riddle-answer-header-h3-dummy-bottom-1,
#riddle-answer-header-h3-dummy-bottom-2,
#riddle-answer-header-h3-dummy-bottom-3,
#riddle-answer-header-h3-dummy-bottom-4,
#riddle-answer-header-h3-dummy-bottom-5 {
  transform: translate(0, -340%) scaleX(0);
}

#riddle-answer-header-h3-1::before,
#riddle-answer-header-h3-1::after,
#riddle-answer-header-h3-2::before,
#riddle-answer-header-h3-2::after,
#riddle-answer-header-h3-3::before,
#riddle-answer-header-h3-3::after,
#riddle-answer-header-h3-4::before,
#riddle-answer-header-h3-4::after,
#riddle-answer-header-h3-5::before,
#riddle-answer-header-h3-5::after {
  content: '';
  position: absolute;
  top: -20px;
  width: 1px;
  height: calc(100% + 40px);
  background-color: gray;
  transform: scaleY(0);
  animation-delay: 1.5s;
}
#riddle-answer-header-h3-1::before,
#riddle-answer-header-h3-2::before,
#riddle-answer-header-h3-3::before,
#riddle-answer-header-h3-4::before,
#riddle-answer-header-h3-5::before {
  left: 10px;
  transform-origin: top;
}
#riddle-answer-header-h3-1::after,
#riddle-answer-header-h3-2::after,
#riddle-answer-header-h3-3::after,
#riddle-answer-header-h3-4::after,
#riddle-answer-header-h3-5::after {
  right: 10px;
  transform-origin: bottom;
}
/*
  Javascriptでバラバラのタイミングで動かすため
  keyframeルールを分ける
*/
#riddle-answer-header-h3-1::before,
#riddle-answer-header-h3-1::after {
  animation: border_anim_rightleft1 1s linear forwards;
}
#riddle-answer-header-h3-2::before,
#riddle-answer-header-h3-2::after {
  animation: border_anim_rightleft2 1s linear forwards;
}
#riddle-answer-header-h3-3::before,
#riddle-answer-header-h3-3::after {
  animation: border_anim_rightleft3 1s linear forwards;
}
#riddle-answer-header-h3-4::before,
#riddle-answer-header-h3-4::after {
  animation: border_anim_rightleft4 1s linear forwards;
}
#riddle-answer-header-h3-5::before,
#riddle-answer-header-h3-5::after {
  animation: border_anim_rightleft5 1s linear forwards;
}

/* ==============================
  固定背景
============================== */
/*
  固定背景
*/
/*
  iOSでbackground-attachment: fixed;と
  background-size: cover;が一緒に使えないので
  @mediaを指定
*/
.parallax-bg {
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 130px;
}
@media screen and (max-width: 768px) and (-webkit-min-device-pixel-ratio: 0) {
  _::-webkit-full-page-media, _:future, :root .parallax-bg {
    background-attachment: scroll;
  }
}

.img-bg-01 {
  background-image:url('../assets/eft-background-colorful-flower.jpg');
}
.img-bg-02 {
  background-image: url('../assets/eft-background-whiteday.jpg');
}
.answer-contents {
  background-color: white;
  padding: 1em;
}

/* ==============================
  ハンバーガーメニューアイコン
============================== */
.btn-bars {
  position: fixed;
  margin: 10px;
  left: 0;
  top: 0;
  height: 50px;
  width: 50px;
  z-index: 101!important;
}

/* ==============================
  サイドバー
============================== */
/*
  サイドバーの目次リンク
*/
#sidebar-1 {
  z-index: 10!important;
}
#sidebar-1 .nav-link {
  color: white!important;
  text-decoration: underline;
}
#sidebar-1 .nav-link:hover {
  color: white!important;
  text-decoration: none;
}

/* ==============================
  固定ボタン
============================== */
/*
  固定ボタン共通
*/
.fixed-buttons {
  position: fixed;
  right: 0px;
  top: 50%;
  padding: 0;
  z-index: 100;
}
/*
  「上に戻る」ボタン
*/
.btn-back-to-top {
  color: rgba(128,128,128,0.7); /* gray */
  background: transparent;
  border: transparent;
  height: 60px;
  width: 60px;
  margin: 0 0 3px 0;
}
@media screen and (min-width: 768px) {
  .btn-back-to-top:hover {
    color: white;
    background: gray;
  }
}
/*
  「脱出する」ボタン
*/
.btn-escape-fixed {
  color: rgba(128,128,128,0.7); /* gray */
  background: transparent;
  border: transparent;
  height: 60px;
  width: 60px;
  margin: 0 5px 3px 0;
}
@media screen and (min-width: 768px) {
  .btn-escape-fixed:hover {
    color: white;
    background: gray;
  }
}
/*
  「Twitter」ボタン
*/
.btn-twitter-fixed {
  color: rgba(128,128,128,0.7); /* gray */
  background: transparent;
  border: transparent;
  height: 60px;
  width: 60px;
  margin: 0 5px 3px 0;
}
@media screen and (min-width: 768px) {
  .btn-twitter-fixed:hover {
    color: white;
    background: gray;
  }
}
</style>
