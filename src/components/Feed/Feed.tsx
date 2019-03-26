import * as React from 'react';
import {CollectionSchema} from '../../schema/CollectionSchema';
import {CardSchema} from '../../schema/CardSchema';
import {RequestQuery} from '../../schema/RequestQuery';
import {Spinner} from '../Spinner/Spinner';
import {Card} from '../Card/Card';
import {Infinite} from '../Infinite/Infinite';
import {Cards} from '../Cards/Cards';

export interface FeedProps {

}

interface ComponentState {
    items?: CardSchema[];
    next?: RequestQuery;
}

export class Feed extends React.Component<FeedProps, ComponentState> {
    public state: ComponentState = {};

    public componentDidMount(): void {
        this.fetch().catch((error) => console.error(error));
    }

    async fetch(query: RequestQuery = {}) {
        let url = new URL(location.href + '/collections/api/user/feed');

        for (let [key, value] of Object.entries(query)) {
            url.searchParams.append(key, String(value));
        }

        let response = await fetch(url.toString(), {credentials: 'same-origin'});
        let {next, results}: CollectionSchema<CardSchema> = await response.json();
        let {items = []} = this.state;

        this.setState({items: items.concat(results), next});
    }

    async fetchNext() {
        let {next} = this.state;

        if (next) {
            await this.fetch(next);
        }
    }

    render() {
        let {next, items} = this.state;

        if (!items) {
            return (
                <Spinner screen />
            );
        }

        console.log(next, items)

        return (
            <Cards
                items={items}
                hasNext={Boolean(next)}
                fetchNext={() => this.fetchNext()}
            />
        );
    }

}
