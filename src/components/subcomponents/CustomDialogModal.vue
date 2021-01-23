<template>
  <v-row no-gutters style="height: 100%;">
      <v-col>Foo</v-col>
      <v-col id="chess-board-column">
          width: {{chessBoardColumnWidth}} <br />
          height: {{chessBoardColumnHeight}} <br />
      </v-col>
  </v-row>
</template>

<script>
import $ from 'jquery';

export default {
    name: 'CustomDialogModal',
    data() {
        return {
            chessBoardColumnWidth: null,
            chessBoardColumnHeight: null,
        };
    },
    methods: {
        updateChessBoardDimensions() {
            this.chessBoardColumnWidth = $('#chess-board-column').width();
            this.chessBoardColumnHeight = $('#chess-board-column').height();
        },
    },
    mounted() {
        this.$nextTick(()=>{
            this.updateChessBoardDimensions();
        });
        window.addEventListener('resize', this.updateChessBoardDimensions);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.updateChessBoardDimensions);
    },
}
</script>

<style>

</style>