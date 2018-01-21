import React from 'react'
import { Table, Menu } from 'semantic-ui-react'
import segmentize from 'segmentize'

const DataGrid = ({ headers, data, renderBodyRow, ...otherProps }) => (
  <Table
    celled
    sortable
    headerRow={headers}
    renderBodyRow={renderBodyRow}
    tableData={data}
    {...otherProps}
  />
)

export default DataGrid

export const buildPagination = (currentPage, pageCount, setPageHandle) => {
  const handleItemClick = (e, { name }) => setPageHandle(name)
  const segments = segmentize({
    currentPage,
    pageCount,
    beginPages: 1,
    endPages: 1,
    sidePages: 1,
  })

  return (
    <Menu pagination>
      {segments.beginPages.map(page => (
        <Menu.Item key={page} name={page} active={false} onClick={handleItemClick} />
      ))}

      {segments.previousPages.length &&
      Math.min(...segments.previousPages) - Math.max(...segments.beginPages) > 1 ? (
        <Menu.Item disabled>...</Menu.Item>
      ) : null}

      {segments.previousPages.map(page => (
        <Menu.Item key={page} name={page} active={false} onClick={handleItemClick} />
      ))}

      {segments.centerPage.map(page => (
        <Menu.Item key={page} name={page} active onClick={handleItemClick} />
      ))}

      {segments.nextPages.map(page => (
        <Menu.Item key={page} name={page} active={false} onClick={handleItemClick} />
      ))}

      {segments.nextPages.length &&
      Math.min(...segments.endPages) - Math.max(...segments.nextPages) > 1 ? (
        <Menu.Item disabled>...</Menu.Item>
      ) : null}

      {segments.endPages.map(page => (
        <Menu.Item key={page} name={page} active={false} onClick={handleItemClick} />
      ))}
    </Menu>
  )
}

export const buildRowRenderer = children => (row, i) => {
  // children.forEach(element => {
  //   if (typeof element == 'function') {
  //     return element(row)
  //   }
  //
  //   return {
  //     content: React.cloneElement(child, { model: row }),
  //     key,
  //   }
  // })
  const cells = React.Children.map(children, (child, key) => {
    return {
      content: React.cloneElement(child, { model: row }),
      key,
    }
  })

  return {
    key: `row-${i}`,
    // warning: !!(status && status.match('Requires Action')),
    cells,
  }
}

export const buildHeaders = (children, filterModel) =>
  React.Children.map(children, child => {
    let sort
    switch (filterModel.getSort(child.props.path)) {
      case 1:
        sort = 'ascending'
        break
      case -1:
        sort = 'descending'
        break
    }
    return (
      <Table.HeaderCell onClick={() => filterModel.handleSort(child.props.path)} sorted={sort}>
        {child.props.path}
      </Table.HeaderCell>
    )

    return child.props.label || child.props.path
  })
