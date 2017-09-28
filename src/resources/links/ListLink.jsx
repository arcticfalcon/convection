import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { NavLink } from 'react-router-dom'

const ListLink = ({ resourceName, routeStore, children }) => {
  return <NavLink to={routeStore.routes.get(`${resourceName}:list`)}>{children}</NavLink>
}

ListLink.propTypes = {
  resourceName: PropTypes.string.isRequired,
}

export default inject('routeStore')(observer(ListLink))
