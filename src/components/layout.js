import React from "react"
import PropTypes from "prop-types"

import Header from "./header"
import Footer from "./footer"

import "typeface-roboto"
import "./layout.css"

const Layout = ({ children, transparentHeader }) => {
  return (
    <>
      <Header transparent={transparentHeader} />
      {!transparentHeader && <div className="h-16" />}
      <main>{children}</main>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  transparentHeader: PropTypes.bool,
}

export default Layout
