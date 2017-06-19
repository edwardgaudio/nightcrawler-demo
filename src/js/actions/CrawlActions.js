import axios from 'axios';

import { UPDATE_FETCH_URL, LOADING_FETCH_URL, FAIL_FETCH_URL,
} from '../constants/ActionTypes';

const FETCH_URL_URL = '/crawl';// Funny name

export function updateFetchUrl(links) {
  return {
    type: UPDATE_FETCH_URL,
    links,
  };
}

export function loadingFetchUrl() {
  return {
    type: LOADING_FETCH_URL,
  };
}

export function failedFetchUrl() {
  return {
    type: FAIL_FETCH_URL,
  };
}

export function fetchUrl(url) {
  return dispatch => {
    dispatch(loadingFetchUrl());
    return axios.get(FETCH_URL_URL, {
      params: { url },
    })
    .then(response => {
      dispatch(updateFetchUrl(response.data.links));
    })
    .catch(err => {
      dispatch(failedFetchUrl(err));
    });
  };
}
