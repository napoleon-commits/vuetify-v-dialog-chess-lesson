<template>
  <div>
    <div id="default-chess-board">
      <static-chess-board />
    </div>
    <hr />
    <div id="southside-chess-board">
      <static-chess-board />
    </div>
    <hr />
    <div id="dallas-county-chess-board">
      <static-chess-board />
    </div>
    <hr />
    <div id="selma-chess-board">
      <static-chess-board />
    </div>
    <hr />
    <div id="keith-chess-board">
      <static-chess-board />
    </div>
  </div>
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
  #default-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(127,127,127)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #southside-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(255,5,5)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #dallas-county-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(70,165,81)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #selma-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(155,221,255)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #keith-chess-board > div > div {
    background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' version='1.1' viewBox='0 0 800 800'%3E%3Cg id='brown-board'%3E%3Cg id='Light' fill='%23FFF'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Frame' fill='none'%3E%3Crect width='800' height='800'/%3E%3C/g%3E%3Cg id='Dark' fill='rgb(0,110,156)'%3E%3Cg id='raz'%3E%3Cg id='dva'%3E%3Cg id='tri'%3E%3Crect x='100' width='100' height='100'/%3E%3Crect x='300' width='100' height='100'/%3E%3Crect x='500' width='100' height='100'/%3E%3Crect x='700' width='100' height='100'/%3E%3C/g%3E%3Cuse transform='translate(-100,100)' xlink:href='%23tri'/%3E%3C/g%3E%3Cuse transform='translate(0,200)' xlink:href='%23dva'/%3E%3C/g%3E%3Cuse transform='translate(0,400)' xlink:href='%23raz'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E");
  }
  #default-chess-board > div {
    background-color: initial !important;
  }
  #southside-chess-board > div {
    background-color: initial !important;
  }
  #dallas-county-chess-board > div {
    background-color: initial !important;
  }
  #selma-chess-board > div {
    background-color: initial !important;
  }
  #keith-chess-board > div {
    background-color: initial !important;
  }
  .merida .cg-board piece.rook.black, 
  .merida .cg-board piece.knight.black,
  .merida .cg-board piece.bishop.black,
  .merida .cg-board piece.queen.black,
  .merida .cg-board piece.king.black,
  .merida .cg-board piece.pawn.black,
  .merida .cg-board piece.pawn.white,
  .merida .cg-board piece.rook.white,
  .merida .cg-board piece.knight.white,
  .merida .cg-board piece.bishop.white,
  .merida .cg-board piece.queen.white,
  .merida .cg-board piece.king.white {
    background-color: initial !important;
  }
</style>
