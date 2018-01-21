import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import { Button } from 'semantic-ui-react'

const Submit = observer(props => {
  return <Button content="Submit" />
})

Submit.propTypes = {}

Submit.defaultProps = {}

export default Submit
