import {Dispatch} from 'redux';
import {State} from '../schema/State';
import {CollectionSchema} from '../schema/CollectionSchema';
import {CardSchema} from '../schema/CardSchema';

export enum ActionType {
    SET_CURRENT_TAG = 'SET_CURRENT_TAG',
    SET_CARDS = 'SET_CARDS',
}

export function setCurrentTag(tag: string) {
    return {
        type: ActionType.SET_CURRENT_TAG as ActionType.SET_CURRENT_TAG,
        tag,
    };
}

export function setCards(cards: CollectionSchema<CardSchema>) {
    return {
        type: ActionType.SET_CARDS as ActionType.SET_CARDS,
        cards,
    };
}

export type ReduxAction = ReturnType<typeof setCurrentTag>
    | ReturnType<typeof setCards>;

export interface ReduxThunkAction<T = any> {
    (dispatch: ReduxDispatch, getState: () => State): T;
}

export interface ReduxDispatch {
    (action: ReduxAction): void;

    <T = any>(action: ReduxThunkAction<T>): T;
}
