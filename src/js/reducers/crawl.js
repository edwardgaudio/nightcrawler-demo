import {
  UPDATE_CRAWL,
  LOADING_CRAWL,
  FAIL_CRAWL } from '../constants/ActionTypes';

export default function crawl(state = { links: [], activeLink: null }, action) {
  switch (action.type) {
    case LOADING_CRAWL:
      return state;
    case UPDATE_CRAWL:
      const activeLink = action.links[0] || null;
      return {
        links: action.links,
        activeLink,
      };
    case FAIL_CRAWL:
      return state;
    default:
      return state;
  }
}
