import { FETCH_OVERVIEW, MAKE_TRANSACTION } from '../actions/index';

export default function (state = {}, action) {
    switch (action.type) {
        case FETCH_OVERVIEW:
            return action.payload.data;
        case MAKE_TRANSACTION:
            return action.payload.data;
        default:
            return state
    }
}