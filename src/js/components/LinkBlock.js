import React from 'react';
import PropTypes from 'prop-types';

const LinkBlock = ({ link, fetchUrl, addLink }) => {
  const _fetchUrl = () => {
    fetchUrl(link.href);
  };

  const _addLink = () => {
    addLink(link);
  };
  return (
    <div className="link-block">
      <a target="_blank" href={link.href}>{link.linkText}</a>
      <div className="link-block-buttons">
        <div className="fake-button" onClick={_fetchUrl}>Crawl It!</div>
        <div className="fake-button" onClick={_addLink}>Save It!</div>
      </div>
    </div>
  );
};

LinkBlock.propTypes = {
  link: PropTypes.object.isRequired,
  fetchUrl: PropTypes.func.isRequired,
  addLink: PropTypes.func.isRequired,
};

export default LinkBlock;
