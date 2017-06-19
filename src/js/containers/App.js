import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import LinkList from './LinkList';

class App extends Component {
  render() {
    const { linkData } = this.props;
    return (
      <main>
        <h1>NightCrawler.  -(*\*)-</h1>
        <LinkList linkData={linkData} />
      </main>
    );
  }
}

App.propTypes = {
  linkData: PropTypes.object.isRequired,
};

function mapStateToProps(state) {
  return {
    linkData: state.linkData,
  };
}

export default connect(
  mapStateToProps,
  null,
)(App);
