import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form, Message } from 'semantic-ui-react'
import { withRouter } from 'react-router-dom'

const Errors = observer(({ form }) => <div>{form.errors}</div>)

@observer
class UpdateResource extends React.Component {
  componentDidMount() {
    this.props.form.loading = true
    this.fetch(this.props)
  }

  componentWillUpdate(newProps) {
    this.fetch(newProps)
  }

  render() {
    console.log('rendering updateR', this.props)
    let { children, form } = this.props

    children = React.Children.map(
      children,
      child => (React.isValidElement(child) ? React.cloneElement(child, { record: form }) : child)
    )

    console.log(form)
    return (
      <Form onSubmit={form.submit} loading={form.loading}>
        {children}
        {/*<Errors form={form} />*/}
        {/*<Message error header="Action Forbidden" content={form.errors} />*/}
      </Form>
    )
  }

  fetch(props) {
    props.fetcher(props.match.params.id).then(response => {
      if (props.postFetch) {
        response = props.postFetch(response)
      }
      props.form.extend(response.data)
      props.form.loading = false
    })
  }
}

UpdateResource.propTypes = {
  form: PropTypes.any.isRequired,
  postFetch: PropTypes.func,
  // children, PropTypes.any
}

UpdateResource.defaultProps = {}

export default withRouter(UpdateResource)
