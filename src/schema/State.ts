import {TagsState} from './TagsState';
import {CollectionSchema} from './CollectionSchema';
import {CardSchema} from './CardSchema';

export interface State {
    cards?: CollectionSchema<CardSchema>;
    tags?: TagsState;
}
