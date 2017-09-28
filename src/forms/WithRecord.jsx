import React from 'react'

const WithRecord = ({ as, children, record, ...props }) => {
  const Element = as
  const childrenWithRecord = React.Children.map(children, child =>
    React.cloneElement(child, { record })
  )

  return <Element {...props}>{childrenWithRecord}</Element>
}

export default WithRecord
