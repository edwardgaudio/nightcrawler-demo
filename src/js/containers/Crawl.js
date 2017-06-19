import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchCrawl } from '../actions/CrawlActions';
import CrawlResults from '../components/CrawlResults';

class CrawlContainer extends Component {
  render() {
    const { links, fetchUrl } = this.props;
    return (
      <div>
        <CrawlResults links={links} fetchUrl={fetchUrl} />
      </div>
    );
  }
}

CrawlContainer.propTypes = {
  links: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired,
  fetchUrl: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    links: state.crawl.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchUrl: (url) => {
      dispatch(fetchCrawl(url));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CrawlContainer);
