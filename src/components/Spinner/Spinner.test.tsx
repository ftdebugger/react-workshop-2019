import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Spinner} from './Spinner';

describe('Spinner', function () {
    it('render default', function() {
        let component = renderer.create(<Spinner />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('render screen mod', function() {
        let component = renderer.create(<Spinner screen />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
