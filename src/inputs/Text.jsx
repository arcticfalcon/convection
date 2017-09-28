import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form } from 'semantic-ui-react'
import get from 'lodash/get'

const Text = observer(({ path, record, defaultValue, ...props }) => {
  return (
    <Form.Input
      label={path}
      name={path}
      value={get(record, path)}
      onChange={record.handleChange}
      error={record.isTouched(path) && record.hasErrors(path)}
      {...props}
    />
  )
})

Text.propTypes = {
  path: PropTypes.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: PropTypes.string,
  record: PropTypes.object,
}

Text.defaultProps = {
  defaultValue: '',
}

export default Text
