<template>
    <div :style="`border: 2px solid ${darkSquareColor};`">
        <v-row class="ma-0" no-gutters v-for="(rank, i) in 9" :key="rank">
            <v-col v-for="(file, j) in 9" :key="file">
                <div
                    v-if="coordinates[orientation][String(i)+String(j)]"
                    class="text-center"
                >
                    <!-- :style="`padding-top: ${((containerHeight*GoldenRatio/9)-(fontSize))/2}px`" -->
                    {{coordinates[orientation][String(i)+String(j)]}}
                </div>
                <div class="text-center" :style="`background-color: ${((i+j-1)%2===0)?'white':darkSquareColor}`" v-else>
                    <ChessPieceImage
                        :letter="pieceString[(i*8)+(j-1)]"
                    />
                </div>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';

export default {
    name: 'StaticChessBoard',
    props: ['orientation', 'darkSquareColor', 'pieceString'],
    components: {
        ChessPieceImage,
    },
    data() {
        return {
            coordinates: {
                white: {
                    '00': '8',
                    '10': '7',
                    '20': '6',
                    '30': '5',
                    '40': '4',
                    '50': '3',
                    '60': '2',
                    '70': '1',
                    '80': ' ',
                    '81': 'a',
                    '82': 'b',
                    '83': 'c',
                    '84': 'd',
                    '85': 'e',
                    '86': 'f',
                    '87': 'g',
                    '88': 'h',
                },
                black: {
                    '00': '1',
                    '10': '2',
                    '20': '3',
                    '30': '4',
                    '40': '5',
                    '50': '6',
                    '60': '7',
                    '70': '8',
                    '80': ' ',
                    '81': 'h',
                    '82': 'g',
                    '83': 'f',
                    '84': 'e',
                    '85': 'd',
                    '86': 'c',
                    '87': 'b',
                    '88': 'a',
                },
            },
        };
    },
}
</script>

<style>

</style>