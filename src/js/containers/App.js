import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CrawlActions from '../actions/CrawlActions';
import Crawl from './Crawl';

class App extends Component {
  render() {
    const { crawlData, crawlActions } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">NightCrawler</div>
        <Crawl crawlData={crawlData} actions={crawlActions} />
      </div>
    );
  }
}

App.propTypes = {
  crawlData: PropTypes.object.isRequired,
  crawlActions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    crawlData: state.crawl,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    crawlActions: bindActionCreators(CrawlActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
