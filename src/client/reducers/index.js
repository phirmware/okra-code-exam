import { combineReducers } from 'redux';
import Overview from './overview_reducer';

const rootReducer = combineReducers({
  overview: Overview
});

export default rootReducer;
