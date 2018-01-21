import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import get from 'lodash/get'

const Text = observer(({ getter, path, model, defaultValue, ...props }) => {
  if (!getter) {
    getter = path => get(model, path, defaultValue)
  }

  return <span>{getter(path)}</span>
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
