import React from 'react';
import { withRouter } from 'react-router-dom';
import Header from './Header/Header';
import './Story.css';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default withRouter(Layout);
