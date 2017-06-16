import { combineReducers } from 'redux';
import starwars from './starwars';

const rootReducer = combineReducers({
  starwars,
});

export default rootReducer;
