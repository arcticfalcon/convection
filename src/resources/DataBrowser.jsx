import React from 'react'
import PropTypes from 'prop-types'
import { observable, action } from 'mobx'
import { observer } from 'mobx-react'
import { Table } from 'semantic-ui-react'

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

const buildRowRenderer = children => (row, i) => {
  const cells = React.Children.map(children, (child, key) => ({
    content: React.cloneElement(child, { model: row }),
    key,
  }))

  return {
    key: `row-${i}`,
    // warning: !!(status && status.match('Requires Action')),
    cells,
  }
}

const buildHeaders = (children, filterModel) =>
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

@observer
class DataBrowser extends React.Component {
  render() {
    const {
      Grid,
      children,
      headerBuilder,
      rowRendererBuilder,
      filterModel,
      filters,
      sortable,
      ...otherProps
    } = this.props

    const FiltersComponent = filters

    return (
      <div>
        <FiltersComponent model={filterModel} />
        <Grid
          headers={headerBuilder(children, filterModel)}
          data={filterModel.data.peek()}
          renderBodyRow={rowRendererBuilder(children)}
          {...otherProps}
        />
      </div>
    )
  }
}

DataBrowser.propTypes = {
  // filters: PropTypes.string.isRequired,
  // sortable: PropTypes.string.isRequired,
  Grid: PropTypes.any.isRequired,
  rowRendererBuilder: PropTypes.func.isRequired,
  headerBuilder: PropTypes.func.isRequired,
}

DataBrowser.defaultProps = {
  Grid: DataGrid,
  rowRendererBuilder: buildRowRenderer,
  headerBuilder: buildHeaders,
}

export default DataBrowser
