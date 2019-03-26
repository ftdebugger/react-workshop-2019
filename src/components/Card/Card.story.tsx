import React from 'react';

import {storiesOf} from '@storybook/react';

import {Card} from './Card';
import {card, cardWithoutImage} from './fixtures/card';

storiesOf('Card', module)
    .add('default', () => (
        <Card card={card} />
    ))
    .add('no image', () => (
        <Card card={cardWithoutImage} />
    ));
