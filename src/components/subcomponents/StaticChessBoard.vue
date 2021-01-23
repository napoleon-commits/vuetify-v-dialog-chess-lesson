<template>
    <div
        :style="`
            padding-top: ${((containerHeight)-(containerHeight*GoldenRatio))/2}px;
            padding-left: ${((containerWidth)-(containerWidth*GoldenRatio))/2}px;
            color: white;
        `"
    >
        <div
            :style="`
                border: 2px solid ${darkSquareColor};
                width: ${containerWidth*GoldenRatio+4}px;
                height: ${containerHeight*GoldenRatio+4}px;
            `"
        >
            <v-row no-gutters v-for="(rank, i) in 9" :key="rank">
                <v-col
                    :style="`
                        height: ${containerHeight*GoldenRatio/9}px;
                        background-color: ${
                            (coordinates[orientation][String(i)+String(j)])?'':((i+j-1)%2===0)?'white':darkSquareColor
                        }
                    `"
                    class="text-center" 
                    v-for="(file, j) in 9"
                    :key="file"
                >
                    <div
                        v-if="coordinates[orientation][String(i)+String(j)]"
                        :style="`padding-top: ${((containerHeight*GoldenRatio/9)-(fontSize))/2}px`"
                    >
                        {{coordinates[orientation][String(i)+String(j)]}}
                    </div>
                    <div style="cursor: pointer;" v-else>
                        <ChessPieceImage
                            :letter="pieceString[(i*8)+(j-1)]"
                            :tileHeight="containerHeight*GoldenRatio/9"
                        />
                    </div>
                </v-col>
            </v-row>
        </div>
    </div>
</template>

<script>
import GoldenRatio from '@/static/GoldenRatio';
import ChessPieceImage from '@/components/subcomponents/ChessPieceImage';

export default {
    name: 'StaticChessBoard',
    props: ['containerWidth', 'containerHeight', 'orientation', 'darkSquareColor', 'pieceString'],
    components: {
        ChessPieceImage,
    },
    data() {
        return {
            GoldenRatio,
            fontSize: 16,
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