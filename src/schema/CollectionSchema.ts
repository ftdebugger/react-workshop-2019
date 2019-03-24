import {RequestQuery} from './RequestQuery';

export interface CollectionSchema<T> {
    next?: RequestQuery;
    prev?: RequestQuery;
    results: T[];
}
