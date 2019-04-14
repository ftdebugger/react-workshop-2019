import {State} from '../schema/State';
import {ReduxDispatch} from '../actions';

export function createService<T = any>(reducer: (state: State, options: T) => State) {
    // Action creator
    return function(options: T) {
        // Action
        return function(dispatch: ReduxDispatch, getState: () => State) {
            // Reducer
            let newState = reducer(getState(), options);

            if (newState !== getState()) {
                dispatch({
                    type: reducer.name,
                    state: newState
                } as any);
            }
        }
    }
}
