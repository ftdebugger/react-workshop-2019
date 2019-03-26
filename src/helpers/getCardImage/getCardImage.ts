import {CardSchema} from '../../schema/CardSchema';

export function getCardImage(card: CardSchema): string | undefined {
    if (!card.content || card.content.length === 0) {
        return;
    }

    let content = card.content[0].content;

    if (content && content.group_id) {
        return `https://avatars.mds.yandex.net/get-pdb/${content.group_id}/${content.avatars_key}/s375`;
    }
}
