import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Route, Switch, withRouter } from 'react-router-dom'

import { injectRouteStore } from '../stores/RootStore'

function buildRoute(path, Component, props) {
  return (
    <Route
      key={path}
      exact
      path={path}
      render={routerProps => {
        return <Component {...props} {...routerProps} />
      }}
    />
  )
}

@withRouter
@injectRouteStore
class Resource extends React.Component {
  constructor(props) {
    super(props)
    this.registerRoutes(this.props)
  }

  registerRoutes(props) {
    if (props.browse) {
      props.routeStore.add(`${props.name}:browse`, `${props.path}/browse`)
    }
    if (props.read) {
      props.routeStore.add(`${props.name}:read`, `${props.path}/:id`)
    }
    if (props.edit) {
      props.routeStore.add(`${props.name}:edit`, `${props.path}/:id/edit`)
    }
    if (props.add) {
      props.routeStore.add(`${props.name}:add`, `${props.path}/add`)
    }
    if (props.deleter) {
      props.routeStore.add(`${props.name}:delete`, `${props.path}/:id/delete`)
    }
    // props.actions.forEach(action => props.routeStore.add(`${action.name}`, `${action.path}`))
  }

  render() {
    const { path, browse, read, edit, add, deleter, actions = [] } = this.props
    const routes = actions.map(([actionName, actionPath, component]) => {
      return buildRoute(path, component, {})
    })

    if (browse) {
      routes.push(buildRoute(`${path}/browse`, browse, {}))
    }
    if (read) {
      routes.push(buildRoute(`${path}/:id`, read, {}))
    }
    if (edit) {
      routes.push(buildRoute(`${path}/:id/edit`, edit, {}))
    }
    if (add) {
      routes.push(buildRoute(`${path}/add`, add, {}))
    }
    if (deleter) {
      routes.push(buildRoute(`${path}/:id/delete`, deleter, {}))
    }

    return <Switch>{routes}</Switch>
  }
}
Resource.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  browse: PropTypes.func,
  read: PropTypes.func,
  edit: PropTypes.func,
  add: PropTypes.func,
  deleter: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      component: PropTypes.element.isRequired,
    })
  ),
}

Resource.defaultProps = {
  actions: [],
}

export default Resource
