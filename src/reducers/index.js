import cardReducer from './cardReducer';
import {combineReducers} from 'redux';

// setting up an all reducers combiner in case we need to add more in the future
const allReducers = combineReducers({
  cardReducer
})

export default allReducers;
