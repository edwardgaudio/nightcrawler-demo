import axios from 'axios';

import { UPDATE_ADD_LINK, LOADING_ADD_LINK, FAIL_ADD_LINK,
} from '../constants/ActionTypes';

const ADD_LINK_URL = '/links';

export function updateAddLink(links) {
  return {
    type: UPDATE_ADD_LINK,
    links,
  };
}

export function loadingAddLink() {
  return {
    type: LOADING_ADD_LINK,
  };
}

export function failedAddLink() {
  return {
    type: FAIL_ADD_LINK,
  };
}
/**
* @params: link:{link_text, href, source(optional)}
**/
export function addLink(link) {
  return dispatch => {
    dispatch(loadingAddLink());
    return axios.post(ADD_LINK_URL, { link })
    .then(response => {
      dispatch(updateAddLink(response.data.links));
    })
    .catch(err => {
      dispatch(failedAddLink(err));
    });
  };
}
