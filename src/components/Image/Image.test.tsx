import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Image} from './Image';

describe('Image', function () {
    it('no image', function() {
        let component = renderer.create(<Image />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('with image', function() {
        let component = renderer.create(
            <Image
                src="https://avatars.mds.yandex.net/get-pdb/27625/7c81ce06-f70e-405b-87b4-fe826ba9362e/s375"
            />
        );

        expect(component.toJSON()).toMatchSnapshot();
    });
});
