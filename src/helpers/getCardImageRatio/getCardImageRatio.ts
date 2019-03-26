import {CardSchema} from '../../schema/CardSchema';

export function getCardImageRatio(card: CardSchema): number {
    if (!card.content || card.content.length === 0) {
        return 0;
    }

    let {content} = card.content[0];

    if (!content || !content.sizes || !content.sizes.orig) {
        return 0;
    }

    let {width, height} = content.sizes.orig;

    return height / width;
}
