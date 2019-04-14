import {connect} from 'react-redux';
import {Tags} from '../Tags/Tags';
import {State} from '../../schema/State';
import {Dispatch} from 'redux';
import {setCurrentTag} from '../../actions';

function stateToProps(state: State) {
    return {
        current: state.tags && state.tags.current,
    };
}

function dispatchToProps(dispatch: Dispatch) {
    return {
        onClick(slug: string) {
            dispatch(setCurrentTag(slug));
        }
    };
}

export const ConnectedTags = connect(stateToProps, dispatchToProps)(Tags);
