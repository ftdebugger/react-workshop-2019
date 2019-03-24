import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Demo} from './Demo';

describe('Demo', function () {
    it('render default', function() {
        let component = renderer.create(<Demo />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
