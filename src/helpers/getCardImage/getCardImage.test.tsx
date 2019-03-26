import {getCardImage} from './getCardImage';

describe('getCardImage', function () {
    it('works', function() {
        let card: any = {
            "content": [
                {
                    "content": {
                        "group_id": 27625,
                        "avatars_key": "7c81ce06-f70e-405b-87b4-fe826ba9362e",
                    },
                }
            ],
        };

        expect(getCardImage(card))
            .toEqual('https://avatars.mds.yandex.net/get-pdb/27625/7c81ce06-f70e-405b-87b4-fe826ba9362e/s375');
    });

    it('not works', function() {
        let card: any = {};

        expect(getCardImage(card)).toEqual(undefined);
    });
});
