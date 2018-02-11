import React from 'react'
import PropTypes from 'prop-types'
import { action, observable } from 'mobx'
import { Provider, observer } from 'mobx-react'
import { Router } from 'react-router'
import createBrowserHistory from 'history/createBrowserHistory'
import { IntlProvider, defineMessages } from 'react-intl'

import RootStore from './stores/RootStore'
import { syncHistoryWithStore } from './routing/History'

const rootStore = new RootStore()
const browserHistory = createBrowserHistory()
const history = syncHistoryWithStore(browserHistory, rootStore.historyStore)

const messages = {
  'common.welcome': 'The default locale of this example app.',
}

@observer
class Admin extends React.Component {
  @observable menu

  @action
  componentDidMount() {
    // Defer menu rendering so resources register routes
    this.menu = this.props.menu
  }

  render() {
    const { children, layout: Layout } = this.props

    return (
      <IntlProvider locale="en" messages={messages}>
        <Provider rootStore={rootStore}>
          <Router history={history}>
            <Layout menu={this.menu} content={children} />
          </Router>
        </Provider>
      </IntlProvider>
    )
  }
}

const BasicLayout = ({ menu, content }) => (
  <div>
    <div style={{ width: '20%', float: 'left' }}>{menu}</div>
    <div style={{ width: '80%', float: 'left' }}>{content}</div>
  </div>
)

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
  menu: PropTypes.element.isRequired,
  layout: PropTypes.func.isRequired,
}

Admin.defaultProps = {
  layout: BasicLayout,
}

export default Admin
