import React from 'react';
import ReactDOM from 'react-dom';
/**
 * Import the stylesheet you want used. Here we just reference
 * the main SCSS file we have in the styles directory and then it gets extracted
 * to a more tranditional stylesheet
 */
import '../styles/importer.scss';

import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root')
);
