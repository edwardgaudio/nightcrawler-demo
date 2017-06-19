import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as crawlActions from '../actions/crawlActions';
import Crawl from './Crawl';

class App extends Component {
  render() {
    const { crawlData, actions } = this.props;
    return (
      <main>
        <h1>NightCrawler.  -(*\*)-</h1>
        <Crawl crawlData={crawlData} actions={actions} />
      </main>
    );
  }
}

App.propTypes = {
  crawlData: PropTypes.object.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    crawlData: state.crawl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(crawlActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
