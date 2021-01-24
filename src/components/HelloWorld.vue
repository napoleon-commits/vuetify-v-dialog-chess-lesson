<template>
  <static-chess-board />
</template>

<script>
import StaticChessBoard from './subcomponents/StaticChessBoard.vue'
export default {
  components: { StaticChessBoard },
  name: 'HelloWorld',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .cg-board-wrap {
    margin: auto;
  }
</style>
