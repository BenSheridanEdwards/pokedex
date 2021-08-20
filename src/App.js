import React from 'react';
import PropTypes from 'prop-types';
import './sass/styles.scss';

const App = ({ children }) => <div className="content">{children}</div>;

App.propTypes = {
  children: PropTypes.node,
};

export default App;
