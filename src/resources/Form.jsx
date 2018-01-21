import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form as SemanticForm } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

@observer
class Form extends React.Component {
  componentDidMount() {
    this.init(this.props)
  }

  init(props) {
    props.viewModel.init(props.match.params)
  }
  // componentWillUpdate(newProps) {
  //   this.fetch(newProps)
  // }

  render() {
    const {
      children,
      viewModel,
      submit,
      match,
      location,
      history,
      staticContext,
      ...otherProps
    } = this.props

    const childrenWithModel = React.Children.map(
      children,
      child =>
        React.isValidElement(child)
          ? React.cloneElement(child, {
              model: viewModel.model,
              getter: viewModel.getProp,
              getErrors: viewModel.model.getErrors,
              hasErrors: viewModel.model.hasErrors,
              handleChange: viewModel.handleChange,
            })
          : child
    )

    return (
      <SemanticForm
        onSubmit={submit}
        loading={viewModel.busy}
        error={!viewModel.model.isValid}
        {...otherProps}
      >
        {childrenWithModel}
        {/*<Errors model={viewModel.model} />*/}
      </SemanticForm>
    )
  }
}

Form.propTypes = {
  viewModel: PropTypes.any.isRequired,
  submit: PropTypes.func.isRequired,
  children: PropTypes.any,
}

Form.defaultProps = {}

export default withRouter(Form)
