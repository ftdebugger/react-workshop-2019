import React from 'react';

import {storiesOf} from '@storybook/react';

import {Infinite} from './Infinite';

storiesOf('Infinite', module)
    .add('default', () => (
        <Infinite
            fetchNext={() => Promise.resolve()}
        />
    ));
