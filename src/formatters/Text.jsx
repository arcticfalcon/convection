import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import isPlainObject from 'lodash/isPlainObject'
import get from 'lodash/get'

const Text = observer(({ path, record, ...props }) => {
  return <span>{get(record, path)}</span>
  return <span>{isPlainObject(record) ? get(record, path) : record[path]}</span>
})

Text.propTypes = {
  path: PropTypes.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  // default: PropTypes.string,
  record: PropTypes.object,
}

Text.defaultProps = {
  // record: {},
}

export default Text
