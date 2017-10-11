import React from 'react'
import PropTypes from 'prop-types'
import { action, observable } from 'mobx'
import { Provider, observer } from 'mobx-react'
import { HashRouter as Router } from 'react-router-dom'
import { Grid } from 'semantic-ui-react'
import RouteStore from 'stores/RouteStore'

@observer
class Admin extends React.Component {
  @observable menu

  constructor() {
    super()
    this.routeStore = new RouteStore()
  }

  @action
  componentDidMount() {
    // Defer menu rendering so resources register routes
    this.menu = this.props.menu
  }

  render() {
    const { children } = this.props

    return (
      <Provider routeStore={this.routeStore}>
        <Router>
          <Grid>
            <Grid.Column width={4}>{this.menu}</Grid.Column>
            <Grid.Column width={10}>{children}</Grid.Column>
          </Grid>
        </Router>
      </Provider>
    )
  }
}

// const Admin = ({ menu, children }) => {
//   console.log('admin')
//   return (
//     <Router>
//       <div>
//         {menu}
//         {children}
//       </div>
//     </Router>
//   )
// }

Admin.propTypes = {
  // children: PropTypes.arrayOf(
  // PropTypes.oneOfType([
  //   PropTypes.instanceOf(Resource),
  // PropTypes.instanceOf(Action)
  // ])
  // ),
  menu: PropTypes.any.isRequired,
}

Admin.defaultProps = {}

export default Admin
