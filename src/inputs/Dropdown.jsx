import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Form, Dropdown, Label } from 'semantic-ui-react'
import get from 'lodash/get'

const DropdownInput = observer(
  ({
    label,
    path,
    model,
    getter,
    getErrors,
    hasErrors,
    handleChange,
    defaultValue,
    dynamicProps,
    options,
    inline,
    required,
    width,
    ...otherProps
  }) => {
    // const touched = model.isTouched(path)
    const doesHaveErrors = hasErrors ? hasErrors(path) : false
    const calculatedProps = dynamicProps ? dynamicProps(model) : {}
    if (!getter) {
      getter = path => get(model, path, defaultValue)
    }

    return (
      <Form.Field error={doesHaveErrors} inline={inline} required={required} width={width}>
        {label || <label htmlFor={path}>{path}</label>}
        <Dropdown
          options={options}
          name={path}
          value={getter(path) || ''}
          onChange={handleChange}
          {...calculatedProps}
          {...otherProps}
        />
        {doesHaveErrors && (
          <Label basic color="red" pointing>
            {getErrors(path)}
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

DropdownInput.propTypes = {
  path: PropTypes.string.isRequired,
  options: PropTypes.array.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: PropTypes.string,
  getErrors: PropTypes.func,
  hasErrors: PropTypes.func,
  handleChange: PropTypes.func,
  model: PropTypes.object,
}

DropdownInput.defaultProps = {
  defaultValue: '',
}

export default DropdownInput
