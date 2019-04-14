import * as React from 'react';
import {CollectionSchema} from '../../schema/CollectionSchema';
import {CardSchema} from '../../schema/CardSchema';
import {RequestQuery} from '../../schema/RequestQuery';
import {Spinner} from '../Spinner/Spinner';
import {Card} from '../Card/Card';
import {Infinite} from '../Infinite/Infinite';
import {Cards} from '../Cards/Cards';
import {Tags} from '../Tags/Tags';
import {ConnectedTags} from '../ConnectedTags/ConnectedTags';

export interface FeedProps {
    tag?: string;
    items?: CardSchema[];
    hasNext?: boolean;

    fetch(reset: boolean): Promise<void>;
}

export class Feed extends React.Component<FeedProps> {
    public componentDidMount(): void {
        this.props.fetch(true).catch((error) => console.error(error));
    }

    public componentDidUpdate(prevProps: Readonly<FeedProps>): void {
        if (this.props.tag !== prevProps.tag) {
            this.props.fetch(true).catch((error) => console.error(error));
        }
    }

    async fetchNext() {
        let {hasNext} = this.props;

        if (hasNext) {
            await this.props.fetch(false);
        }
    }

    render() {
        let {hasNext, items} = this.props;

        if (!items) {
            return (
                <Spinner screen />
            );
        }

        return (
            <>
                <ConnectedTags />

                <Cards
                    items={items}
                    hasNext={hasNext}
                    fetchNext={() => this.fetchNext()}
                />
            </>
        );
    }

}
