<template>
    <div :style="`color: black; font-size: ${tileHeight * GoldenRatio}px;`">
        <div v-if="letter==='r'">&#9820;</div>
        <div v-else-if="letter==='n'">&#9822;</div>
        <div v-else-if="letter==='b'">&#9821;</div>
        <div v-else-if="letter==='q'">&#9819;</div>
        <div v-else-if="letter==='k'">&#9818;</div>
        <div v-else-if="letter==='p'">&#9823;</div>
        <div v-else-if="letter==='R'">&#9814;</div>
        <div v-else-if="letter==='N'">&#9816;</div>
        <div v-else-if="letter==='B'">&#9815;</div>
        <div v-else-if="letter==='Q'">&#9813;</div>
        <div v-else-if="letter==='K'">&#9812;</div>
        <div v-else-if="letter==='P'">&#9817;</div>
        <div v-else>.</div>
    </div>
</template>

<script>
import GoldenRatio from '@/static/GoldenRatio';

export default {
    name: 'ChessPieceImage',
    props: ['letter', 'tileHeight',],
    data(){
        return {
            GoldenRatio,
        };
    },
}
</script>

<style>

</style>