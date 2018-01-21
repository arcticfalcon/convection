import React from 'react'
import PropTypes from 'prop-types'
import { observer } from 'mobx-react'
import DataGrid, { buildPagination, buildRowRenderer, buildHeaders } from './DataGrid'
import Filter from '../stores/FilterStore'

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
      paginationBuilder,
      ...otherProps
    } = this.props

    return (
      <div>
        {filters}
        <Grid
          headers={headerBuilder(children, filterModel)}
          data={filterModel.data.peek()}
          renderBodyRow={rowRendererBuilder(children)}
          {...otherProps}
        />
        {paginationBuilder(filterModel.page, filterModel.pageCount, filterModel.setPage)}
      </div>
    )
  }
}

DataBrowser.propTypes = {
  filterModel: PropTypes.instanceOf(Filter).isRequired,
  filters: PropTypes.node.isRequired,
  Grid: PropTypes.node.isRequired,
  rowRendererBuilder: PropTypes.func.isRequired,
  headerBuilder: PropTypes.func.isRequired,
  paginationBuilder: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
}

DataBrowser.defaultProps = {
  Grid: DataGrid,
  rowRendererBuilder: buildRowRenderer,
  headerBuilder: buildHeaders,
  paginationBuilder: buildPagination,
}

export default DataBrowser
