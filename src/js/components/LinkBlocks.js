import React from 'react';
import PropTypes from 'prop-types';
import LinkBlock from './LinkBlock';

const LinkBlocks = ({ links, _fetchUrl, _addLink }) => (
  <div className="links-block-container">
    {links.map((link, index) => (
      <LinkBlock key={index} link={link} fetchUrl={_fetchUrl} addLink={_addLink} />
    ))}
  </div>);

LinkBlocks.propTypes = {
  links: PropTypes.array.isRequired,
  _fetchUrl: PropTypes.func.isRequired,
  _addLink: PropTypes.func.isRequired,
};

export default LinkBlocks;
