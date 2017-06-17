// IMPORTANT, CONVERT THIS TO PROP Component
import React from 'react';
import PropTypes from 'prop-types';

const CrawlRow = ({ link }) => (
  <div>
    {link.link_text}
    <br />
    <a target="_blank" href={link.href}>{link.href}</a>
    <br />
    <br />
  </div>
);

const CrawlResults = ({ links }) => (
  <div className="crawl-results-container">
    <br />
    {links.map((link, index) => (
      <CrawlRow key={index} link={link} />
    ))}
  </div>);

CrawlResults.propTypes = {
  links: PropTypes.array.isRequired,
};

export default CrawlResults;
