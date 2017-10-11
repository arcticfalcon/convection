import React from 'react'

const WithModel = ({ as, children, model, ...props }) => {
  const Element = as
  const childrenWithModel = React.Children.map(children, child =>
    React.cloneElement(child, { model })
  )

  return <Element {...props}>{childrenWithModel}</Element>
}

export default WithModel
