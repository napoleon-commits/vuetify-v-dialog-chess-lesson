<template>
  <v-row no-gutters style="height: 100%;">
      <v-col>Foo</v-col>
      <v-col id="chess-board-container">
          <StaticChessBoard
            :orientation="'white'"
            :darkSquareColor="'red'"
            :pieceString="StartingPositionString"
            :containerHeight="chessboardContainerHeight"
          />
      </v-col>
  </v-row>
</template>

<script>
import $ from 'jquery';
import StaticChessBoard from '@/components/subcomponents/StaticChessBoard';
import StartingPositionString from '@/static/StartingPositionString'
export default {
    name: 'CustomDialogModal',
    components: {
        StaticChessBoard,
    },
    data() {
        return {
            StartingPositionString,
            chessboardContainerHeight: null,
        };
    },
    methods: {
        updateContainerDimensions() {
            this.chessboardContainerHeight = $('#chess-board-container').height();
        }
    },
    mounted() {
        this.$nextTick(()=>{
            this.updateContainerDimensions();
        });
        window.addEventListener('resize', this.updateContainerDimensions);
    },
    beforeDestroy(){
        window.removeEventListener('resize', this.updateContainerDimensions);
    },
}
</script>

<style>

</style>