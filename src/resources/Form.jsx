import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { FormattedMessage } from 'react-intl'

@observer
class Form extends React.Component {
  componentDidMount() {
    this.init(this.props)
  }

  init = props => {
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
      as: FormComponent,
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
      <FormComponent
        onSubmit={submit}
        loading={viewModel.busy}
        error={!viewModel.model.isValid}
        {...otherProps}
      >
        <FormattedMessage id="common.welcome" values={{ name: 'Nombre', unreadCount: 2 }} />
        {childrenWithModel}
      </FormComponent>
    )
  }
}

Form.propTypes = {
  viewModel: PropTypes.shape({
    model: PropTypes.object,
    getProp: PropTypes.func,
    handleChange: PropTypes.func,
    busy: PropTypes.bool,
  }).isRequired,
  submit: PropTypes.func.isRequired,
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  as: PropTypes.func.isRequired,
}

export default withRouter(Form)
