import CreateChessStringFromObject from '@/utils/CreateChessStringFromObject';

export default {
    demo: [
        {
            moves: [
                CreateChessStringFromObject({
                    'k': [4],
                    'K': [20],
                    'P': [28],
                }),
            ],
            staticBoard: true,
            text: `
                The first position is worth remembering because, no matter whose move it is,
                white will successfully be able to promote the pawn. As you can see,
                the white King is in front of the pawn. That's the key! In this position, if it is black's move,
                the black King must move to either d8 or to f8. Either way,
                the poor King must leave the square on which the white pawn will be promoted.
                White will then be able to move the King forward to gain control over the Queening square.
            `,
        }
    ],
};