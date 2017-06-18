import {
  UPDATE_CRAWL,
  LOADING_CRAWL,
  FAIL_CRAWL } from '../constants/ActionTypes';

const defaultState = {
  links: [{ linkText: 'HackerNews', href: 'https://news.ycombinator.com/' }],
  activeLink: null,
};

export default function crawl(state = defaultState, action) {
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
