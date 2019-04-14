import {ReduxThunkAction, setCards} from './index';
import {CollectionSchema} from '../schema/CollectionSchema';
import {CardSchema} from '../schema/CardSchema';

export function fetchCards(reset: boolean): ReduxThunkAction {
    return async (dispatch, getState) => {
        let state = getState();
        let tag = state.tags && state.tags.current || 'les';
        let query = !reset && state.cards && state.cards.next || {};

        let url = new URL(location.origin + '/collections/api/cards/channels/' + encodeURIComponent(tag));

        for (let [key, value] of Object.entries(query)) {
            url.searchParams.append(key, String(value));
        }

        let response = await fetch(url.toString(), {credentials: 'same-origin'});
        let cards: CollectionSchema<CardSchema> = await response.json();

        state = getState();

        if (state.cards && !reset) {
            cards = {
                ...cards,
                results: [
                    ...state.cards.results,
                    ...cards.results,
                ],
            };
        }

        dispatch(setCards(cards));
    }
}
