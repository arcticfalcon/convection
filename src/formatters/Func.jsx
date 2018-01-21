import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'

const Func = observer(({ path, model, ...params }) => {
  return <span>{model[path](params)}</span>
})

Func.propTypes = {
  path: PropTypes.string.isRequired,
  // label: PropTypes.oneOfType([PropTypes.node, PropTypes.func]).isRequired,
  defaultValue: PropTypes.string,
  model: PropTypes.object.isRequired,
}

Func.defaultProps = {
  model: {},
  defaultValue: '',
}

export default Func
