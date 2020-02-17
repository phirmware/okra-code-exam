import { FETCH_TRANSACTIONS, ADD_TRANSACTION } from '../actions/index';


export default function (state = [], action) {
    switch (action.type) {
        case FETCH_TRANSACTIONS:
            return action.payload.data
        case ADD_TRANSACTION:
            return [action.payload.data, ...transactions]
        default: return state
    }
}
