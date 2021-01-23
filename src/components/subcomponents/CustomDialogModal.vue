<template>
  <v-row no-gutters style="height: 100%;">
      <v-col>Foo</v-col>
      <v-col>
          <StaticChessBoard
            :orientation="'white'"
            :darkSquareColor="'red'"
            :pieceString="StartingPositionString"
          />
      </v-col>
  </v-row>
</template>

<script>
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
        };
    },
}
</script>

<style>

</style>