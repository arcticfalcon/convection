import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import isPlainObject from 'lodash/isPlainObject'
import get from 'lodash/get'

const Text = observer(({ path, model, defaultValue, ...props }) => {
  return <span>{get(model, path, defaultValue)}</span>
})

Text.propTypes = {
  path: PropTypes.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: PropTypes.string,
  model: PropTypes.object.isRequired,
}

Text.defaultProps = {
  model: {},
  defaultValue: '',
}

export default Text
