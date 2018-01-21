import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { NavLink, withRouter } from 'react-router-dom'

import { injectRouteStore } from '../../stores/RootStore'

const Link = ({ action, resourceName, routeStore, children, ...params }) => {
  // if (!routeStore.routes.has(`${resourceName}:${action}`)) {
  //   throw new Error(`${action} route for ${resourceName} is not registered.`)
  // }
  return <NavLink to={routeStore.get(`${resourceName}:${action}`, params)}>{children}</NavLink>
}

Link.propTypes = {
  action: PropTypes.string.isRequired,
  resourceName: PropTypes.string.isRequired,
}

const LinkWithRouteStore = injectRouteStore(Link)

export const BrowseLink = props => <LinkWithRouteStore action="browse" {...props} />
export const ReadLink = props => <LinkWithRouteStore action="read" {...props} />
export const EditLink = props => <LinkWithRouteStore action="edit" {...props} />
export const AddLink = props => <LinkWithRouteStore action="add" {...props} />
export const DeleteLink = props => <LinkWithRouteStore action="delete" {...props} />
