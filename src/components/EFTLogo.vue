<template>
  <b-container class="eft-logo">
    <b-row>
      <b-col>
        <b-jumbotron
          header="2000年からの脱出"
          @click="$emit('logo-clicked')"
        ></b-jumbotron>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
  BJumbotron,
} from 'bootstrap-vue';

export default {
  name: 'EFTLogo',
  props: {
    msg: String,
  },
  components: {
    BContainer,
    BRow,
    BCol,
    BJumbotron,
  },
};
</script>

<style scoped>

.jumbotron {
  background: url("../assets/eft-logo-background.jpg") center center no-repeat;
  background-size: cover;
  height: 100%;
  cursor: pointer; /* ホームへのリンクが貼っていあるのでポインターにする */
}
/* jumbotronの中の文字 */
.jumbotron .display-3 {
  color: white;
  text-align: left;
}

</style>
