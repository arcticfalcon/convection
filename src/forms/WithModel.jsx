import React from 'react'

const WithModel = ({
  as,
  render,
  children,
  model,
  getter,
  getErrors,
  hasErrors,
  handleChange,
  ...props
}) => {
  if (render) {
    return render(model)
  }

  const Element = as
  const childrenWithModel = React.Children.map(children, child =>
    React.cloneElement(child, {
      model,
      getter,
      getErrors,
      hasErrors,
      handleChange,
    })
  )

  return <Element {...props}>{childrenWithModel}</Element>
}

export default WithModel
