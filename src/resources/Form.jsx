import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form as SemanticForm, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Errors = observer(({ model }) => <Message error header="Errors" content={model.flatErrors} />)

@observer
class Form extends React.Component {
  componentDidMount() {
    this.init(this.props)
  }

  // componentWillUpdate(newProps) {
  //   this.fetch(newProps)
  // }

  render() {
    let { children, model, otherProps } = this.props

    children = React.Children.map(
      children,
      child => (React.isValidElement(child) ? React.cloneElement(child, { model: model }) : child)
    )

    return (
      <SemanticForm
        onSubmit={model.submit}
        loading={model.busy}
        error={!model.isValid}
        {...otherProps}
      >
        {children}
        {/*<Errors model={model} />*/}
      </SemanticForm>
    )
  }

  init(props) {
    props.model.init(props.match.params)
  }
}

Form.propTypes = {
  model: PropTypes.any.isRequired,
  // children, PropTypes.any
}

Form.defaultProps = {}

export default withRouter(Form)
