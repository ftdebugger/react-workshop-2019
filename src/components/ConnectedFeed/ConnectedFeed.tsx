import {connect} from 'react-redux';
import {Feed} from '../Feed/Feed';
import {State} from '../../schema/State';
import {ReduxDispatch} from '../../actions';
import {fetchCards} from '../../actions/fetchCards';

function stateToProps(state: State) {
    return {
        tag: state.tags && state.tags.current,
        items: state.cards && state.cards.results,
        hasNext: Boolean(state.cards && state.cards.next),
    };
}

function dispatchToProps(dispatch: ReduxDispatch) {
    return {
        async fetch(reset: boolean) {
            dispatch(fetchCards(reset));
        }
    };
}

export const ConnectedFeed = connect(stateToProps, dispatchToProps)(Feed);
