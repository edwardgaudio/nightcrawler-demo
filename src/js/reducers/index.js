import { combineReducers } from 'redux';
import crawl from './crawl';

const rootReducer = combineReducers({
  crawl,
});

export default rootReducer;
