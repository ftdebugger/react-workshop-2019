import {State} from '../../schema/State';
import {ReduxAction, ActionType} from '../../actions';

const DEFAULT_STATE: State = {
    tags: {
        current: 'les',
    },
};

export function rootReducer(state: State = DEFAULT_STATE, action: ReduxAction): State {
    // Uncomment for services
    // return action.state;

    if (action.type === ActionType.SET_CURRENT_TAG) {
        return {
            ...state,

            tags: {
                ...state.tags,

                current: action.tag,
            },
        };
    }

    if (action.type === ActionType.SET_CARDS) {
        return {
            ...state,

            cards: action.cards,
        };
    }

    return state;
}
