import React from "react";

import PropTypes from "prop-types";

// components
import Header from "components/layouts/basic/Header";

import Footer from "components/layouts/basic/Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="body-wrapper"> {children} </div>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node
};

export default Layout;
