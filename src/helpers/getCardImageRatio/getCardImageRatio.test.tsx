import {getCardImageRatio} from './getCardImageRatio';

describe('getCardImageRatio', function () {
    it('works on empty card', function() {
        let card: any = {};

        expect(getCardImageRatio(card)).toEqual(0);
    });

    it('works on filled card', function() {
        let card: any = {
            "content": [
                {
                    "content": {
                        "sizes": {
                            "orig": {
                                "width": 1000,
                                "height": 500
                            }
                        }
                    },
                }
            ],
        };

        expect(getCardImageRatio(card)).toEqual(0.5);
    });
});
