import React from 'react';

import {storiesOf} from '@storybook/react';

import {Cards} from './Cards';
import {cards} from './fixtures/cards';

storiesOf('Cards', module)
    .add('default', () => (
        <Cards
            items={cards}
            hasNext={true}
            fetchNext={() => Promise.resolve()}
        />
    ));

