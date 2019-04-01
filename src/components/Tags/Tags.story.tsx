import React from 'react';

import {storiesOf} from '@storybook/react';

import {Tags} from './Tags';

storiesOf('Tags', module)
    .add('default', () => (
        <Tags />
    ))
    .add('selected', () => (
        <Tags current="les" />
    ));
