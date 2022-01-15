<!-- コンテンツページ、解答ページ共に本テンプレを利用 -->
<template>
  <b-container class="eft-footer">
      <b-row>
          <b-col>
            <small>「２０００年からの脱出」 © 2021</small>
          </b-col>
      </b-row>
  </b-container>
</template>

<script>
import {
  BContainer,
  BRow,
  BCol,
} from 'bootstrap-vue';

export default {
  name: 'EFTFooter',
  components: {
    BContainer,
    BRow,
    BCol,
  },
};
</script>
