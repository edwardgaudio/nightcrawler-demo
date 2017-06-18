import axios from 'axios';

import { UPDATE_CRAWL, LOADING_CRAWL, FAIL_CRAWL,
} from '../constants/ActionTypes';

const CRAWL_URL = '/crawl';

export function updateCrawl(links) {
  return {
    type: UPDATE_CRAWL,
    links,
  };
}

export function loadingCrawl() {
  return {
    type: LOADING_CRAWL,
  };
}

export function failedCrawl() {
  return {
    type: FAIL_CRAWL,
  };
}

export function fetchCrawl(url) {
  return dispatch => {
    dispatch(loadingCrawl());
    return axios.get(CRAWL_URL, {
      params: { url },
    })
    .then(response => {
      dispatch(updateCrawl(response.data.links));
    })
    .catch(err => {});// eslint-disable-line
  };
}
