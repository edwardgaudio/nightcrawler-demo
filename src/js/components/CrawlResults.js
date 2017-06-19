import React from 'react';
import PropTypes from 'prop-types';

const CrawlRow = ({ link, fetchUrl }) => {
  const _fetchUrl = () => {
    fetchUrl(link.href);
  };
  return (
    <div className="link-block">
      <a target="_blank" href={link.href}>{link.linkText}</a>
      <div className="fake-button" onClick={_fetchUrl}>Crawl It!</div>
    </div>
  );
};

const CrawlResults = ({ links, fetchUrl }) => (
  <div className="links-block-container">
    {links.map((link, index) => (
      <CrawlRow key={index} link={link} fetchUrl={fetchUrl} />
    ))}
  </div>);

CrawlResults.propTypes = {
  links: PropTypes.array.isRequired,
};

export default CrawlResults;
