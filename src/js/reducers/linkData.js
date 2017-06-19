import {
  UPDATE_FETCH_URL,
  LOADING_FETCH_URL,
  FAIL_FETCH_URL } from '../constants/ActionTypes';

const defaultState = {
  links: [{ linkText: 'HackerNews', href: 'https://news.ycombinator.com/' }],
  activeLink: null,
};

export default function crawl(state = defaultState, action) {
  switch (action.type) {
    case LOADING_FETCH_URL:
      return state;
    case UPDATE_FETCH_URL:
      const activeLink = action.links[0] || null;
      return {
        links: action.links,
        activeLink,
      };
    case FAIL_FETCH_URL:
      return state;
    default:
      return state;
  }
}
