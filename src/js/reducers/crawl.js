import {
  UPDATE_CRAWL,
  LOADING_CRAWL,
  FAIL_CRAWL } from '../constants/ActionTypes';

export default function forecast(state = { links: [] }, action) {
  switch (action.type) {
    case LOADING_CRAWL:
      return state;
    case UPDATE_CRAWL:
      return { links: action.links };
    case FAIL_CRAWL:
      return state;
    default:
      return state;
  }
}
