import React from 'react';

import {storiesOf} from '@storybook/react';

import {Image} from './Image';

storiesOf('Image', module)
    .add('default', () => (
        <Image
            src="https://avatars.mds.yandex.net/get-pdb/27625/7c81ce06-f70e-405b-87b4-fe826ba9362e/s375"
        />
    ));
