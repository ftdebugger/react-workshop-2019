import * as React from 'react';
import * as renderer from 'react-test-renderer';

import {Card} from './Card';
import {card, cardWithoutImage} from './fixtures/card';

describe('Card', function () {
    it('render default', function() {
        let component = renderer.create(<Card card={card} />);

        expect(component.toJSON()).toMatchSnapshot();
    });

    it('render no image', function() {
        let component = renderer.create(<Card card={cardWithoutImage} />);

        expect(component.toJSON()).toMatchSnapshot();
    });
});
