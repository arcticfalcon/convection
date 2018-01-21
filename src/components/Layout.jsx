import React from 'react'
import PropTypes from 'prop-types'

const Layout = ({ title, actions, children }) => (
  <div>
    {title}
    {children}
    {actions}
  </div>
)

Layout.propTypes = {
  title: PropTypes.string.isRequired,
  // actions: PropTypes.oneOfType([PropTypes.node, PropTypes.func]),
}

export default Layout
