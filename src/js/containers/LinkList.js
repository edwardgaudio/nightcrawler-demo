import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchUrl } from '../actions/crawlActions';
import { addLink } from '../actions/linkActions';
import LinkBlocks from '../components/LinkBlocks';

class LinkListContainer extends Component {
  render() {
    const { links, _fetchUrl, _addLink } = this.props;
    return (
      <div>
        <LinkBlocks links={links} _fetchUrl={_fetchUrl} _addLink={_addLink} />
      </div>
    );
  }
}

LinkListContainer.propTypes = {
  links: PropTypes.array.isRequired,
  _fetchUrl: PropTypes.func.isRequired,
  _addLink: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    links: state.linkData.links,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    _fetchUrl: (url) => {
      dispatch(fetchUrl(url));
    },
    _addLink: (link) => {
      dispatch(addLink(link));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LinkListContainer);
