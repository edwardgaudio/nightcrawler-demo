import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as CrawlActions from '../actions/CrawlActions';
import CrawlResults from '../components/CrawlResults';

class CrawlContainer extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleFetch = () => {
      this.props.actions.fetchCrawl();
    };
  }
  render() {
    console.log('this props:', this.props);
    const { links } = this.props;
    return (
      <div className="main-app-container">
        <div className="main-app-nav">Crawl:</div>
        <button onClick={this.handleFetch}>CRAWL</button>
        <CrawlResults links={links} />
      </div>
    );
  }
}

CrawlContainer.propTypes = {
  links: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    links: state.crawl.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CrawlActions, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrawlContainer);
