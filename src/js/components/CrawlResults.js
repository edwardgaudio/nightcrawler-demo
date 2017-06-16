// IMPORTANT, CONVERT THIS TO PROP Component
import React, { Component, PropTypes } from 'react';

export default class CrawlResults extends Component {
  constructor(props, context) {
    super(props, context);
  }
  render() {
    return (
      <div className="crawl-results-container">
          { JSON.stringify(this.props.links) }
      </div>
    );
  }
}

CrawlResults.propTypes = {
  links: PropTypes.array.isRequired,
};
