import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form, Input, Label } from 'semantic-ui-react'
import get from 'lodash/get'

const Text = observer(
  ({ label, path, model, defaultValue, dynamicProps, inline, required, width, ...otherProps }) => {
    // const touched = model.isTouched(path)
    const hasErrors = model.hasErrors(path)
    const calculatedProps = dynamicProps ? dynamicProps(model) : {}

    return (
      <Form.Field error={hasErrors} inline={inline} required={required} width={width}>
        {label || <label>{path}</label>}
        <Input
          name={path}
          value={get(model, path)}
          onChange={model.handleChange}
          {...calculatedProps}
          {...otherProps}
        />
        {hasErrors && (
          <Label basic color="red" pointing>
            {model.getErrors(path)}
          </Label>
        )}
      </Form.Field>
    )
  }
)

/*
 <Form.Input
 label={path}
 name={path}
 value={get(model, path)}
 onChange={model.handleChange}
 error={hasErrors}
 {...conditionalProps}
 {...otherProps}
 />
 */

Text.propTypes = {
  path: PropTypes.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: PropTypes.string,
  model: PropTypes.object,
}

Text.defaultProps = {
  defaultValue: '',
}

export default Text
