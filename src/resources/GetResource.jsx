import React from 'react'
import PropTypes from 'prop-types'

const GetResource = ({ children }) => {
  children = React.Children.map(children, child =>
    React.cloneElement(child, { record: { hola: 22 } })
  )

  return <div>{children}</div>
}

GetResource.propTypes = {}

export default GetResource
