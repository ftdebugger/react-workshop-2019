import * as React from 'react';
import {CardSchema} from '../../schema/CardSchema';
import {Card} from '../Card/Card';
import {Infinite} from '../Infinite/Infinite';

export interface CardsProps {
    items: CardSchema[];
    hasNext?: boolean;

    fetchNext(): Promise<void>;
}
//
export const Cards: React.FC<CardsProps> =
    function Cards({items, hasNext, fetchNext}: CardsProps) {
        return (
            <React.Fragment>
                {items.map((item) => (
                    <Card key={item.id} card={item} />
                ))}

                {hasNext && (
                    <Infinite fetchNext={fetchNext} />
                )}
            </React.Fragment>
        );
    };
