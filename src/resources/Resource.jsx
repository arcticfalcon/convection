import React from 'react'
import PropTypes from 'prop-types'
import { inject, observer } from 'mobx-react'
import { Route, Switch, withRouter } from 'react-router-dom'

function buildRoute(path, Component, props) {
  return (
    <Route
      key={path}
      exact
      path={path}
      render={routerProps => <Component {...props} {...routerProps} />}
    />
  )
}

class Resource extends React.Component {
  constructor(props) {
    super()

    props.routeStore.add(`${props.name}:list`, `${props.path}/list`)
    props.routeStore.add(`${props.name}:show`, `${props.path}/show`)
  }
  render() {
    const { path, list, show, actions = [], service } = this.props

    const routes = actions.map(([actionName, actionPath, component]) => {
      return buildRoute(path, component, {})
    })

    if (list) {
      routes.push(buildRoute(`${path}/list`, list, {}))
    }

    if (show) {
      routes.push(buildRoute(`${path}/:id`, show, {}))
    }

    return <Switch>{routes}</Switch>
  }
}
Resource.propTypes = {
  name: PropTypes.string.isRequired,
  path: PropTypes.string,
  list: PropTypes.func,
  show: PropTypes.func,
  // update: PropTypes.func,
  // create: PropTypes.func,
  // deletee: PropTypes.func,
  actions: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      path: PropTypes.string,
      component: PropTypes.element.isRequired,
    })
  ),
  service: PropTypes.object,
}

Resource.defaultProps = {}

export default inject('routeStore')(withRouter(observer(Resource)))
